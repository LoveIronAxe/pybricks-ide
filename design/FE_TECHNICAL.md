# Pybricks 机器车配置 IDE - 前端技术方案

## 1. HTML5 Drag & Drop API

### 1.1 核心概念

HTML5 原生拖拽 API 不需要外部库，适合列表项拖拽排序、面板拖拽布局等场景。注意：移动端支持较弱（iOS Safari 几乎不支持），如需移动端兼容建议使用 `pointer events` 或触摸事件模拟。

### 1.2 拖拽事件详解

| 事件 | 触发时机 | 常用场景 |
|------|----------|----------|
| `dragstart` | 拖拽开始时 | 设置 `dataTransfer`、添加视觉反馈 |
| `drag` | 拖拽过程中（持续触发） | 实时预览位置 |
| `dragenter` | 进入可放置区域 | 高亮目标区域 |
| `dragover` | 在可放置区域上方移动 | **必须 `preventDefault()` 才允许 drop** |
| `dragleave` | 离开可放置区域 | 移除高亮 |
| `drop` | 放置时 | 读取 `dataTransfer`、执行操作 |
| `dragend` | 拖拽结束时 | 清理视觉状态 |

### 1.3 传递被拖拽元素 ID

```javascript
// 被拖拽元素上设置
el.addEventListener('dragstart', (e) => {
  e.dataTransfer.setData('text/plain', el.dataset.id);  // 传递元素ID
  e.dataTransfer.effectAllowed = 'move';

  // 拖拽开始时添加视觉反馈
  el.classList.add('dragging');
});

// 放置区域监听
dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();  // 关键！阻止默认行为才能接收 drop
  e.dataTransfer.dropEffect = 'move';
});

dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  const draggedId = e.dataTransfer.getData('text/plain');
  console.log('放置的元素ID:', draggedId);
  // 执行排序/移动逻辑
});
```

### 1.4 CSS 拖拽视觉效果

```css
/* 拖拽中的元素（原位置） */
.dragging {
  opacity: 0.4;  /* 原位置变透明 */
  border: 2px dashed #888;
  background: #f5f5f5;
}

/* 拖拽跟随鼠标的克隆（需JS实现，见下文） */

/* 放置目标区域高亮 */
.drop-zone.drag-over {
  background: #e3f2fd;
  border: 2px solid #2196f3;
  transition: all 0.2s ease;
}

/* 有效放置位置指示器 */
.drop-indicator {
  height: 3px;
  background: #2196f3;
  border-radius: 2px;
  transition: opacity 0.2s;
}
```

### 1.5 卡片"拿起跟随鼠标"效果（Ghost/Proxy 模式）

标准 HTML5 拖拽的跟随效果由浏览器控制，不够灵活。以下是自定义 Ghost 方案：

```javascript
let ghostEl = null;
let offsetX = 0, offsetY = 0;

sourceEl.addEventListener('dragstart', (e) => {
  // 创建 Ghost 元素
  ghostEl = sourceEl.cloneNode(true);
  ghostEl.style.cssText = `
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    width: ${sourceEl.offsetWidth}px;
    opacity: 0.85;
    transform: rotate(3deg);
    box-shadow: 0 8px 24px rgba(0,0,0,0.2);
  `;
  document.body.appendChild(ghostEl);

  // 记录偏移量
  const rect = sourceEl.getBoundingClientRect();
  offsetX = e.clientX - rect.left;
  offsetY = e.clientY - rect.top;

  // 隐藏默认拖拽预览（Firefox 需要）
  if (e.dataTransfer.setDragImage) {
    e.dataTransfer.setDragImage(new Image(), 0, 0);
  }

  sourceEl.classList.add('dragging');
});

// 全局监听 mousemove（拖拽期间）
document.addEventListener('dragover', (e) => {
  if (ghostEl) {
    ghostEl.style.left = (e.clientX - offsetX) + 'px';
    ghostEl.style.top = (e.clientY - offsetY) + 'px';
  }
});

sourceEl.addEventListener('dragend', () => {
  sourceEl.classList.remove('dragging');
  if (ghostEl) {
    ghostEl.remove();
    ghostEl = null;
  }
});
```

