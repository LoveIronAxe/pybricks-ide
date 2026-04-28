# Material Design 3 — 设计规范摘要

> 本文档基于 Material Design 3 (Material You) 官方规范整理，供 IDE 页面开发使用。
> 官网：https://m3.material.io/

---

## 一、色彩系统

### 1.1 主色板（Color Palette）

Material Design 3 使用「色调偏斜」生成完整色板。

**核心主色（Primary）**：
- 陛下参考笔记中心风格：使用 `#0071e3`（Apple Blue）作为主色
- Material 3 对应近似色：Blue 40–70 区间

**推荐配色方案**：

| 角色 | 色值 | 用途 |
|------|------|------|
| Primary | `#0071e3` | 主按钮、选中态、链接 |
| On Primary | `#ffffff` | 主色上的文字 |
| Primary Container | `#d4e3ff` | 主色浅色背景 |
| On Primary Container | `#001c38` | 浅色背景上的文字 |
| Secondary | `#5c5d72` | 次要元素 |
| Surface | `#fef7ff` | 页面背景 |
| Surface Variant | `#e1e2ec` | 卡片/容器背景 |
| Outline | `#74777f` | 边框、分隔线 |
| Error | `#ba1a1a` | 错误提示 |
| On Error | `#ffffff` | 错误色上的文字 |
| Inverse Surface | `#313033` | 弹窗背景/暗色 |

### 1.2 语义色用法

```css
--md-sys-color-primary: #0071e3;
--md-sys-color-on-primary: #ffffff;
--md-sys-color-surface: #fef7ff;
--md-sys-color-surface-variant: #e1e2ec;
--md-sys-color-outline: #74777f;
--md-sys-color-error: #ba1a1a;
```

---

## 二、字体系统

### 2.1 字体族

**Roboto** — Material Design 默认字体

```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
```

### 2.2 字体层级（Type Scale）

| 级别 | 字号 | 字重 | 行高 | 用途 |
|------|------|------|------|------|
| Display Large | 57px | 400 | 64px | 超大标题（极少用）|
| Headline Large | 32px | 400 | 40px | 页面大标题 |
| Headline Medium | 28px | 400 | 36px | 卡片标题 |
| Title Large | 22px | 400 | 28px | 列表标题 |
| Title Medium | 16px | 500 | 24px | 按钮文字 |
| Body Large | 16px | 400 | 24px | 正文 |
| Body Medium | 14px | 400 | 20px | 次要文字 |
| Label Large | 14px | 500 | 20px | 输入框标签 |
| Label Medium | 12px | 500 | 16px | 提示文字 |

### 2.3 CSS 变量参考

```css
font-family: 'Roboto', sans-serif;
font-size: 16px;
line-height: 24px;
letter-spacing: 0.5px;
```

---

## 三、组件规范

### 3.1 按钮（Buttons）

**Filled Button（主要按钮）**：
```css
background-color: var(--md-sys-color-primary);
color: var(--md-sys-color-on-primary);
border-radius: 20px; /* 圆角-full 圆形，或 12px 圆角 */
padding: 0 24px;
height: 40px;
font-size: 14px;
font-weight: 500;
letter-spacing: 0.1px;
border: none;
cursor: pointer;
transition: box-shadow 0.2s;
```

**Filled Button 悬停态**：
```css
box-shadow: 0 2px 8px rgba(0, 113, 227, 0.3);
```

**Outlined Button（次要按钮）**：
```css
border: 1px solid var(--md-sys-color-outline);
color: var(--md-sys-color-primary);
background: transparent;
border-radius: 20px;
padding: 0 24px;
height: 40px;
```

**Text Button（文字按钮）**：
```css
color: var(--md-sys-color-primary);
background: transparent;
border: none;
padding: 0 12px;
height: 40px;
```

### 3.2 输入框（Text Fields）

**Outlined 风格（推荐）**：
```css
border: 1px solid var(--md-sys-color-outline);
border-radius: 4px;
padding: 16px 16px;
background: var(--md-sys-color-surface);
font-size: 16px;
transition: border-color 0.2s;
```

**聚焦态**：
```css
border-color: var(--md-sys-color-primary);
border-width: 2px;
```

### 3.3 卡片（Cards）

