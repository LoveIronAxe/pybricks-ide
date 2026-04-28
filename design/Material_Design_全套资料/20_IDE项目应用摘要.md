# Pybricks 机器车 IDE — Material Design 3 应用摘要

> 本文档从 MD3 资料中提炼出**本项目 IDE 直接可用的**代码和组件清单，
> 去除了不适用于儿童编程工具场景的过度设计内容。

---

## 一、本项目 IDE 的 MD3 应用清单

| 页面 | 使用的 MD3 组件 | 对应源文件 |
|------|---------------|-----------|
| **全局 / 布局** | Navigation Rail（侧边栏 56px 窄版）、三栏 Flexbox 布局 | MATERIAL_DESIGN.md 8.3 / FE_TECHNICAL.md 4.1 |
| **车辆配置页** | Filled Button、Outlined Button、Text Field、Switch、Card、Chip、List Item、Dialog | MD3_COMPONENTS.md 1.x–3.x |
| **地图编辑页** | FAB、Card、List Item、Icon Button、Dialog、Snackbar、Tooltip | MD3_COMPONENTS.md 1.4–5.2 |
| **通用反馈** | Dialog（确认框）、Snackbar（操作反馈）、Tooltip（图标说明） | MD3_COMPONENTS.md 4.1–4.3 |
| **设置页** | Text Field、Switch、Checkbox、Radio、Slider | MD3_COMPONENTS.md 2.x |

---

## 二、直接可用的代码片段汇总

### 2.1 CSS 主题变量（本项目暗色主题）

```css
/* ===== :root 变量块 - 直接复制到项目 CSS ===== */
:root {
  /* 主色 */
  --primary: #0071e3;
  --on-primary: #ffffff;
  --primary-container: #d4e3ff;
  --on-primary-container: #001c38;

  /* 表面（暗色 IDE 背景）*/
  --surface: #0f0f23;
  --surface-variant: #1a1a2e;
  --on-surface: #ffffff;
  --on-surface-variant: #a0a0b0;

  /* 边框 */
  --outline: #74777f;
  --outline-variant: rgba(255,255,255,0.08);

  /* 功能色 */
  --error: #ba1a1a;
  --success: #4ade80;
  --warning: #fbbf24;

  /* 间距 */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;

  /* 圆角 */
  --radius-sm: 4px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 28px;

  /* 阴影 */
  --shadow-sm: 0 2px 8px rgba(0,0,0,0.3);
  --shadow-md: 0 8px 24px rgba(0,0,0,0.4);

  /* 过渡 */
  --transition-fast: 0.15s ease;
  --transition-normal: 0.25s ease;
}
```
> 📁 来源：MATERIAL_DESIGN.md 8.1 + FE_TECHNICAL.md 5.2

---

### 2.2 侧边栏 Navigation Rail（56px 窄版）

```css
/* ===== 侧边栏 ===== */
.sidebar {
  width: 56px;
  min-width: 56px;
  background: var(--surface);
  border-right: 1px solid var(--outline-variant);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 0;
  gap: 4px;
}

.sidebar-item {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  transition: background-color var(--transition-fast);
  color: var(--on-surface-variant);
}

.sidebar-item.active {
  background: var(--primary-container);
  color: var(--on-primary-container);
}

/* 选中态左侧指示条 */
.sidebar-item.active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 24px;
  background: var(--primary);
  border-radius: 0 3px 3px 0;
}
```
> 📁 来源：MATERIAL_DESIGN.md 8.3 + MD3_COMPONENTS.md 5.1

---

### 2.3 列表卡片（车辆列表、航点列表通用）

```css
/* ===== 列表项卡片 ===== */
.list-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: background var(--transition-fast), transform var(--transition-fast);
  color: var(--on-surface-variant);
  margin-bottom: 4px;
}

.list-item:hover {
  background: rgba(255,255,255,0.05);
}

.list-item.active {
  background: rgba(0, 113, 227, 0.15);
  border-left: 3px solid var(--primary);
  color: var(--on-surface);
}

.list-item:active {
  transform: scale(0.98);
}
```
> 📁 来源：FE_TECHNICAL.md 4.2

---

### 2.4 主要操作按钮（Filled Button）

```css
/* ===== 主要按钮（连接车辆、下载程序） ===== */
.btn-primary {
  background: var(--primary);
  color: var(--on-primary);
  border-radius: 20px;
  padding: 0 24px;
  height: 40px;
  font-size: 14px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: box-shadow var(--transition-fast), filter var(--transition-fast);
}

.btn-primary:hover {
  box-shadow: 0 2px 8px rgba(0, 113, 227, 0.4);
  filter: brightness(1.08);
}

.btn-primary:active {
  filter: brightness(0.92);
  transform: scale(0.98);
}

/* ===== 次要按钮（取消、返回） ===== */
.btn-outlined {
  background: transparent;
  color: var(--on-surface);
  border: 1px solid var(--outline);
  border-radius: 20px;
  padding: 0 24px;
  height: 40px;
  font-size: 14px;
  cursor: pointer;
  transition: background var(--transition-fast);
}

.btn-outlined:hover {
  background: rgba(116, 119, 127, 0.1);
}
```
> 📁 来源：MATERIAL_DESIGN.md 8.2 + MD3_COMPONENTS.md 1.1–1.2