### 1.6 注意事项

- **移动端兼容**：iOS Safari 不支持 `draggable` 属性，需要使用 Pointer Events API 或 Touch Events 单独处理
- **`dragover` 必须 `preventDefault()`**：否则 drop 事件不会触发
- **Firefox 的 setDragImage**：有时需要设置空图片来隐藏默认预览
- **文件拖拽**：`dataTransfer.files` 可获取拖入的文件，配合 File API 使用

---

## 2. localStorage 高级用法

### 2.1 基础存取与 JSON 序列化

```javascript
// 保存（自动 JSON 序列化）
function saveVehicles(vehicles) {
  localStorage.setItem('pybricks_vehicles', JSON.stringify(vehicles));
}

// 读取（自动反序列化 + 异常处理）
function loadVehicles() {
  const raw = localStorage.getItem('pybricks_vehicles');
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch (e) {
    console.warn('vehicles 数据损坏，忽略:', e);
    return [];
  }
}
```

### 2.2 数据结构示例

```javascript
// vehicles.json 结构（内存中）
const vehiclesStore = {
  vehicles: [
    {
      id: 'v_001',
      name: '皮皮的小车',
      createdAt: '2026-04-27T12:00:00Z',
      updatedAt: '2026-04-27T14:30:00Z',
      config: {
        hubType: 'hub@prime',       // 集线器类型
        leftMotor: 'port.A',         // 左电机端口
        rightMotor: 'port.B',        // 右电机端口
        sensorType: 'ultrasonic',    // 传感器类型
        sensorPort: 'port.C',        // 传感器端口
        gyroEnabled: true,
        wheelDiameter: 62,           // mm
        axleTrack: 100,              // mm
      },
      program: {
        // Pybricks Python 代码片段
        code: `from pybricks.pupdevices import Motor\nfrom pybricks.parameters import Port`,
        lastModified: '2026-04-27T14:30:00Z',
      },
    }
  ],
  activeVehicleId: 'v_001',
  version: '1.0',  // 用于未来数据迁移
};

// maps.json 结构（内存中）
const mapsStore = {
  maps: [
    {
      id: 'm_001',
      name: '客厅地图',
      imageData: 'data:image/png;base64,...', // Base64 编码的小图
      gridCellSize: 50,  // 每格像素
      gridCols: 20,
      gridRows: 15,
      obstacles: [
        { x: 3, y: 5, w: 2, h: 1, type: 'wall' },
        { x: 8, y: 2, w: 1, h: 1, type: 'goal' },
      ],
      origin: { x: 0, y: 0, heading: 0 },  // 机器人起点
    }
  ],
  activeMapId: 'm_001',
};
```

### 2.3 自动保存机制

每次修改后自动触发保存，无需手动保存按钮：

```javascript
// 防抖保存，避免频繁写入
let saveTimer = null;
const SAVE_DEBOUNCE_MS = 500;

function markDirty() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    saveVehicles(vehiclesStore.vehicles);
    saveMaps(mapsStore.maps);
    console.log('[AutoSave] 数据已保存');
  }, SAVE_DEBOUNCE_MS);
}

// 监听所有修改操作，自动触发保存
function updateVehicle(id, changes) {
  const vehicle = vehiclesStore.vehicles.find(v => v.id === id);
  if (vehicle) {
    Object.assign(vehicle, changes, { updatedAt: new Date().toISOString() });
    vehiclesStore.activeVehicleId = id;
    markDirty();  // 自动保存
  }
}
```

### 2.4 存储上限与图片处理

