# Web 实现快速参考

> 🔴 **P1 重点**：本文件提供纯 CSS 实现 MD3 效果的具体模板代码，可直接复制使用。

---

## 一、陛下配色方案的完整 CSS 变量模板

```css
/* ============================================
   Material Design 3 Design Token（CSS Variables）
   基于陛下配色方案
   ============================================ */

:root {
  /* ========== 核心色彩 ========== */
  /* Primary - 陛下品牌蓝 */
  --md-primary: #1A6BFF;
  --md-on-primary: #FFFFFF;
  --md-primary-container: #D8E2FF;
  --md-on-primary-container: #001A41;

  /* Secondary */
  --md-secondary: #5A5D72;
  --md-on-secondary: #FFFFFF;
  --md-secondary-container: #E1E0F9;
  --md-on-secondary-container: #181A2C;

  /* Tertiary - IDE 强调色（陛下紫） */
  --md-tertiary: #7653B8;
  --md-on-tertiary: #FFFFFF;
  --md-tertiary-container: #EDDEFF;
  --md-on-tertiary-container: #2A0060;

  /* Error */
  --md-error: #BA1A1A;
  --md-on-error: #FFFFFF;
  --md-error-container: #FFDAD6;
  --md-on-error-container: #410002;

  /* ========== 背景 & 表面 ========== */
  --md-background: #FEFBFF;
  --md-on-background: #1B1B1F;

  --md-surface: #FEFBFF;
  --md-on-surface: #1B1B1F;
  --md-surface-variant: #E2E2EC;
  --md-on-surface-variant: #45464F;

  --md-surface-container-lowest: #FFFFFF;
  --md-surface-container-low: #F8F2FF;
  --md-surface-container: #F3EDF7;
  --md-surface-container-high: #ECE6F0;
  --md-surface-container-highest: #E6E0E9;

  /* 轮廓 */
  --md-outline: #75777F;
  --md-outline-variant: #C5C5D0;

  /* ========== 阴影 ========== */
  --md-elevation-1: 0 1px 3px 1px rgba(0,0,0,0.15), 0 1px 2px 0 rgba(0,0,0,0.3);
  --md-elevation-2: 0 2px 6px 2px rgba(0,0,0,0.15), 0 1px 2px 0 rgba(0,0,0,0.3);
  --md-elevation-3: 0 4px 8px 3px rgba(0,0,0,0.15), 0 1px 3px 0 rgba(0,0,0,0.3);
  --md-elevation-4: 0 6px 10px 4px rgba(0,0,0,0.15), 0 2px 3px 0 rgba(0,0,0,0.3);
  --md-elevation-5: 0 8px 12px 6px rgba(0,0,0,0.15), 0 4px 4px 0 rgba(0,0,0,0.3);

  /* ========== 状态层（State Layer） ========== */
  /* 用于 hover/focus/press 时叠加在组件上的半透明层 */
  /* opacity 值：hover=0.08, focus=0.12, press=0.12, drag=0.16 */
  --md-state-hover: rgba(0,0,0,0.08);
  --md-state-focus: rgba(0,0,0,0.12);
  --md-state-press: rgba(0,0,0,0.12);
  --md-state-drag: rgba(0,0,0,0.16);

  /* ========== 文字系统 ========== */
  --md-font-family: "Roboto", "Noto Sans SC", sans-serif;
  --md-display-large: 57px/64px var(--md-font-family);
  --md-display-medium: 45px/52px var(--md-font-family);
  --md-display-small: 36px/44px var(--md-font-family);
  --md-headline-large: 32px/40px var(--md-font-family);
  --md-headline-medium: 28px/36px var(--md-font-family);
  --md-headline-small: 24px/32px var(--md-font-family);
  --md-title-large: 22px/28px var(--md-font-family);
  --md-title-medium: 16px/24px var(--md-font-family);
  --md-title-small: 14px/20px var(--md-font-family);
  --md-label-large: 14px/20px var(--md-font-family);
  --md-label-medium: 12px/16px var(--md-font-family);
  --md-label-small: 11px/16px var(--md-font-family);
  --md-body-large: 16px/24px var(--md-font-family);
  --md-body-medium: 14px/20px var(--md-font-family);
  --md-body-small: 12px/16px var(--md-font-family);

  /* ========== 圆角 ========== */
  --md-radius-extra-small: 4px;
  --md-radius-small: 8px;
  --md-radius-medium: 12px;
  --md-radius-large: 16px;
  --md-radius-extra-large: 28px;
  --md-radius-full: 9999px;

  /* ========== 间距 ========== */
  --md-space-1: 4px;
  --md-space-2: 8px;
  --md-space-3: 12px;
  --md-space-4: 16px;
  --md-space-5: 20px;
  --md-space-6: 24px;
  --md-space-7: 32px;
  --md-space-8: 40px;
  --md-space-9: 48px;
  --md-space-10: 64px;
}

/* ============================================
   深色主题（陛下 IDE 建议支持）
   ============================================ */

[data-theme="dark"] {
  /* Primary */
  --md-primary: #B0C7FF;
  --md-on-primary: #002D69;
  --md-primary-container: #004398;
  --md-on-primary-container: #D8E2FF;

  /* Secondary */
  --md-secondary: #C3C5DD;
  --md-on-secondary: #2E3147;
  --md-secondary-container: #454759;
  --md-on-secondary-container: #E1E0F9;

  /* Tertiary */
  --md-tertiary: #DFC6FF;
  --md-on-tertiary: #411B78;
  --md-tertiary-container: #5A3391;
  --md-on-tertiary-container: #EDDEFF;

  /* Error */
  --md-error: #FFB4AB;
  --md-on-error: #690005;
  --md-error-container: #93000A;
  --md-on-error-container: #FFDAD6;

  /* Background & Surface */
  --md-background: #1B1B1F;
  --md-on-background: #E4E1E6;
  --md-surface: #1B1B1F;
  --md-on-surface: #E4E1E6;
  --md-surface-variant: #45464F;
  --md-on-surface-variant: #C6C5D0;

  --md-surface-container-lowest: #0F0F13;
  --md-surface-container-low: #1D1B20;
  --md-surface-container: #252329;
  --md-surface-container-high: #2F2D33;
  --md-surface-container-highest: #39373D;

  /* Outline */
  --md-outline: #90909A;
  --md-outline-variant: #45464F;

  /* 阴影在深色主题通常不用，降低对比反而好看 */
  --md-elevation-1: none;
  --md-elevation-2: none;
  --md-elevation-3: none;
  --md-elevation-4: none;
  --md-elevation-5: none;
}
```