---

### 2.5 文本输入框（设备名称、参数配置）

```css
/* ===== 描边文本输入框 ===== */
.text-field {
  border: 1px solid var(--outline);
  border-radius: var(--radius-sm);
  padding: 16px;
  background: transparent;
  font-size: 16px;
  color: var(--on-surface);
  outline: none;
  width: 100%;
  box-sizing: border-box;
  transition: border-color var(--transition-fast), border-width var(--transition-fast);
}

.text-field:focus {
  border-color: var(--primary);
  border-width: 2px;
}

.text-field::placeholder {
  color: var(--on-surface-variant);
}
```
> 📁 来源：MATERIAL_DESIGN.md 3.2 + MD3_COMPONENTS.md 2.1

---

### 2.6 开关 Switch（启用传感器、实时反馈）

```css
/* ===== 开关 ===== */
.switch {
  position: relative;
  width: 52px;
  height: 32px;
  cursor: pointer;
}

.switch-track {
  position: absolute;
  inset: 0;
  border-radius: 16px;
  background: var(--outline);
  transition: background var(--transition-normal);
}

.switch-track.active {
  background: var(--primary);
}

.switch-thumb {
  position: absolute;
  top: 4px;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-normal);
  display: flex;
  align-items: center;
  justify-content: center;
}

.switch-track.active + .switch-thumb {
  transform: translateX(20px);
}
```
> 📁 来源：MD3_COMPONENTS.md 2.4（简化版）

---

### 2.7 弹窗 Dialog（确认删除、连接失败提示）

```css
/* ===== 弹窗遮罩 ===== */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: opacity var(--transition-normal), visibility var(--transition-normal);
}

.modal-overlay.visible {
  opacity: 1;
  visibility: visible;
}

/* ===== 弹窗内容 ===== */
.modal-content {
  background: var(--surface-variant);
  border-radius: var(--radius-xl);
  padding: 24px;
  max-width: 480px;
  width: 90%;
  box-shadow: var(--shadow-md);
  transform: scale(0.9) translateY(20px);
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.modal-overlay.visible .modal-content {
  transform: scale(1) translateY(0);
}
```
> 📁 来源：MATERIAL_DESIGN.md 8.4 + FE_TECHNICAL.md 5.1

---

### 2.8 FAB 浮动按钮（添加航点、添加车辆）

```css
/* ===== FAB（地图页面添加按钮） ===== */
.fab {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-lg);
  background: var(--primary-container);
  color: var(--on-primary-container);
  border: none;
  box-shadow: var(--shadow-md);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 24px;
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.fab:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(0,0,0,0.4);
}

.fab:active {
  transform: scale(0.95);
}

/* 小号 FAB */
.fab--small {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  font-size: 18px;
}
```
> 📁 来源：MD3_COMPONENTS.md 1.5（简化版）

---

### 2.9 轻提示 Snackbar（程序下载成功、地图已保存）

```css
/* ===== Snackbar ===== */
.snackbar {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  background: #323232;
  color: white;
  border-radius: var(--radius-sm);
  padding: 14px 16px;
  min-width: 300px;
  max-width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  box-shadow: var(--shadow-md);
  z-index: 2000;
  font-size: 14px;
}

.snackbar__action {
  background: transparent;
  border: none;
  color: #D0BCFF;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  text-transform: uppercase;
}

.snackbar__action:hover {
  background: rgba(255,255,255,0.1);
}
```
> 📁 来源：MD3_COMPONENTS.md 4.2

---

### 2.10 三栏响应式布局框架

```css
/* ===== 应用容器 ===== */
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
  background: var(--surface);
  border-right: 1px solid var(--outline-variant);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 0;
  gap: 4px;
}

/* 中间列表栏：260px，可伸缩 */
.list-panel {
  width: 260px;
  min-width: 200px;
  max-width: 360px;
  background: var(--surface-variant);
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--outline-variant);
}

/* 右侧详情栏：剩余全部空间 */
.detail-panel {
  flex: 1;
  background: var(--surface);
  overflow-y: auto;
  padding: var(--space-lg);
}

/* ===== 平板适配（768px） ===== */
@media (max-width: 768px) {
  .list-panel {
    width: 200px;
    min-width: 160px;
  }
}

/* ===== 手机适配（480px）侧边栏变底部导航 ===== */
@media (max-width: 480px) {
  .sidebar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    flex-direction: row;
    justify-content: space-around;
    border-right: none;
    border-top: 1px solid var(--outline-variant);
    z-index: 100;
  }

  .app-container {
    flex-direction: column;
    height: calc(100vh - 60px);
  }

  .list-panel {
    width: 100%;
    max-width: none;
    height: 40%;
    border-right: none;
    border-bottom: 1px solid var(--outline-variant);
  }
}
```
> 📁 来源：FE_TECHNICAL.md 4.1