| 项目 | 限制 |
|------|------|
| 单条 `localStorage` 项 | 通常 **5MB**（各浏览器略有差异） |
| 总量 | 通常 **5-10MB** |
| 超出时 | 抛出 `QuotaExceededError` |

**图片处理策略：**

```javascript
// 策略1：Base64 + 压缩（适合小图）
function compressImage(file, maxWidth = 400, quality = 0.6) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ratio = Math.min(maxWidth / img.width, maxWidth / img.height);
        canvas.width = img.width * ratio;
        canvas.height = img.height * ratio;
        canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

// 策略2：图片不存 localStorage，只存文件名/索引
// 实际图片存 IndexedDB（见下一章）
const mapRecord = {
  id: 'm_001',
  name: '客厅地图',
  thumbnailData: 'data:image/jpeg;base64,...',  // 缩略图（较小）
  // imageId 指向 IndexedDB 中的大图
  imageId: 'img_large_001',
};
```

### 2.5 初始化加载流程

```javascript
// ============ 应用初始化 ============
const state = {
  vehicles: [],
  maps: [],
  activeVehicleId: null,
  activeMapId: null,
  isLoaded: false,
};

async function initializeApp() {
  console.log('[Init] 开始加载数据...');

  // 1. 从 localStorage 加载
  state.vehicles = loadVehicles();
  const mapsRaw = localStorage.getItem('pybricks_maps');
  state.maps = mapsRaw ? JSON.parse(mapsRaw) : [];

  // 2. 恢复活跃选中项
  state.activeVehicleId = localStorage.getItem('pybricks_active_vehicle') || null;
  state.activeMapId = localStorage.getItem('pybricks_active_map') || null;

  // 3. 验证选中项是否存在
  if (state.activeVehicleId && !state.vehicles.find(v => v.id === state.activeVehicleId)) {
    state.activeVehicleId = state.vehicles[0]?.id || null;
  }

  // 4. 渲染 UI
  renderVehicleList();
  renderMapList();
  if (state.activeVehicleId) {
    loadVehicleDetail(state.activeVehicleId);
  }

  state.isLoaded = true;
  console.log('[Init] 完成，加载了', state.vehicles.length, '辆车');
}

// 页面加载时执行
document.addEventListener('DOMContentLoaded', initializeApp);
```

### 2.6 注意事项

- **同步阻塞**：`localStorage 是同步 API`，大量数据读写会阻塞主线程，建议数据控制在 1-2MB 以内
- **异常处理**：`JSON.parse` 可能抛异常（数据损坏），务必 try-catch
- **版本迁移**：存储结构变更时，通过 `version` 字段做数据迁移
- **隐私模式**：`localStorage` 在 Safari 隐私模式下可能不可用（会抛异常）

---

## 3. IndexedDB（备选方案）

### 3.1 适用场景

- 图片、音频等二进制大文件（单文件可达几十 MB）
- 需要高效索引和查询的结构化数据
- 复杂查询（范围查询、游标遍历）

### 3.2 基础 API

```javascript
// ============ 数据库初始化 ============
const DB_NAME = 'PybricksIDE';
const DB_VERSION = 1;
let db = null;

function initDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => reject(request.error);

    request.onsuccess = () => {
      db = request.result;
      console.log('[IndexedDB] 连接成功');
      resolve(db);
    };

    request.onupgradeneeded = (e) => {
      const database = e.target.result;

      // 创建对象存储空间（类似"表"）
      if (!database.objectStoreNames.contains('images')) {
        const store = database.createObjectStore('images', { keyPath: 'id' });
        store.createIndex('type', 'type', { unique: false });  // 可按 type 查询
      }

      if (!database.objectStoreNames.contains('vehicles')) {
        database.createObjectStore('vehicles', { keyPath: 'id' });
      }

      console.log('[IndexedDB] 数据库升级完成');
    };
  });
}

// ============ 增删改查 ============
function dbAdd(storeName, data) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, 'readwrite');
    const store = tx.objectStore(storeName);
    const request = store.add(data);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function dbGet(storeName, id) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, 'readonly');
    const store = tx.objectStore(storeName);
    const request = store.get(id);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function dbGetAll(storeName) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, 'readonly');
    const store = tx.objectStore(storeName);
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function dbDelete(storeName, id) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, 'readwrite');
    const store = tx.objectStore(storeName);
    const request = store.delete(id);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}
```