---

## 二、按钮组件模板

### 2.1 Filled Button（主要按钮）

```html
<style>
/* === Filled Button === */
.btn-filled {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 40px;
  padding: 0 24px;
  border: none;
  border-radius: var(--md-radius-full);
  background: var(--md-primary);
  color: var(--md-on-primary);
  font-family: var(--md-font-family);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.1px;
  cursor: pointer;
  transition: background 0.15s ease, box-shadow 0.15s ease;
  /* Filled 按钮有 elevation */
  box-shadow: var(--md-elevation-1);
  outline: none;
  user-select: none;
}

.btn-filled:hover {
  background: color-mix(in srgb, var(--md-primary) 88%, white);
  box-shadow: var(--md-elevation-2);
}

.btn-filled:focus-visible {
  /* MD3 焦点环：2px offset */
  outline: 2px solid var(--md-primary);
  outline-offset: 2px;
}

.btn-filled:active {
  background: color-mix(in srgb, var(--md-primary) 84%, black);
  box-shadow: none;
}

/* === Outlined Button === */
.btn-outlined {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 40px;
  padding: 0 24px;
  border: 1px solid var(--md-outline);
  border-radius: var(--md-radius-full);
  background: transparent;
  color: var(--md-primary);
  font-family: var(--md-font-family);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.1px;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease;
  outline: none;
  user-select: none;
}

.btn-outlined:hover {
  background: var(--md-state-hover);
}

.btn-outlined:focus-visible {
  outline: 2px solid var(--md-primary);
  outline-offset: 2px;
}

.btn-outlined:active {
  background: var(--md-state-press);
}

/* === Text Button === */
.btn-text {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 40px;
  padding: 0 12px;
  border: none;
  border-radius: var(--md-radius-full);
  background: transparent;
  color: var(--md-primary);
  font-family: var(--md-font-family);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.1px;
  cursor: pointer;
  transition: background 0.15s ease;
  outline: none;
  user-select: none;
}

.btn-text:hover { background: var(--md-state-hover); }
.btn-text:focus-visible { outline: 2px solid var(--md-primary); outline-offset: 2px; }
.btn-text:active { background: var(--md-state-press); }

/* === Elevated Button === */
.btn-elevated {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 40px;
  padding: 0 24px;
  border: none;
  border-radius: var(--md-radius-full);
  background: var(--md-surface-container-high);
  color: var(--md-primary);
  font-family: var(--md-font-family);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.1px;
  cursor: pointer;
  box-shadow: var(--md-elevation-1);
  transition: background 0.15s ease, box-shadow 0.15s ease;
  outline: none;
  user-select: none;
}

.btn-elevated:hover { box-shadow: var(--md-elevation-2); background: var(--md-surface-container-high); }
.btn-elevated:focus-visible { outline: 2px solid var(--md-primary); outline-offset: 2px; }
.btn-elevated:active { box-shadow: none; background: var(--md-surface-container-high); }

/* === Tonal Button（次要强调） === */
.btn-tonal {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 40px;
  padding: 0 24px;
  border: none;
  border-radius: var(--md-radius-full);
  background: var(--md-secondary-container);
  color: var(--md-on-secondary-container);
  font-family: var(--md-font-family);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.1px;
  cursor: pointer;
  transition: background 0.15s ease;
  outline: none;
  user-select: none;
}

.btn-tonal:hover { background: color-mix(in srgb, var(--md-secondary-container) 88%, black); }
.btn-tonal:focus-visible { outline: 2px solid var(--md-secondary); outline-offset: 2px; }
.btn-tonal:active { background: color-mix(in srgb, var(--md-secondary-container) 84%, black); }

/* 图标按钮 */
.btn-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: var(--md-radius-full);
  background: transparent;
  color: var(--md-on-surface);
  cursor: pointer;
  transition: background 0.15s ease;
  outline: none;
}
.btn-icon:hover { background: var(--md-state-hover); }
.btn-icon:focus-visible { outline: 2px solid var(--md-primary); outline-offset: 2px; }
.btn-icon:active { background: var(--md-state-press); }
</style>

<!-- 使用示例 -->
<button class="btn-filled">确认</button>
<button class="btn-outlined">取消</button>
<button class="btn-text">了解更多</button>
<button class="btn-elevated">添加</button>
<button class="btn-tonal">保存</button>
<button class="btn-icon" aria-label="删除">
  <span class="material-icons">delete</span>
</button>
```

