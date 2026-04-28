# Pybricks IDE - 离线PWA部署指南

## 📦 概述

Pybricks IDE 已改造为**渐进式Web应用 (PWA)**，支持：
- ✅ **离线使用** - Service Worker 缓存所有资源，没网也能用
- ✅ **本地存储** - IndexedDB 保存所有数据，关闭浏览器不丢失
- ✅ **桌面安装** - 可"安装"到桌面，像原生App一样运行
- ✅ **跨设备** - 用户自己的浏览器数据，随意关闭再打开

## 🗂️ 文件结构

```
/IDE/
├── manifest.json      # PWA 清单（名称、图标、主题色等）
├── sw.js              # Service Worker（离线缓存核心）
├── js/
│   ├── db.js          # IndexedDB 数据库层
│   └── app.js         # 全局应用层（状态、路由、事件）
├── pages/
│   ├── vehicle.html   # 车辆配置页（已改造）
│   ├── map.html       # 地图编辑页
│   ├── program.html   # 程序编辑页
│   └── debug.html     # 调试页
└── README_PWA.md      # 本文档
```

## 🚀 部署方式

### 方式1：直接打开（开发测试用）

直接用浏览器打开 `pages/vehicle.html` 文件即可运行。

**注意**：部分浏览器（如Chrome）出于安全考虑，Service Worker 只在 HTTPS 或 localhost 下生效。直接打开文件可能无法注册 Service Worker，但 IndexedDB 仍然正常工作。

### 方式2：本地HTTP服务器（推荐开发用）

```bash
# Python 3
cd /path/to/IDE
python -m http.server 8080

# 然后访问 http://localhost:8080/pages/vehicle.html
```

### 方式3：部署到静态托管（生产用）

把整个 `IDE` 文件夹部署到任何静态托管服务：

| 服务 | 部署方式 |
|------|----------|
| GitHub Pages | push 到 `gh-pages` 分支 |
| Vercel | `vercel deploy` |
| Netlify | 拖拽文件夹 |
| Cloudflare Pages | 连接 Git 仓库 |

**重要**：部署时确保：
- 使用 **HTTPS**（PWA 要求）
- Service Worker 的 `scope` 正确覆盖所有页面
- `manifest.json` 中的路径正确

### 方式4：局域网访问（内网部署）

在内网服务器上部署，用户可通过局域网IP访问：

```
http://192.168.x.x/pages/vehicle.html
```

## 📱 安装到桌面

当用户首次访问时，浏览器会显示"添加到主屏幕"提示，或者用户可以：

1. Chrome/Edge：点击地址栏右侧的 +图标 → "安装"
2. Safari (iOS)：分享按钮 → "添加到主屏幕"
3. Firefox：菜单 → "安装"

安装后，Pybricks IDE 会以独立窗口运行，没有浏览器地址栏。

## 💾 数据存储

### IndexedDB 数据库结构

| Object Store | 用途 | keyPath |
|--------------|------|---------|
| `vehicles` | 车辆配置 | `id` |
| `programs` | 程序配置 | `id` |
| `maps` | 地图配置 | `id` |
| `settings` | 应用设置 | `key` |
| `appState` | 当前状态 | `key` |

### 数据导出/导入

在控制台可以导出所有数据：

```javascript
// 导出
const data = await window.pybricksDB.exportAll();
console.log(JSON.stringify(data, null, 2));

// 导入
await window.pybricksDB.importAll(data);

// 清空
await window.pybricksDB.clearAll();
```

## 🔧 离线缓存策略

| 资源类型 | 策略 | 说明 |
|----------|------|------|
| HTML 页面 | Network First | 优先请求网络，失败时回退缓存 |
| JS/CSS/图片 | Cache First | 优先用缓存，加快加载速度 |
| API 请求 | Network First | 获取最新数据 |

## 🆕 更新应用

当部署新版本时，Service Worker 会在后台下载更新：

1. 用户下次打开应用时会提示更新
2. 或者点击"刷新"按钮立即更新

手动触发更新：

```javascript
// 在控制台执行
navigator.serviceWorker.ready.then(reg => {
  reg.update();
});
```

## 🐛 常见问题

### Q: Service Worker 不生效？

检查：
1. 是否使用 HTTPS 或 localhost？
2. 控制台是否有错误信息？
3. `sw.js` 路径是否正确？

### Q: 数据丢失了？

数据存储在用户浏览器的 IndexedDB 中，不会跨浏览器/设备同步。如果清除了浏览器数据，数据会丢失。

### Q: 如何清除所有数据？

在控制台执行：
```javascript
await window.pybricksDB.clearAll();
location.reload();
```

## 📝 为其他页面添加PWA支持

在其他页面（map.html、program.html、debug.html）的 `<head>` 中添加：

```html
<!-- PWA -->
<link rel="manifest" href="../manifest.json">
<meta name="theme-color" content="#0071e3">
```

在 `</body>` 前添加：

```html
<script src="../js/db.js"></script>
<script src="../js/app.js"></script>
<script>
document.addEventListener('DOMContentLoaded', async () => {
  if ('serviceWorker' in navigator) {
    await navigator.serviceWorker.register('../sw.js');
  }
  await window.pybricksDB.init();
  // 页面特定初始化...
});
</script>
```

## 🔒 安全说明

- 所有数据都存储在**用户本地浏览器**中
- 服务器无法访问这些数据
- 换设备或换浏览器数据不互通（除非手动导出/导入）
- IndexedDB 有大小限制（通常几十MB到几GB不等，取决于设备）

## 📞 技术支持

如遇问题，请检查浏览器控制台 (F12 → Console) 的错误信息。