### 3.3 存储图片示例

```javascript
// 保存大图片到 IndexedDB
async function saveImageToDB(id, file) {
  const arrayBuffer = await file.arrayBuffer();
  await dbAdd('images', {
    id,
    type: file.type,
    data: arrayBuffer,
    name: file.name,
    size: file.size,
    createdAt: new Date().toISOString(),
  });
  console.log('[IndexedDB] 图片已存储:', file.name, (file.size / 1024).toFixed(1), 'KB');
}

// 从 IndexedDB 读取图片显示
async function loadImageFromDB(id) {
  const record = await dbGet('images', id);
  if (!record) return null;
  const blob = new Blob([record.data], { type: record.type });
  return URL.createObjectURL(blob);  // 转成 Object URL 供 <img src=""> 使用
}

// 清理 Object URL（页面卸载时）
window.addEventListener('beforeunload', () => {
  // 记录的所有 URL 都应 revoke
});
```

### 3.4 注意事项

- **异步 API**：IndexedDB 全部是异步（基于 IDBRequest），需要 Promise 封装
- **版本升级**：`onupgradeneeded` 是唯一能创建/删除 Object Store 的时机
- **事务生命周期**：事务在所有请求完成后自动关闭，不要在事务外使用游标
- **移动端存储限制**：iOS Safari 的 IndexedDB 容量通常为 **1GB+**，比 localStorage 大得多
- **简单场景优先用 localStorage**：数据量小（<2MB）时，localStorage 足够且更简单

---

## 4. 响应式布局

### 4.1 三栏 Flexbox 布局

```css
/* ============ 容器布局 ============ */
.app-container {
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

/* 左侧图标导航栏：固定 56px */
.sidebar {
  width: 56px;
  min-width: 56px;
  background: #1a1a2e;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 0;
  gap: 4px;
}

.sidebar-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;
  font-size: 20px;
}

.sidebar-icon:hover {
  background: rgba(255,255,255,0.1);
}

.sidebar-icon.active {
  background: #e94560;
}

/* 中间列表栏：240-280px，可伸缩 */
.list-panel {
  width: 260px;
  min-width: 200px;
  max-width: 360px;
  background: #16213e;
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgba(255,255,255,0.08);
}

.list-header {
  padding: 16px;
  font-weight: 600;
  color: #eee;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.list-content {
  flex: 1;
  overflow-y: auto;
  padding: 8px;
}

/* 右侧详情栏：占据剩余全部空间 */
.detail-panel {
  flex: 1;
  background: #0f0f23;
  overflow-y: auto;
  padding: 24px;
}
```

```html
<div class="app-container">
  <aside class="sidebar">
    <div class="sidebar-icon active" data-view="vehicles">🚗</div>
    <div class="sidebar-icon" data-view="maps">🗺️</div>
    <div class="sidebar-icon" data-view="settings">⚙️</div>
  </aside>

  <section class="list-panel">
    <div class="list-header">
      <span>车辆列表</span>
      <button>+ 新建</button>
    </div>
    <div class="list-content">
      <!-- 车辆卡片列表 -->
    </div>
  </section>

  <main class="detail-panel">
    <!-- 车辆/地图详情编辑区 -->
  </main>
</div>
```

### 4.2 列表项卡片样式