---

## 三、输入框组件模板

```html
<style>
/* === Outlined Text Field（MD3 推荐风格） === */
.field-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.field-label {
  font-family: var(--md-font-family);
  font-size: 12px;
  font-weight: 400;
  color: var(--md-on-surface-variant);
  padding: 0 4px;
  /* 随输入内容浮动到上方 */
}

.field-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.field-input {
  width: 100%;
  height: 56px;
  padding: 16px 16px 8px;
  border: 1px solid var(--md-outline);
  border-radius: var(--md-radius-extra-small);
  background: transparent;
  color: var(--md-on-surface);
  font-family: var(--md-font-family);
  font-size: 16px;
  outline: none;
  transition: border-color 0.15s ease;
  box-sizing: border-box;
}

.field-input::placeholder {
  color: transparent;
}

/* 浮动标签（Label） */
.field-input + .field-placeholder {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  font-family: var(--md-font-family);
  font-size: 16px;
  color: var(--md-on-surface-variant);
  pointer-events: none;
  transition: all 0.15s ease;
}

.field-input:focus + .field-placeholder,
.field-input:not(:placeholder-shown) + .field-placeholder {
  top: 8px;
  transform: translateY(0);
  font-size: 12px;
}

/* 聚焦状态 */
.field-input:focus {
  border-color: var(--md-primary);
  border-width: 2px;
}

/* 激活标签颜色跟随 primary */
.field-input:focus + .field-placeholder {
  color: var(--md-primary);
}

/* 前缀图标 */
.field-prefix {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--md-on-surface-variant);
  display: flex;
  align-items: center;
}

.field-input:focus ~ .field-prefix,
.field-input:not(:placeholder-shown) ~ .field-prefix {
  color: var(--md-on-surface-variant);
}

/* 后缀 */
.field-suffix {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--md-on-surface-variant);
  display: flex;
  align-items: center;
}

/* 底部提示文字 */
.field-supporting {
  font-family: var(--md-font-family);
  font-size: 12px;
  color: var(--md-on-surface-variant);
  padding: 0 4px;
}

.field-supporting.error {
  color: var(--md-error);
}

/* 支持输入框 Disabled 状态 */
.field-input:disabled {
  opacity: 0.38;
  cursor: not-allowed;
}
</style>

<!-- 使用示例 -->
<div class="field-wrapper">
  <label class="field-label">姓名</label>
  <div class="field-input-wrapper">
    <input class="field-input" type="text" placeholder=" " />
    <span class="field-placeholder">姓名</span>
  </div>
  <span class="field-supporting">请输入您的姓名</span>
</div>

<!-- 带图标的输入框 -->
<div class="field-wrapper" style="margin-top:16px;">
  <label class="field-label">搜索</label>
  <div class="field-input-wrapper">
    <input class="field-input" type="text" placeholder=" " style="padding-left:40px;" />
    <span class="field-placeholder">搜索代码...</span>
    <span class="field-prefix">
      <span class="material-icons" style="font-size:20px;">search</span>
    </span>
  </div>
</div>
```

---

## 四、工具栏 / 侧边栏模板

