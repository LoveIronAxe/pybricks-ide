/**
 * Pybricks IDE - 全局应用层
 * 状态管理、事件总线、路由管理、页面导航
 */

// ============================================================
// EventEmitter - 事件总线
// ============================================================
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
    return () => this.off(event, listener); // 返回取消订阅函数
  }

  off(event, listener) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter(l => l !== listener);
  }

  emit(event, ...args) {
    if (!this.events[event]) return;
    this.events[event].forEach(listener => {
      try {
        listener(...args);
      } catch (err) {
        console.error(`[EventEmitter] Error in ${event}:`, err);
      }
    });
  }

  once(event, listener) {
    const wrapper = (...args) => {
      listener(...args);
      this.off(event, wrapper);
    };
    return this.on(event, wrapper);
  }
}

// 创建全局事件总线
window.pybricksEvents = new EventEmitter();

// ============================================================
// App State - 全局状态管理
// ============================================================
const AppState = {
  // 当前状态
  _state: {
    currentVehicleId: null,
    currentProgramId: null,
    currentMapId: null,
    vehicles: [],
    programs: [],
    maps: [],
    isOnline: navigator.onLine,
    swRegistration: null,
    dbReady: false
  },

  // 获取状态
  get(key) {
    return key ? this._state[key] : { ...this._state };
  },

  // 设置状态（自动保存到 IndexedDB）
  async set(key, value) {
    const oldValue = this._state[key];
    this._state[key] = value;
    
    // 触发事件
    pybricksEvents.emit(`stateChanged:${key}`, value, oldValue);
    pybricksEvents.emit('stateChanged', { key, value, oldValue });
    
    // 如果是当前选中的ID，同步到 IndexedDB
    if (['currentVehicleId', 'currentProgramId', 'currentMapId'].includes(key)) {
      try {
        await window.pybricksDB?.setAppState(key, value);
      } catch (err) {
        console.warn('[AppState] Failed to persist state:', err);
      }
    }
  },

  // 批量设置
  setMultiple(obj) {
    Object.entries(obj).forEach(([key, value]) => {
      this._state[key] = value;
      pybricksEvents.emit(`stateChanged:${key}`, value);
    });
    pybricksEvents.emit('stateChanged', obj);
  },

  // 初始化状态（从 IndexedDB 恢复）
  async init() {
    try {
      await window.pybricksDB?.init();
      
      // 恢复当前选中的ID
      this._state.currentVehicleId = await window.pybricksDB?.getAppState('currentVehicleId') || null;
      this._state.currentProgramId = await window.pybricksDB?.getAppState('currentProgramId') || null;
      this._state.currentMapId = await window.pybricksDB?.getAppState('currentMapId') || null;
      
      // 加载所有数据
      this._state.vehicles = await window.pybricksDB?.getAllVehicles() || [];
      this._state.programs = await window.pybricksDB?.getAllPrograms() || [];
      this._state.maps = await window.pybricksDB?.getAllMaps() || [];
      
      this._state.dbReady = true;
      
      console.log('[AppState] Initialized:', {
        currentVehicleId: this._state.currentVehicleId,
        vehicleCount: this._state.vehicles.length,
        programCount: this._state.programs.length
      });
      
      pybricksEvents.emit('appReady');
      return true;
    } catch (err) {
      console.error('[AppState] Failed to initialize:', err);
      return false;
    }
  }
};

// ============================================================
// Router - Hash 路由管理
// ============================================================
const Router = {
  routes: {
    'vehicle': { page: 'vehicle.html', title: '车辆配置' },
    'map': { page: 'map.html', title: '地图编辑' },
    'program': { page: 'program.html', title: '程序编辑' },
    'debug': { page: 'debug.html', title: '调试' }
  },

  currentRoute: null,

  // 初始化路由
  init() {
    // 监听 hash 变化
    window.addEventListener('hashchange', () => this.handleRouteChange());
    
    // 初始化路由
    this.handleRouteChange();
  },

  // 处理路由变化
  handleRouteChange() {
    const hash = window.location.hash.slice(1) || 'vehicle';
    const route = this.routes[hash] || this.routes['vehicle'];
    
    if (this.currentRoute !== hash) {
      this.currentRoute = hash;
      pybricksEvents.emit('routeChanged', hash, route);
      document.title = `Pybricks IDE - ${route.title}`;
    }
  },

  // 导航到指定页面
  navigate(routeName, params = {}) {
    const route = this.routes[routeName];
    if (!route) {
      console.warn('[Router] Unknown route:', routeName);
      return;
    }

    // 构建带参数的 hash
    const query = new URLSearchParams(params).toString();
    const newHash = query ? `#${routeName}?${query}` : `#${routeName}`;
    
    window.location.hash = newHash;
  },

  // 获取当前路由参数
  getParams() {
    const hash = window.location.hash;
    const [routePart, queryPart] = hash.split('?');
    const params = {};
    
    if (queryPart) {
      new URLSearchParams(queryPart).forEach((value, key) => {
        params[key] = value;
      });
    }
    
    return params;
  }
};