```css
.list-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.15s, transform 0.15s;
  color: #ccc;
  margin-bottom: 4px;
}

.list-item:hover {
  background: rgba(255,255,255,0.05);
}

.list-item.active {
  background: rgba(233,69,96,0.2);
  border-left: 3px solid #e94560;
  color: #fff;
}

.list-item:active {
  transform: scale(0.98);
}

.list-item-icon {
  font-size: 24px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,0.05);
  border-radius: 6px;
}

.list-item-info {
  flex: 1;
  min-width: 0;
}

.list-item-name {
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.list-item-meta {
  font-size: 11px;
  color: #666;
  margin-top: 2px;
}
```

### 4.3 Media Query 响应式断点

```css
/* ============ 平板（竖屏）：列表栏可折叠 ============ */
@media (max-width: 768px) {
  .sidebar {
    width: 48px;
    min-width: 48px;
  }

  .list-panel {
    width: 200px;
    min-width: 160px;
  }

  .detail-panel {
    padding: 16px;
  }
}

/* ============ 手机（竖屏）：侧边栏隐藏，底部导航 ============ */
@media (max-width: 480px) {
  .sidebar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    flex-direction: row;
    justify-content: space-around;
    z-index: 100;
    border-top: 1px solid rgba(255,255,255,0.1);
  }

  .app-container {
    flex-direction: column;
    height: calc(100vh - 60px);  /* 留出底部导航空间 */
  }

  .list-panel {
    width: 100%;
    max-width: none;
    height: 40%;
    border-right: none;
    border-bottom: 1px solid rgba(255,255,255,0.08);
  }

  .detail-panel {
    flex: 1;
    padding: 12px;
  }

  /* 全屏模式按钮 */
  .fullscreen-btn {
    display: flex;
  }
}
```

### 4.4 注意事项

- **`100vh` 移动端问题**：iOS Safari 地址栏会动态出现/隐藏，建议使用 `100dvh`（dynamic viewport height）
- **Flex 缩写**：`flex: 1` 是 `flex: 1 1 0%` 的简写（可伸缩）
- **滚动穿透**：移动端弹窗时需要锁定背景滚动（`overflow: hidden`）
- **无障碍**：`min-width` 防止内容被压缩到不可用，配合 `overflow: hidden` + `text-overflow: ellipsis`

---

## 5. CSS 技巧

### 5.1 `backdrop-filter: blur` 弹窗遮罩

```css
/* 遮罩层 */
.modal-overlay {
  position: fixed;
  inset: 0;  /* top:0; right:0; bottom:0; left:0; */
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);  /* Safari 兼容前缀 */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.25s, visibility 0.25s;
}

.modal-overlay.visible {
  opacity: 1;
  visibility: visible;
}

/* 弹窗内容 */
.modal-content {
  background: #1a1a2e;
  border-radius: 16px;
  padding: 24px;
  min-width: 320px;
  max-width: 90vw;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0,0,0,0.4);
  transform: scale(0.9) translateY(20px);
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.modal-overlay.visible .modal-content {
  transform: scale(1) translateY(0);
}
```

```javascript
// 打开/关闭弹窗
function openModal(id) {
  document.getElementById(id).classList.add('visible');
  document.body.style.overflow = 'hidden';  // 禁止背景滚动
}

function closeModal(id) {
  document.getElementById(id).classList.remove('visible');
  document.body.style.overflow = '';
}
```

### 5.2 CSS 变量（陛下配色方案）