```html
<style>
/* === Top App Bar（IDE 顶部工具栏） === */
.app-bar {
  display: flex;
  align-items: center;
  height: 64px;
  padding: 0 16px;
  background: var(--md-surface-container);
  border-bottom: 1px solid var(--md-outline-variant);
  gap: 8px;
}

.app-bar-title {
  font-family: var(--md-font-family);
  font-size: 22px;
  font-weight: 400;
  color: var(--md-on-surface);
  margin: 0;
  flex: 1;
}

.app-bar-section {
  display: flex;
  align-items: center;
  gap: 4px;
}

/* === Navigation Rail（IDE 左侧图标导航） === */
.nav-rail {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  height: 100%;
  background: var(--md-surface-container);
  border-right: 1px solid var(--md-outline-variant);
  padding: 12px 0;
  gap: 4px;
}

.nav-rail-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: var(--md-radius-medium);
  color: var(--md-on-surface-variant);
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
  text-decoration: none;
  position: relative;
}

.nav-rail-item:hover { background: var(--md-state-hover); }
.nav-rail-item.active {
  background: var(--md-secondary-container);
  color: var(--md-on-secondary-container);
}
.nav-rail-item:focus-visible {
  outline: 2px solid var(--md-primary);
  outline-offset: -2px;
}

/* 选中指示器 */
.nav-rail-item.active::before {
  content: '';
  position: absolute;
  left: -12px;
  width: 4px;
  height: 32px;
  background: var(--md-on-secondary-container);
  border-radius: 0 4px 4px 0;
}

/* === Side Panel（IDE 右侧面板） === */
.side-panel {
  width: 280px;
  min-width: 280px;
  background: var(--md-surface-container-low);
  border-left: 1px solid var(--md-outline-variant);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.panel-header {
  display: flex;
  align-items: center;
  height: 56px;
  padding: 0 16px;
  gap: 8px;
  border-bottom: 1px solid var(--md-outline-variant);
}

.panel-title {
  font-family: var(--md-font-family);
  font-size: 14px;
  font-weight: 500;
  color: var(--md-on-surface);
  flex: 1;
}

.panel-content {
  flex: 1;
  overflow-y: auto;
  padding: 8px;
}

/* === Segmented Button（工具栏分组） === */
.segment-group {
  display: inline-flex;
  border-radius: var(--md-radius-extra-small);
  overflow: hidden;
  border: 1px solid var(--md-outline);
}

.segment-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  padding: 0 16px;
  border: none;
  border-right: 1px solid var(--md-outline);
  background: transparent;
  color: var(--md-on-surface);
  font-family: var(--md-font-family);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s ease;
  outline: none;
  gap: 6px;
}

.segment-btn:last-child { border-right: none; }
.segment-btn:hover { background: var(--md-state-hover); }
.segment-btn.active {
  background: var(--md-secondary-container);
  color: var(--md-on-secondary-container);
}
.segment-btn:focus-visible { outline: 2px solid var(--md-primary); outline-offset: -2px; }
</style>

<!-- 使用示例 -->
<!-- 顶部工具栏 -->
<header class="app-bar">
  <button class="btn-icon" aria-label="菜单">
    <span class="material-icons">menu</span>
  </button>
  <h1 class="app-bar-title">PyBricks IDE</h1>
  <div class="app-bar-section">
    <div class="segment-group">
      <button class="segment-btn active"><span class="material-icons">play_arrow</span>运行</button>
      <button class="segment-btn"><span class="material-icons">download</span>下载</button>
      <button class="segment-btn"><span class="material-icons">settings</span>设置</button>
    </div>
  </div>
</header>

<!-- 左侧导航 -->
<nav class="nav-rail">
  <a class="nav-rail-item active" aria-label="编辑器">
    <span class="material-icons">code</span>
  </a>
  <a class="nav-rail-item" aria-label="文件">
    <span class="material-icons">folder</span>
  </a>
  <a class="nav-rail-item" aria-label="终端">
    <span class="material-icons">terminal</span>
  </a>
  <a class="nav-rail-item" aria-label="帮助">
    <span class="material-icons">help_outline</span>
  </a>
</nav>
```

---

## 五、卡片与面板模板