// ============================================================
// Navigation - 导航栏管理
// ============================================================
const Navigation = {
  // 当前激活的页面
  currentPage: null,

  // 页面图标映射
  pageIcons: {
    'vehicle': '🚗',
    'map': '🗺️',
    'program': '📝',
    'debug': '🔧'
  },

  // 页面名称映射
  pageNames: {
    'vehicle': '车辆',
    'map': '地图',
    'program': '程序',
    'debug': '调试'
  },

  // 初始化导航
  init() {
    // 监听路由变化
    pybricksEvents.on('routeChanged', (route) => {
      this.setActive(route);
    });

    // 点击导航项
    document.addEventListener('click', (e) => {
      const navItem = e.target.closest('[data-nav]');
      if (navItem) {
        const route = navItem.dataset.nav;
        Router.navigate(route);
        e.preventDefault();
      }
    });

    // 监听网络状态变化
    window.addEventListener('online', () => {
      AppState.set('isOnline', true);
      this.updateNetworkStatus(true);
    });
    
    window.addEventListener('offline', () => {
      AppState.set('isOnline', false);
      this.updateNetworkStatus(false);
    });

    // 更新初始网络状态
    this.updateNetworkStatus(navigator.onLine);
  },

  // 设置当前激活的导航项
  setActive(routeName) {
    // 更新 sidebar 激活状态
    document.querySelectorAll('.sidebar-item').forEach(item => {
      if (item.dataset.nav === routeName) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // 更新 content 页面显示
    document.querySelectorAll('.page-content').forEach(page => {
      if (page.dataset.page === routeName) {
        page.style.display = '';
      } else {
        page.style.display = 'none';
      }
    });

    this.currentPage = routeName;
  },

  // 更新网络状态指示器
  updateNetworkStatus(isOnline) {
    let indicator = document.querySelector('.network-status');
    
    if (!indicator) {
      indicator = document.createElement('div');
      indicator.className = 'network-status';
      indicator.style.cssText = `
        position: fixed;
        top: 8px;
        right: 8px;
        padding: 4px 12px;
        border-radius: 12px;
        font-size: 12px;
        font-weight: 500;
        z-index: 1000;
        transition: all 0.3s;
      `;
      document.body.appendChild(indicator);
    }

    if (isOnline) {
      indicator.textContent = '🌐 在线';
      indicator.style.background = '#e8f5e9';
      indicator.style.color = '#2e7d32';
    } else {
      indicator.textContent = '📴 离线';
      indicator.style.background = '#ffebee';
      indicator.style.color = '#c62828';
    }
  }
};

// ============================================================
// Service Worker 注册
// ============================================================
async function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) {
    console.warn('[SW] Service Worker not supported');
    return;
  }

  try {
    const registration = await navigator.serviceWorker.register('./sw.js', {
      scope: '/'
    });

    console.log('[SW] Registered:', registration.scope);
    AppState.set('swRegistration', registration);

    // 检查更新
    registration.addEventListener('updatefound', () => {
      console.log('[SW] New version available');
      pybricksEvents.emit('swUpdateAvailable');
    });

    // 注册成功
    pybricksEvents.emit('swRegistered', registration);
    
  } catch (err) {
    console.error('[SW] Registration failed:', err);
  }
}

// ============================================================
// Toast 通知
// ============================================================
const Toast = {
  show(message, type = 'info', duration = 3000) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%) translateY(100px);
      padding: 12px 24px;
      border-radius: 12px;
      font-size: 14px;
      font-weight: 500;
      z-index: 10000;
      transition: transform 0.3s ease;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;

    // 类型样式
    const styles = {
      success: { bg: '#e8f5e9', color: '#2e7d32' },
      error: { bg: '#ffebee', color: '#c62828' },
      warning: { bg: '#fff8e1', color: '#f57f17' },
      info: { bg: '#e3f2fd', color: '#1565c0' }
    };
    
    const style = styles[type] || styles.info;
    toast.style.background = style.bg;
    toast.style.color = style.color;

    document.body.appendChild(toast);

    // 显示动画
    requestAnimationFrame(() => {
      toast.style.transform = 'translateX(-50%) translateY(0)';
    });

    // 自动隐藏
    setTimeout(() => {
      toast.style.transform = 'translateX(-50%) translateY(100px)';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  },

  success(message) { this.show(message, 'success'); },
  error(message) { this.show(message, 'error'); },
  warning(message) { this.show(message, 'warning'); },
  info(message) { this.show(message, 'info'); }
};