```css
background-color: var(--md-sys-color-surface-variant);
border-radius: 12px;
padding: 16px;
box-shadow: none; /* MD3 不推荐阴影，依赖背景色区分 */
/* 或使用极轻阴影 */
box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
```

### 3.4 弹窗 / 对话框（Dialogs）

```css
background-color: var(--md-sys-color-surface);
border-radius: 28px; /* 大圆角 */
padding: 24px;
max-width: 560px;
```

**遮罩层**：
```css
background-color: rgba(0, 0, 0, 0.4);
backdrop-filter: blur(4px);
```

### 3.5 列表项（Lists）

```css
padding: 12px 16px;
border-radius: 8px;
cursor: pointer;
transition: background-color 0.15s;
```

**选中态**：
```css
background-color: var(--md-sys-color-secondary-container);
```

### 3.6 图标按钮（Icon Buttons）

```css
width: 48px;
height: 48px;
border-radius: 50%;
border: none;
background: transparent;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
```

**悬停态**：
```css
background-color: var(--md-sys-color-surface-variant);
```

### 3.7 Divider（分隔线）

```css
height: 1px;
background-color: var(--md-sys-color-outline-variant);
```

---

## 四、间距系统

### 4.1 基础间距单位

**8dp 网格系统**：所有间距为 8 的倍数。

| 名称 | 数值 |
|------|------|
| xs | 4px |
| sm | 8px |
| md | 16px |
| lg | 24px |
| xl | 32px |
| xxl | 48px |

### 4.2 常用间距规则

- 组件内间距：16px
- 组件间间距：16px 或 24px
- 页面边距：24px（大屏）/ 16px（小屏）
- 列表项间距：8px

---

## 五、圆角系统

| 组件 | 圆角半径 |
|------|---------|
| 小型组件（chips、input） | 4px |
| 中型组件（按钮、卡片） | 12px |
| 大型组件（弹窗） | 28px |
| FAB（悬浮按钮） | 16px |
| 小图标按钮 | 50%（圆形） |

---

## 六、动效规范

### 6.1 时长等级

| 等级 | 时长 | 用途 |
|------|------|------|
| 短 | 100~200ms | 状态切换（悬停、按下）|
| 中 | 300ms | 组件进入/退出 |
| 长 | 400~500ms | 页面过渡 |

### 6.2 缓动曲线

```css
/* 标准缓出（组件进入）*/
transition-timing-function: cubic-bezier(0.2, 0, 0, 1);

/* 标准缓入（组件退出）*/
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

/* 强调缓出（主要操作）*/
transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
```

---

## 七、阴影（Elevation）

MD3 不推荐大阴影，但可少量使用：

```css
/* 弹窗 */
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);

/* 悬停卡片 */
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
```

---

## 八、IDE 项目具体应用

### 8.1 本项目配色映射

```css
:root {
  /* 主色 */
  --primary: #0071e3;
  --on-primary: #ffffff;
  --primary-container: #d4e3ff;
  --on-primary-container: #001c38;

  /* 表面 */
  --surface: #ffffff;
  --surface-variant: #f5f5f5;
  --on-surface: #1c1b1f;
  --on-surface-variant: #49454f;

  /* 边框 */
  --outline: #74777f;
  --outline-variant: #e0e0e0;

  /* 错误 */
  --error: #ba1a1a;

  /* 间距 */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
}
```

### 8.2 按钮具体样式

**创建按钮（主要操作）**：
```css
.filled-button {
  background: var(--primary);
  color: var(--on-primary);
  border-radius: 20px;
  padding: 0 24px;
  height: 40px;
  font-size: 14px;
  font-weight: 500;
  border: none;
  cursor: pointer;
}
```

**取消按钮（次要操作）**：
```css
.outlined-button {
  background: transparent;
  color: var(--on-surface);
  border: 1px solid var(--outline);
  border-radius: 20px;
  padding: 0 24px;
  height: 40px;
  font-size: 14px;
  cursor: pointer;
}
```

### 8.3 侧边栏样式

```css
.sidebar {
  width: 56px;
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
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  transition: background-color 0.15s;
}

.sidebar-item.active {
  background: var(--primary-container);
}

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

### 8.4 弹窗遮罩样式

```css
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: var(--surface);
  border-radius: 28px;
  padding: 24px;
  max-width: 480px;
  width: 90%;
}
```