```html
<style>
/* === Elevated Card === */
.card-elevated {
  background: var(--md-surface-container-low);
  border-radius: var(--md-radius-medium);
  box-shadow: var(--md-elevation-1);
  overflow: hidden;
  transition: box-shadow 0.15s ease;
}
.card-elevated:hover { box-shadow: var(--md-elevation-2); }

.card-elevated .card-header {
  padding: 16px;
  border-bottom: 1px solid var(--md-outline-variant);
}
.card-elevated .card-title {
  font-family: var(--md-font-family);
  font-size: 16px;
  font-weight: 500;
  color: var(--md-on-surface);
  margin: 0;
}
.card-elevated .card-body { padding: 16px; }
.card-elevated .card-actions {
  padding: 8px 16px 16px;
  display: flex;
  gap: 8px;
}

/* === Outlined Card === */
.card-outlined {
  background: transparent;
  border: 1px solid var(--md-outline-variant);
  border-radius: var(--md-radius-medium);
  overflow: hidden;
}
.card-outlined .card-header { padding: 16px; border-bottom: 1px solid var(--md-outline-variant); }
.card-outlined .card-title { font-family: var(--md-font-family); font-size: 16px; font-weight: 500; color: var(--md-on-surface); margin: 0; }
.card-outlined .card-body { padding: 16px; }
.card-outlined .card-actions { padding: 8px 16px 16px; display: flex; gap: 8px; }

/* === Dialog / Modal === */
.dialog-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
}

.dialog {
  background: var(--md-surface-container-high);
  border-radius: var(--md-radius-extra-large);
  box-shadow: var(--md-elevation-3);
  min-width: 280px;
  max-width: 560px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.dialog-header {
  padding: 24px 24px 16px;
}
.dialog-title {
  font-family: var(--md-font-family);
  font-size: 24px;
  font-weight: 400;
  color: var(--md-on-surface);
  margin: 0;
}
.dialog-body { padding: 0 24px 24px; overflow-y: auto; }
.dialog-actions {
  padding: 12px 24px 24px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}
</style>

<!-- 使用示例 -->
<div class="card-elevated" style="max-width:400px;">
  <div class="card-header">
    <h3 class="card-title">文件信息</h3>
  </div>
  <div class="card-body">
    <p style="font-family:var(--md-font-family);font-size:14px;color:var(--md-on-surface-variant);margin:0;">
      main.py — 3.2 KB — 最后修改于 2026-04-27
    </p>
  </div>
  <div class="card-actions">
    <button class="btn-text">重命名</button>
    <button class="btn-filled">打开</button>
  </div>
</div>
```

---

## 六、下拉菜单 / 选择器模板

```html
<style>
/* === Dropdown / Select === */
.dropdown-wrapper {
  position: relative;
  display: inline-block;
}

.dropdown-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  min-width: 200px;
  height: 56px;
  padding: 16px 16px 8px;
  border: 1px solid var(--md-outline);
  border-radius: var(--md-radius-extra-small);
  background: transparent;
  color: var(--md-on-surface);
  font-family: var(--md-font-family);
  font-size: 16px;
  cursor: pointer;
  outline: none;
  transition: border-color 0.15s ease;
}

.dropdown-trigger:hover { border-color: var(--md-on-surface-variant); }
.dropdown-trigger:focus { border-color: var(--md-primary); border-width: 2px; }
.dropdown-trigger.open { border-color: var(--md-primary); }

.dropdown-label {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  font-family: var(--md-font-family);
  font-size: 16px;
  color: var(--md-on-surface-variant);
  pointer-events: none;
  transition: all 0.15s ease;
}

.dropdown-trigger:focus ~ .dropdown-label,
.dropdown-trigger.has-value ~ .dropdown-label {
  top: 8px;
  font-size: 12px;
  color: var(--md-primary);
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  background: var(--md-surface-container-high);
  border-radius: var(--md-radius-small);
  box-shadow: var(--md-elevation-3);
  z-index: 100;
  max-height: 200px;
  overflow-y: auto;
  display: none;
}

.dropdown-menu.open { display: block; }

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 12px 16px;
  border: none;
  background: transparent;
  color: var(--md-on-surface);
  font-family: var(--md-font-family);
  font-size: 14px;
  text-align: left;
  cursor: pointer;
  transition: background 0.1s ease;
  outline: none;
}

.dropdown-item:hover { background: var(--md-state-hover); }
.dropdown-item.selected {
  background: var(--md-secondary-container);
  color: var(--md-on-secondary-container);
}
</style>

<!-- 使用示例 -->
<div class="dropdown-wrapper">
  <button class="dropdown-trigger" onclick="this.classList.toggle('open');this.nextElementSibling.classList.toggle('open')">
    <span class="dropdown-label">选择设备</span>
    <span class="material-icons" style="font-size:18px;margin-left:auto;">expand_more</span>
  </button>
  <div class="dropdown-menu">
    <button class="dropdown-item selected">PyBricks Hub</button>
    <button class="dropdown-item">EV3</button>
    <button class="dropdown-item">Spike Prime</button>
  </div>
</div>
```

---

## 七、Chip（标签/筛选器）模板