// 全局暴露
window.Toast = Toast;

// ============================================================
// 初始化应用
// ============================================================
async function initApp() {
  console.log('[App] Initializing...');

  // 等待 DOM 加载完成
  if (document.readyState === 'loading') {
    await new Promise(resolve => document.addEventListener('DOMContentLoaded', resolve));
  }

  // 初始化数据库和状态
  await AppState.init();

  // 初始化路由
  Router.init();

  // 初始化导航
  Navigation.init();

  // 注册 Service Worker
  await registerServiceWorker();

  console.log('[App] Ready!');
  pybricksEvents.emit('appReady');
}

// ============================================================
// 数据操作辅助函数
// ============================================================
const DataHelper = {
  // 车辆操作
  async createVehicle(data) {
    const vehicle = await window.pybricksDB.saveVehicle(data);
    AppState._state.vehicles.push(vehicle);
    pybricksEvents.emit('vehicleCreated', vehicle);
    pybricksEvents.emit('vehiclesUpdated');
    Toast.success('车辆已创建');
    return vehicle;
  },

  async updateVehicle(data) {
    const vehicle = await window.pybricksDB.saveVehicle(data);
    const index = AppState._state.vehicles.findIndex(v => v.id === vehicle.id);
    if (index !== -1) {
      AppState._state.vehicles[index] = vehicle;
    }
    pybricksEvents.emit('vehicleUpdated', vehicle);
    pybricksEvents.emit('vehiclesUpdated');
    Toast.success('车辆已保存');
    return vehicle;
  },

  async deleteVehicle(id) {
    await window.pybricksDB.deleteVehicle(id);
    AppState._state.vehicles = AppState._state.vehicles.filter(v => v.id !== id);
    pybricksEvents.emit('vehicleDeleted', id);
    pybricksEvents.emit('vehiclesUpdated');
    Toast.success('车辆已删除');
  },

  // 程序操作
  async createProgram(data) {
    const program = await window.pybricksDB.saveProgram(data);
    AppState._state.programs.push(program);
    pybricksEvents.emit('programCreated', program);
    pybricksEvents.emit('programsUpdated');
    Toast.success('程序已创建');
    return program;
  },

  async updateProgram(data) {
    const program = await window.pybricksDB.saveProgram(data);
    const index = AppState._state.programs.findIndex(p => p.id === program.id);
    if (index !== -1) {
      AppState._state.programs[index] = program;
    }
    pybricksEvents.emit('programUpdated', program);
    pybricksEvents.emit('programsUpdated');
    Toast.success('程序已保存');
    return program;
  },

  async deleteProgram(id) {
    await window.pybricksDB.deleteProgram(id);
    AppState._state.programs = AppState._state.programs.filter(p => p.id !== id);
    pybricksEvents.emit('programDeleted', id);
    pybricksEvents.emit('programsUpdated');
    Toast.success('程序已删除');
  },

  // 地图操作
  async createMap(data) {
    const map = await window.pybricksDB.saveMap(data);
    AppState._state.maps.push(map);
    pybricksEvents.emit('mapCreated', map);
    pybricksEvents.emit('mapsUpdated');
    Toast.success('地图已创建');
    return map;
  },

  async updateMap(data) {
    const map = await window.pybricksDB.saveMap(data);
    const index = AppState._state.maps.findIndex(m => m.id === map.id);
    if (index !== -1) {
      AppState._state.maps[index] = map;
    }
    pybricksEvents.emit('mapUpdated', map);
    pybricksEvents.emit('mapsUpdated');
    Toast.success('地图已保存');
    return map;
  },

  async deleteMap(id) {
    await window.pybricksDB.deleteMap(id);
    AppState._state.maps = AppState._state.maps.filter(m => m.id !== id);
    pybricksEvents.emit('mapDeleted', id);
    pybricksEvents.emit('mapsUpdated');
    Toast.success('地图已删除');
  }
};

// 全局暴露
window.DataHelper = DataHelper;
window.AppState = AppState;
window.Router = Router;
window.Navigation = Navigation;
window.pybricksEvents = pybricksEvents;

// 导出模块（可选）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AppState, Router, Navigation, pybricksEvents, DataHelper };
}
