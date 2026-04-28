/**
 * Pybricks IDE - Service Worker
 * 离线缓存核心：缓存所有静态资源，支持后台更新
 */

const CACHE_NAME = 'pybricks-ide-v1';
const STATIC_CACHE = 'pybricks-static-v1';
const DYNAMIC_CACHE = 'pybricks-dynamic-v1';

// 需要预缓存的静态资源列表
const PRECACHE_URLS = [
  '/',
  '/pages/vehicle.html',
  '/pages/map.html',
  '/pages/program.html',
  '/pages/debug.html',
  '/manifest.json',
  '/js/db.js',
  '/js/app.js'
];

// ============================================================
// 安装阶段：预缓存静态资源
// ============================================================
self.addEventListener('install', (event) => {
  console.log('[SW] Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('[SW] Precaching static assets');
        return cache.addAll(PRECACHE_URLS.map(url => {
          // 确保使用绝对路径
          return new Request(url, { cache: 'reload' });
        })).catch((err) => {
          console.warn('[SW] Some resources failed to precache:', err);
        });
      })
      .then(() => {
        console.log('[SW] Skip waiting to activate immediately');
        return self.skipWaiting();
      })
  );
});

// ============================================================
// 激活阶段：清理旧缓存
// ============================================================
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            // 删除旧版本缓存
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('[SW] Claiming clients');
        return self.clients.claim();
      })
  );
});

// ============================================================
// 请求拦截：根据类型选择不同的缓存策略
// ============================================================
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // 只处理同源请求
  if (url.origin !== location.origin) {
    return;
  }

  // 根据请求类型选择策略
  if (request.method !== 'GET') {
    return; // 只缓存 GET 请求
  }

  // HTML 页面：Network First（优先网络，失败时回退到缓存）
  if (request.mode === 'navigate' || request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(networkFirst(request));
    return;
  }

  // 静态资源（JS/CSS/图片）：Cache First（优先缓存）
  if (
    url.pathname.endsWith('.js') ||
    url.pathname.endsWith('.css') ||
    url.pathname.endsWith('.html') ||
    url.pathname.match(/\.(png|jpg|jpeg|gif|svg|ico|woff2?)$/)
  ) {
    event.respondWith(cacheFirst(request));
    return;
  }

  // 其他请求：Stale While Revalidate（返回缓存同时后台更新）
  event.respondWith(staleWhileRevalidate(request));
});

// ============================================================
// 策略1：Cache First（静态资源优先）
// ============================================================
async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.error('[SW] CacheFirst fetch failed:', error);
    // 返回离线回退
    return caches.match('/pages/vehicle.html');
  }
}

// ============================================================
// 策略2：Network First（HTML/导航优先）
// ============================================================
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.log('[SW] Network failed, trying cache:', request.url);
    const cachedResponse = await caches.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // 如果连缓存也没有，返回离线页面
    const offlinePage = await caches.match('/pages/vehicle.html');
    if (offlinePage) {
      return offlinePage;
    }
    
    // 最后手段：构造一个离线响应
    return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
  }
}

// ============================================================
// 策略3：Stale While Revalidate（返回缓存同时后台更新）
// ============================================================
async function staleWhileRevalidate(request) {
  const cache = await caches.open(DYNAMIC_CACHE);
  const cachedResponse = await cache.match(request);

  const fetchPromise = fetch(request)
    .then((networkResponse) => {
      if (networkResponse.ok) {
        cache.put(request, networkResponse.clone());
      }
      return networkResponse;
    })
    .catch(() => null);

  return cachedResponse || fetchPromise;
}

// ============================================================
// 后台同步：数据同步（未来扩展用）
// ============================================================
self.addEventListener('sync', (event) => {
  console.log('[SW] Background sync:', event.tag);
  
  if (event.tag === 'sync-data') {
    event.waitUntil(syncData());
  }
});

async function syncData() {
  // 未来可以实现：将本地数据同步到服务器
  console.log('[SW] Syncing data...');
}

// ============================================================
// 推送通知（未来扩展用）
// ============================================================
self.addEventListener('push', (event) => {
  if (!event.data) return;
  
  const data = event.data.json();
  const options = {
    body: data.body || 'Pybricks IDE 有新消息',
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    vibrate: [100, 50, 100],
    data: data.data || {}
  };
  
  event.waitUntil(
    self.registration.showNotification(data.title || 'Pybricks IDE', options)
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow('/pages/vehicle.html')
  );
});

// ============================================================
// 消息处理：与其他脚本通信
// ============================================================
self.addEventListener('message', (event) => {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
  
  if (event.data.action === 'getVersion') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
  
  if (event.data.action === 'clearCache') {
    caches.keys().then((names) => {
      return Promise.all(names.map((name) => caches.delete(name)));
    }).then(() => {
      event.ports[0].postMessage({ cleared: true });
    });
  }
});

console.log('[SW] Service Worker loaded');