```html
<style>
/* === Filter Chip（过滤芯片） === */
.chip-filter {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 0 16px;
  border: none;
  border-radius: var(--md-radius-extra-small);
  background: transparent;
  border: 1px solid var(--md-outline);
  color: var(--md-on-surface-variant);
  font-family: var(--md-font-family);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease;
  outline: none;
}

.chip-filter:hover { background: var(--md-state-hover); }
.chip-filter.selected {
  background: var(--md-secondary-container);
  border-color: transparent;
  color: var(--md-on-secondary-container);
}
.chip-filter:focus-visible { outline: 2px solid var(--md-primary); outline-offset: 2px; }

/* === Input Chip（输入芯片） === */
.chip-input {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  height: 32px;
  padding: 0 12px;
  border-radius: var(--md-radius-extra-small);
  background: var(--md-secondary-container);
  color: var(--md-on-secondary-container);
  font-family: var(--md-font-family);
  font-size: 14px;
  font-weight: 500;
  outline: none;
}

.chip-input .chip-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-size: 16px;
  opacity: 0.7;
  transition: opacity 0.15s ease;
}
.chip-input .chip-close:hover { opacity: 1; }
</style>

<!-- 使用示例 -->
<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;">
  <button class="chip-filter selected">Python</button>
  <button class="chip-filter">JavaScript</button>
  <button class="chip-filter">C++</button>
  <div class="chip-input">
    <span>main.py</span>
    <button class="chip-close" aria-label="移除">×</button>
  </div>
</div>
```

---

## 八、MD3 组件库 CDN 方案（备用）

> 如果确实需要使用现成组件库而非自研，可考虑以下 CDN 方案。

### 8.1 Material Web Components（官方 Web 组件）

```html
<!-- 方式一：ES Module CDN（推荐，按需引入） -->
<script type="module" src="https://esm.sh/@material/web@latest/button/filled-button.js"></script>
<script type="module" src="https://esm.sh/@material/web@latest/text-field/outlined-text-field.js"></script>
<script type="module" src="https://esm.sh/@material/web@latest/icon/icon.js"></script>

<!-- 使用 -->
<md-filled-button>确认</md-filled-button>
<md-outlined-text-field label="姓名"></md-outlined-text-field>
```

```html
<!-- 方式二：通过 bundler 安装 -->
<!-- npm install @material/web -->
<!-- 然后在 JS 中导入所需组件 -->
```

**注意**：Material Web Components 基于原生 Web Components，可用于任何框架，但也意味着需要浏览器支持 Web Components（主流浏览器均已支持）。

### 8.2 Cherry Design System CDN

```html
<!-- 引入核心 CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/cherry-ui/dist/cherry-ui.min.css">
<!-- 引入 JS -->
<script src="https://cdn.jsdelivr.net/npm/cherry-ui/dist/cherry-ui.min.js"></script>
```

### 8.3 单文件 SVG 图标（不依赖字体）

```html
<!-- 直接使用 Google Fonts Material Icons 的 SVG 版本 -->
<!-- 通过 URL 参数控制大小和颜色 -->
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
</svg>

<!-- 常用图标（复制使用） -->
<!-- 删除 --><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
<!-- 运行/播放 --><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
<!-- 设置 --><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
<!-- 文件 --><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
<!-- 文件夹 --><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></svg>
<!-- 终端 --><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10zm-8-2h4v-2h-4v2zM7.5 17l-1.41-1.41L8.67 13l-2.58-2.59L7.5 9l4 4-4 4z"/></svg>
<!-- 下载 --><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
<!-- 上传 --><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16h6v-6h4l-7-7-7 7h4v6zm-4 2h14v2H5v-2z"/></svg>
```

---

## 九、IDE 完整布局模板