---

## 三、每个 IDE 页面的组件清单

### 🚗 车辆配置页
| 元素 | MD3 组件 | 源码位置 |
|------|---------|---------|
| 连接/下载按钮 | Filled Button | 2.4 节 |
| 取消/返回按钮 | Outlined Button | 2.4 节 |
| 设备名称输入 | Text Field | 2.5 节 |
| 电机端口配置 | Text Field | 2.5 节 |
| 传感器启用开关 | Switch | 2.6 节 |
| 陀螺仪启用 | Switch | 2.6 节 |
| 电机类型单选 | Radio | MD3_COMPONENTS.md 2.3 |
| 车辆配置卡片 | Card | MD3_COMPONENTS.md 3.1 |
| 删除确认弹窗 | Dialog | 2.7 节 |
| 操作成功提示 | Snackbar | 2.9 节 |

### 🗺️ 地图编辑页
| 元素 | MD3 组件 | 源码位置 |
|------|---------|---------|
| 添加航点/障碍物 | FAB | 2.8 节 |
| 缩放/删除图标按钮 | Icon Button | MD3_COMPONENTS.md 1.4 |
| 航点列表 | List Item | 2.3 节 |
| 航点详情卡片 | Card | MD3_COMPONENTS.md 3.1 |
| 航点类型标签 | Chip | MD3_COMPONENTS.md 3.3 |
| 删除航点确认 | Dialog | 2.7 节 |
| 保存成功提示 | Snackbar | 2.9 节 |
| 缩放图标悬停说明 | Tooltip | MD3_COMPONENTS.md 4.3 |

### ⚙️ 设置页
| 元素 | MD3 组件 | 源码位置 |
|------|---------|---------|
| 名称/端口输入 | Text Field | 2.5 节 |
| 功能开关 | Switch | 2.6 节 |
| 选项勾选 | Checkbox | MD3_COMPONENTS.md 2.2 |
| 电机/通信选择 | Radio | MD3_COMPONENTS.md 2.3 |
| 速度/功率调节 | Slider | MD3_COMPONENTS.md 2.5 |

---

## 四、本项目不建议使用的内容

以下 MD3 特性对 Pybricks IDE **不适用**，避免引入不必要的复杂性：

| 不建议使用 | 原因 |
|-----------|------|
| **FAB Extended（大型展开按钮）** | 96×96px 过大，IDE 页面空间有限，用标准 FAB 即可 |
| **Filled Text Field（填充风格输入框）** | MD3 推荐 Outlined 风格更简洁，IDE 中统一用 Outlined |
| **Material Symbols Rounded 图标库** | 需额外引入资源，用 emoji 或简单 SVG 代替即可 |
| **Ripple Effect（涟漪点击效果）** | 实现复杂，本项目用 `:hover` / `:active` 状态切换已足够 |
| **Bottom Sheet（底部弹出面板）** | IDE 以侧边栏为主，不需此组件 |
| **Navigation Drawer（侧滑抽屉）** | 儿童 IDE 不需要复杂导航，Navigation Rail 已满足 |
| **Banner（大横幅提示）** | 用 Snackbar 代替，轻量不打断操作 |
| **Full-screen Dialog（全屏弹窗）** | 28px 圆角标准 Dialog 已足够 |
| **复杂动画（列表项依次入场动画）** | 性能开销大，IDE 以快速响应为主 |
| **Large Elevation 阴影（elevation-4/5）** | MD3 不推荐大阴影，本项目统一用 elevation-1～3 |

---

## 五、快速开发检查清单

开发新页面时，按此清单确认 MD3 规范是否到位：

- [ ] 使用 CSS 变量（`--primary`、`--surface` 等）而非硬编码颜色
- [ ] 按钮圆角为 20px（filled/outlined/text button）
- [ ] 弹窗圆角为 28px
- [ ] 卡片圆角为 12px，无大阴影
- [ ] 间距使用 8 的倍数（4 / 8 / 16 / 24 / 32）
- [ ] 所有交互有 `:hover` 和 `:active` 状态
- [ ] 禁用态设置 `opacity: 0.38`
- [ ] 动效时长：状态切换 ≤ 200ms，组件进入/退出 ≤ 300ms
- [ ] 使用 `cubic-bezier(0.2, 0, 0, 1)` 作为标准缓出曲线
- [ ] 响应式适配 480px（手机）和 768px（平板）断点

---

*摘要版本：v1.0 | 整理日期：2026-04-27 | 来源：MATERIAL_DESIGN.md / MD3_COMPONENTS.md / FE_TECHNICAL.md*