```css
/* ============ 陛下配色系统 ============ */
:root {
  /* 深色主色调 */
  --bg-primary: #0f0f23;
  --bg-secondary: #1a1a2e;
  --bg-tertiary: #16213e;
  --bg-card: #1a1a2e;

  /* 强调色 */
  --accent-primary: #e94560;    /* 陛下红 */
  --accent-secondary: #0f3460;  /* 深蓝 */
  --accent-highlight: #533483; /* 紫色 */

  /* 文字色 */
  --text-primary: #ffffff;
  --text-secondary: #a0a0b0;
  --text-muted: #666680;

  /* 边框/分割线 */
  --border-subtle: rgba(255,255,255,0.08);
  --border-active: rgba(233,69,96,0.5);

  /* 功能色 */
  --success: #4ade80;
  --warning: #fbbf24;
  --error: #ef4444;
  --info: #60a5fa;

  /* 间距系统 */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;

  /* 圆角 */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;

  /* 阴影 */
  --shadow-sm: 0 2px 8px rgba(0,0,0,0.2);
  --shadow-md: 0 8px 24px rgba(0,0,0,0.3);
  --shadow-lg: 0 16px 48px rgba(0,0,0,0.4);

  /* 过渡 */
  --transition-fast: 0.15s ease;
  --transition-normal: 0.25s ease;
  --transition-spring: 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

```css
/* 使用示例 */
.button-primary {
  background: var(--accent-primary);
  color: var(--text-primary);
  border-radius: var(--radius-md);
  padding: var(--spacing-sm) var(--spacing-md);
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.button-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}
```

### 5.3 `transition` 和 `transform` 动画

```css
/* ============ 通用动画类 ============ */

/* 淡入 */
.fade-in {
  animation: fadeIn 0.3s ease forwards;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

/* 滑入 */
.slide-in-right {
  animation: slideInRight 0.3s ease forwards;
}
@keyframes slideInRight {
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
}

/* 弹性点击效果 */
.press-effect {
  transition: transform 0.1s ease;
}
.press-effect:active {
  transform: scale(0.95);
}

/* 列表项依次动画 */
.list-item:nth-child(1) { animation-delay: 0ms; }
.list-item:nth-child(2) { animation-delay: 50ms; }
.list-item:nth-child(3) { animation-delay: 100ms; }
.list-item:nth-child(4) { animation-delay: 150ms; }
.list-item:nth-child(5) { animation-delay: 200ms; }
.list-item {
  opacity: 0;
  animation: fadeInUp 0.3s ease forwards;
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}

/* 开关 toggle */
.toggle-track {
  width: 44px;
  height: 24px;
  background: var(--bg-tertiary);
  border-radius: 12px;
  position: relative;
  cursor: pointer;
  transition: background var(--transition-normal);
}

.toggle-track.active {
  background: var(--accent-primary);
}

.toggle-thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
  transition: transform var(--transition-spring);
}

.toggle-track.active .toggle-thumb {
  transform: translateX(20px);
}

/* 颜色主题切换（CSS 变量） */
.theme-dark {
  --bg-primary: #0f0f23;
  --bg-secondary: #1a1a2e;
  --text-primary: #ffffff;
}

.theme-light {
  --bg-primary: #f5f5f5;
  --bg-secondary: #ffffff;
  --text-primary: #1a1a2e;
}

body {
  background: var(--bg-primary);
  color: var(--text-primary);
  transition: background 0.3s, color 0.3s;
}
```

### 5.4 注意事项

- **`backdrop-filter` 性能**：在低性能设备上可能导致卡顿，动画元素控制在 3-5 个以内
- **Safari 前缀**：iOS Safari 仍需 `-webkit-backdrop-filter` 前缀
- **动画性能**：`transform` 和 `opacity` 不触发重排（reflow），性能最好；避免动画 `width`、`height`、`top/left`
- **减弱动效**：`prefers-reduced-motion` 媒体查询尊重用户系统设置：
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
  ```

---

## 附录：技术选型建议

| 场景 | 推荐方案 |
|------|----------|
| 列表拖拽排序 | HTML5 Drag & Drop API |
| 卡片跟随鼠标 | Pointer Events + 自定义 Ghost 元素 |
| 少量配置数据 | localStorage + 防抖自动保存 |
| 大图片存储 | IndexedDB（Base64 转 ArrayBuffer） |
| 布局框架 | 纯 Flexbox + CSS Grid，不引入 Bootstrap/Tailwind |
| 移动端适配 | Media Query 断点 480px / 768px |
| 弹窗效果 | `backdrop-filter: blur` + `transform` 动画 |