```html
<style>
/* === IDE 整体布局 === */
.ide-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: var(--md-background);
  color: var(--md-on-background);
  font-family: var(--md-font-family);
}

/* 顶部工具栏 */
.ide-topbar {
  display: flex;
  align-items: center;
  height: 48px;
  min-height: 48px;
  padding: 0 8px;
  background: var(--md-surface-container);
  border-bottom: 1px solid var(--md-outline-variant);
  gap: 4px;
}

/* 主体区域：左侧导航 + 编辑区 + 右侧面板 */
.ide-main {
  display: flex;
  flex: 1;
  overflow: hidden;
}

/* 左侧导航栏（窄） */
.ide-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 56px;
  min-width: 56px;
  background: var(--md-surface-container-low);
  border-right: 1px solid var(--md-outline-variant);
  padding: 8px 0;
  gap: 4px;
}

.ide-nav-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: var(--md-radius-medium);
  border: none;
  background: transparent;
  color: var(--md-on-surface-variant);
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
  outline: none;
}
.ide-nav-btn:hover { background: var(--md-state-hover); }
.ide-nav-btn.active { background: var(--md-secondary-container); color: var(--md-on-secondary-container); }
.ide-nav-btn:focus-visible { outline: 2px solid var(--md-primary); outline-offset: -2px; }

/* 编辑区 */
.ide-editor {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: var(--md-surface-container-lowest);
}

/* 编辑器 tab 栏 */
.ide-tabs {
  display: flex;
  align-items: center;
  height: 40px;
  background: var(--md-surface-container);
  border-bottom: 1px solid var(--md-outline-variant);
  overflow-x: auto;
  gap: 0;
}

.ide-tab {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  padding: 0 16px;
  border: none;
  border-right: 1px solid var(--md-outline-variant);
  background: transparent;
  color: var(--md-on-surface-variant);
  font-family: var(--md-font-family);
  font-size: 14px;
  cursor: pointer;
  white-space: nowrap;
  outline: none;
  transition: background 0.15s;
}
.ide-tab:hover { background: var(--md-state-hover); }
.ide-tab.active { background: var(--md-surface-container-lowest); color: var(--md-on-surface); }
.ide-tab-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: inherit;
  font-size: 16px;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.1s, background 0.1s;
}
.ide-tab-close:hover { opacity: 1; background: var(--md-state-press); }

/* 编辑器内容区 */
.ide-content {
  flex: 1;
  overflow: auto;
  padding: 16px;
}

/* 底部状态栏 */
.ide-statusbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;
  min-height: 24px;
  padding: 0 16px;
  background: var(--md-primary);
  color: var(--md-on-primary);
  font-size: 12px;
}

/* 右侧面板（可折叠） */
.ide-rightpanel {
  width: 300px;
  min-width: 0;
  display: flex;
  flex-direction: column;
  background: var(--md-surface-container-low);
  border-left: 1px solid var(--md-outline-variant);
  overflow: hidden;
  transition: width 0.2s ease;
}

.ide-rightpanel.collapsed {
  width: 0;
  border-left: none;
}

.panel-section {
  padding: 8px 12px;
  border-bottom: 1px solid var(--md-outline-variant);
}

.panel-section-title {
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--md-on-surface-variant);
  margin: 0 0 8px;
}

/* 文件树 */
.file-tree { list-style: none; margin: 0; padding: 0; }

.file-tree-item {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: var(--md-radius-small);
  font-size: 13px;
  color: var(--md-on-surface);
  cursor: pointer;
  transition: background 0.1s;
}
.file-tree-item:hover { background: var(--md-state-hover); }
.file-tree-item.active { background: var(--md-secondary-container); color: var(--md-on-secondary-container); }

.file-tree-indent { width: 16px; display: inline-block; }
</style>

<!-- 完整 IDE 布局 HTML -->
<div class="ide-layout">
  <!-- 顶部工具栏 -->
  <header class="ide-topbar">
    <button class="btn-icon" style="color:var(--md-on-surface);" aria-label="菜单">
      <span class="material-icons" style="font-size:20px;">menu</span>
    </button>
    <div class="segment-group" style="height:32px;">
      <button class="segment-btn active" style="height:32px;font-size:13px;">文件</button>
      <button class="segment-btn" style="height:32px;font-size:13px;">编辑</button>
      <button class="segment-btn" style="height:32px;font-size:13px;">视图</button>
    </div>
    <div style="flex:1;"></div>
    <button class="btn-filled" style="height:32px;padding:0 16px;font-size:13px;">
      <span class="material-icons" style="font-size:16px;">play_arrow</span>运行
    </button>
    <button class="btn-icon" aria-label="设置"><span class="material-icons" style="font-size:20px;">settings</span></button>
  </header>

  <!-- 主体 -->
  <div class="ide-main">
    <!-- 左侧导航 -->
    <nav class="ide-nav">
      <button class="ide-nav-btn active" aria-label="编辑器">
        <span class="material-icons-outlined" style="font-size:24px;">code</span>
      </button>
      <button class="ide-nav-btn" aria-label="文件">
        <span class="material-icons-outlined" style="font-size:24px;">folder</span>
      </button>
      <button class="ide-nav-btn" aria-label="搜索">
        <span class="material-icons-outlined" style="font-size:24px;">search</span>
      </button>
      <button class="ide-nav-btn" aria-label="终端">
        <span class="material-icons-outlined" style="font-size:24px;">terminal</span>
      </button>
      <div style="flex:1;"></div>
      <button class="ide-nav-btn" aria-label="帮助">
        <span class="material-icons-outlined" style="font-size:24px;">help_outline</span>
      </button>
    </nav>

    <!-- 编辑区 -->
    <section class="ide-editor">
      <div class="ide-tabs">
        <button class="ide-tab active">
          <span class="material-icons-outlined" style="font-size:16px;">description</span>
          main.py
          <span class="ide-tab-close">×</span>
        </button>
        <button class="ide-tab">
          <span class="material-icons-outlined" style="font-size:16px;">description</span>
          utils.py
          <span class="ide-tab-close">×</span>
        </button>
      </div>
      <div class="ide-content">
        <!-- 这里放置代码编辑器 -->
        <pre style="font-family:'JetBrains Mono','Fira Code','Consolas',monospace;font-size:14px;line-height:1.6;color:var(--md-on-surface);margin:0;"><code><span style="color:var(--md-tertiary);">from</span> pybricks.hubs <span style="color:var(--md-tertiary);">import</span> PrimeHub
<span style="color:var(--md-tertiary);">from</span> pybricks.pupdevices <span style="color:var(--md-tertiary);">import</span> Motor, ColorSensor
<span style="color:var(--md-tertiary);">from</span> pybricks.parameters <span style="color:var(--md-tertiary);">import</span> Direction, Port
<span style="color:var(--md-tertiary);">from</span> pybricks.robotics <span style="color:var(--md-tertiary);">import</span> DriveBase

hub = PrimeHub()

<span style="color:#9E9E9E;"># 初始化电机</span>
left_motor = Motor(Port.A, Direction.CLOCKWISE)
right_motor = Motor(Port.B, Direction.CLOCKWISE)
robot = DriveBase(left_motor, right_motor, wheel_diameter=56, axle_track=114)

<span style="color:#9E9E9E;"># 主循环</span>
<span style="color:var(--md-tertiary);">while</span> True:
    robot.drive(speed=100, turn_rate=0)</code></pre>
      </div>
    </section>

    <!-- 右侧面板 -->
    <aside class="ide-rightpanel">
      <div class="panel-section">
        <h4 class="panel-section-title">文件</h4>
        <ul class="file-tree">
          <li class="file-tree-item active">
            <span class="material-icons-outlined" style="font-size:16px;">description</span>
            main.py
          </li>
          <li class="file-tree-item">
            <span class="material-icons-outlined" style="font-size:16px;">description</span>
            utils.py
          </li>
          <li class="file-tree-item">
            <span class="material-icons-outlined" style="font-size:16px;">description</span>
            config.json
          </li>
        </ul>
      </div>
      <div class="panel-section" style="flex:1;overflow-y:auto;">
        <h4 class="panel-section-title">属性</h4>
        <div style="display:flex;flex-direction:column;gap:12px;">
          <div class="field-wrapper" style="gap:2px;">
            <label class="field-label">设备名称</label>
            <input class="field-input" type="text" value="PyBricks Hub" style="height:48px;font-size:14px;" />
          </div>
          <div style="display:flex;flex-direction:column;gap:4px;">
            <span style="font-size:12px;color:var(--md-on-surface-variant);">速度 (mm/s)</span>
            <input type="range" min="0" max="500" value="100" style="width:100%;accent-color:var(--md-primary);" />
          </div>
        </div>
      </div>
    </aside>
  </div>

  <!-- 状态栏 -->
  <footer class="ide-statusbar">
    <span>Python 3 · PyBricks 2.0</span>
    <span>Ln 7, Col 24</span>
  </footer>
</div>
```

---

## 十、实用工具函数

```css
/* 深色主题切换 */
[data-theme="dark"] { /* 见上方深色变量 */ }

/* 自动跟随系统深色模式 */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    /* 自动应用深色变量（需要自行定义 @dark 变量或用 JS 切换） */
  }
}
```

```javascript
// 深色主题切换
function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  html.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
}

// 跟随系统
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
});
```

```javascript
// MD3 风格焦点管理（支持 Tab 导航）
document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    document.body.classList.add('keyboard-nav');
  }
});
document.addEventListener('mousedown', () => {
  document.body.classList.remove('keyboard-nav');
});

/* 在 keyboard-nav 模式下添加全局焦点指示器 */
body.keyboard-nav *:focus-visible {
  outline: 2px solid var(--md-primary);
  outline-offset: 2px;
}
```

---

## 十一、CDN 快速引入汇总

```html
<!-- Google Fonts（字体 + 图标） -->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Noto+Sans+SC:wght@300;400;500;700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Round" rel="stylesheet">

<!-- Material Web Components（可选，官方 Web 组件） -->
<script type="module" src="https://esm.sh/@material/web@latest/all.js"></script>

<!-- Cherry Design System（轻量级组件库） -->
<!-- npm install cherry-design-system -->
<!-- 或 CDN: -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/cherry-design-system/dist/cherry.min.css">
```

---

**总结**：以上模板覆盖了 IDE 所需的所有核心 UI 组件。陛下配色方案已内嵌到 CSS 变量中，只需引入字体和图标 CDN 即可在项目中直接使用。建议将这些变量和组件样式整理为单独的 `md3-theme.css` 文件，在 IDE 启动时引入。
