# Material Design 3 组件规范参考

> 适用项目：Pybricks 机器车配置 IDE（SPIKE Prime 编程工具）
> 整理目标：为 IDE 开发提供实用、快速的组件样式参考

---

## 目录

1. [按钮类](#1-按钮类)
2. [输入类](#2-输入类)
3. [展示类](#3-展示类)
4. [反馈类](#4-反馈类)
5. [导航类](#5-导航类)

---

## 0. 主题变量（CSS Custom Properties）

所有 MD3 组件基于以下主题变量构建，**优先使用这些变量而非硬编码值**：

```css
/* 品牌色 */
--md-sys-color-primary: #6750A4;           /* 主色（紫） */
--md-sys-color-on-primary: #FFFFFF;         /* 主色上文字 */
--md-sys-color-primary-container: #EADDFF;  /* 主色容器 */
--md-sys-color-on-primary-container: #21005D;

/* 次要色 */
--md-sys-color-secondary: #625B71;
--md-sys-color-on-secondary: #FFFFFF;
--md-sys-color-secondary-container: #E8DEF8;
--md-sys-color-on-secondary-container: #1D192B;

/* 错误色 */
--md-sys-color-error: #B3261E;
--md-sys-color-on-error: #FFFFFF;
--md-sys-color-error-container: #F9DEDC;
--md-sys-color-on-error-container: #410E0B;

/* 表面色 */
--md-sys-color-surface: #FFFBFE;
--md-sys-color-surface-variant: #E7E0EC;
--md-sys-color-on-surface: #1C1B1F;
--md-sys-color-on-surface-variant: #49454F;
--md-sys-color-outline: #79747E;
--md-sys-color-outline-variant: #CAC4D0;

/* 阴影 */
--md-sys-elevation-1: 0 1px 2px rgba(0,0,0,.3), 0 1px 3px 1px rgba(0,0,0,.15);
--md-sys-elevation-2: 0 1px 2px rgba(0,0,0,.3), 0 2px 6px 2px rgba(0,0,0,.15);
--md-sys-elevation-3: 0 4px 8px 3px rgba(0,0,0,.15), 0 1px 3px rgba(0,0,0,.3);

/* 圆角 */
--md-sys-shape-corner-small: 8px;
--md-sys-shape-corner-medium: 12px;
--md-sys-shape-corner-large: 16px;
--md-sys-shape-corner-extra-large: 28px;

/* 字体 */
--md-sys-typescale-label-large: 500 14px / 20px Roboto;
--md-sys-typescale-label-medium: 500 12px / 16px Roboto;
--md-sys-typescale-body-large: 400 16px / 24px Roboto;
--md-sys-typescale-body-medium: 400 14px / 20px Roboto;
--md-sys-typescale-title-medium: 500 16px / 24px Roboto;
--md-sys-typescale-title-large: 400 22px / 28px Roboto;
```

---

## 1. 按钮类

### 1.1 Filled Button（实心按钮）

**用途**：主要操作按钮，如"保存"、"下载程序"、"连接车辆"

**视觉描述**：
- 圆角 20px（full-round variant 为 8px）
- 填充主色背景，白色文字
- 有轻微阴影（elevation 1）

**关键 CSS 属性**：
```css
.md3-button--filled {
  background: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);
  border-radius: 20px;
  padding: 10px 24px;
  font: var(--md-sys-typescale-label-large);
  box-shadow: var(--md-sys-elevation-1);
  border: none;
  cursor: pointer;
  min-height: 40px;
}
```

**状态**：
| 状态 | 样式变化 |
|------|---------|
| 悬停 | 背景色加亮 8%（filter: brightness(1.08)），阴影增强 |
| 按下 | 背景色加深 12%（filter: brightness(0.92)），阴影减弱 |
| 禁用 | opacity: 0.38，cursor: not-allowed |

**项目适用**：
- ✅ 车辆页面："连接车辆"、"下载程序"
- ✅ 地图页面："保存地图"、"运行程序"

---

### 1.2 Outlined Button（描边按钮）

**用途**：次要操作，与 Filled Button 配合使用

**视觉描述**：
- 透明背景，1.5px 描边（主色），文字为主色
- 圆角 20px

**关键 CSS 属性**：
```css
.md3-button--outlined {
  background: transparent;
  color: var(--md-sys-color-primary);
  border: 1.5px solid var(--md-sys-color-outline);
  border-radius: 20px;
  padding: 10px 24px;
  font: var(--md-sys-typescale-label-large);
  min-height: 40px;
  cursor: pointer;
}
```

**状态**：
| 状态 | 样式变化 |
|------|---------|
| 悬停 | 背景填充主色 8% 透明度（rgba(103,80,164,0.08)） |
| 按下 | 背景填充主色 12% 透明度 |
| 禁用 | border-color: currentColor; opacity: 0.38 |

**项目适用**：
- ✅ 车辆页面："取消"、"返回"
- ✅ 地图页面："清空地图"、"删除航点"

---

### 1.3 Text Button（文字按钮）

**用途**：辅助操作、内联操作，如对话框中的"取消"/"确认"

**视觉描述**：
- 无背景、无边框，文字为主色
- 文字下无下划线

**关键 CSS 属性**：
```css
.md3-button--text {
  background: transparent;
  color: var(--md-sys-color-primary);
  border: none;
  border-radius: 20px;
  padding: 10px 12px;
  font: var(--md-sys-typescale-label-large);
  min-height: 40px;
  cursor: pointer;
}
```

**状态**：
| 状态 | 样式变化 |
|------|---------|
| 悬停 | 背景填充主色 8% 透明度 |
| 按下 | 背景填充主色 12% 透明度 |
| 禁用 | opacity: 0.38 |

**项目适用**：
- ✅ 通用：对话框、工具栏中的辅助操作

---

### 1.4 Icon Button（图标按钮）

**用途**：工具栏、操作面板中的图标操作

**视觉描述**：
- 圆形/圆角方形，图标居中
- 40×40px 点击区域，24×24px 图标

**关键 CSS 属性**：
```css
.md3-icon-button {
  width: 40px;
  height: 40px;
  border-radius: 20px;  /* 圆形 */
  border: none;
  background: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--md-sys-color-on-surface-variant);
}

/* Filled Variant */
.md3-icon-button--filled {
  background: var(--md-sys-color-secondary-container);
  color: var(--md-sys-color-on-secondary-container);
}
```

**状态**：
| 状态 | 样式变化 |
|------|---------|
| 悬停 | 背景填充 on-surface 8% 透明度 |
| 按下 | 背景填充 on-surface 12% 透明度 |
| 禁用 | opacity: 0.38 |

**项目适用**：
- ✅ 车辆页面：连接状态图标、刷新按钮
- ✅ 地图页面：缩放按钮、图层切换、删除航点

---

### 1.5 FAB（浮动操作按钮）

**用途**：页面主要单一操作，如"添加车辆"、"新建地图"

**视觉描述**：
- 56×56px（标准）或 40×40px（小号）
- 圆角 16px（Large FAB 为 28px）
- 有 elevation 3 阴影
- 图标 24×24px

**关键 CSS 属性**：
```css
.md3-fab {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: var(--md-sys-color-primary-container);
  color: var(--md-sys-color-on-primary-container);
  border: none;
  box-shadow: var(--md-sys-elevation-3);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  /* 小号版本 */
}
.md3-fab--small {
  width: 40px;
  height: 40px;
  border-radius: 12px;
}
.md3-fab--large {
  width: 96px;
  height: 96px;
  border-radius: 28px;
  font: var(--md-sys-typescale-title-large);
}
```

**状态**：
| 状态 | 样式变化 |
|------|---------|
| 悬停 | 阴影增强，背景亮度+5% |
| 按下 | 阴影减弱，背景亮度-5% |
| 禁用 | opacity: 0.38，阴影降低 |

**项目适用**：
- ✅ 地图页面："添加航点"、"添加障碍物"
- ✅ 车辆页面："添加车辆配置文件"

---

## 2. 输入类

### 2.1 Text Field（文本输入框）

**用途**：名称输入、数值输入、搜索框

**视觉描述**：
- 填充风格（Filled）或描边风格（Outlined）
- 圆角 4px 顶部（底部略尖，特殊形状）
- 标签浮动在输入框上方
- 底部有输入指示线（激活时显示主色）

**关键 CSS 属性**：
```css
/* Filled Text Field */
.md3-text-field {
  position: relative;
  background: var(--md-sys-color-surface-variant);
  border-radius: 4px 4px 0 0;
  border: none;
  border-bottom: 1px solid var(--md-sys-color-outline);
  padding: 16px 16px 4px;
  font: var(--md-sys-typescale-body-large);
  color: var(--md-sys-color-on-surface);
  min-width: 200px;
  height: 56px;
  box-sizing: border-box;
}
.md3-text-field:focus-within {
  border-bottom: 2px solid var(--md-sys-color-primary);
  background: var(--md-sys-color-surface);
}
.md3-text-field__label {
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  font: var(--md-sys-typescale-body-large);
  color: var(--md-sys-color-on-surface-variant);
  pointer-events: none;
  transition: all 0.2s;
}
.md3-text-field--focused .md3-text-field__label,
.md3-text-field--filled .md3-text-field__label {
  top: 8px;
  font: var(--md-sys-typescale-label-medium);
  transform: none;
}

/* Outlined Variant */
.md3-text-field--outlined {
  border-radius: 4px;
  border: 1px solid var(--md-sys-color-outline);
  background: transparent;
  border-bottom: none;
}
.md3-text-field--outlined:focus-within {
  border: 2px solid var(--md-sys-color-primary);
}
```

**状态**：
| 状态 | 样式变化 |
|------|---------|
| 默认 | 底部边框为 outline 色 |
| 聚焦 | 边框变 2px 主色，标签上浮并缩小 |
| 错误 | 边框/指示线变 error 色，标签变 error 色 |
| 禁用 | opacity: 0.38，背景变 surface-variant |

**项目适用**：
- ✅ 车辆页面：设备名称、电机端口配置
- ✅ 地图页面：航点名称、坐标值输入

---

### 2.2 Checkbox（复选框）

**用途**：多选设置，如"启用陀螺仪"、"显示网格"

**视觉描述**：
- 24×24px，选中时有主色填充 + 白色勾
- 40×40px 点击区域（左侧/上方留白）

**关键 CSS 属性**：
```css
.md3-checkbox {
  position: relative;
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.md3-checkbox__input {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 1;
}
.md3-checkbox__background {
  width: 24px;
  height: 24px;
  border: 2px solid var(--md-sys-color-outline);
  border-radius: 4px;
  background: transparent;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}
.md3-checkbox--checked .md3-checkbox__background {
  background: var(--md-sys-color-primary);
  border-color: var(--md-sys-color-primary);
}
.md3-checkbox__icon {
  width: 18px;
  height: 18px;
  color: white;
  display: none;
}
.md3-checkbox--checked .md3-checkbox__icon {
  display: block;
}
```

**状态**：
| 状态 | 样式变化 |
|------|---------|
| 未选中 | 透明背景，描边为 outline 色 |
| 选中 | 主色填充，白色勾图标 |
| 悬停 | 背景填充主色 8% |
| 禁用 | opacity: 0.38 |
| 错误 | 描边/填充为 error 色 |

**项目适用**：
- ✅ 车辆页面：功能开关（启用传感器、声音反馈等）
- ✅ 地图页面：显示/隐藏图层选项

---

### 2.3 Radio（单选按钮）

**用途**：单选设置，如"电机类型"、"通信模式"

**视觉描述**：
- 圆形，24×24px，选中时内圈为主色
- 常配合 Label 使用

**关键 CSS 属性**：
```css
.md3-radio {
  position: relative;
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.md3-radio__input {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.md3-radio__background {
  width: 24px;
  height: 24px;
  border: 2px solid var(--md-sys-color-outline);
  border-radius: 50%;
  background: transparent;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}
.md3-radio--selected .md3-radio__background {
  border-color: var(--md-sys-color-primary);
}
.md3-radio__inner-circle {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--md-sys-color-primary);
  transform: scale(0);
  transition: transform 0.2s;
}
.md3-radio--selected .md3-radio__inner-circle {
  transform: scale(1);
}
```

**状态**：
| 状态 | 样式变化 |
|------|---------|
| 未选中 | 透明背景，描边为 outline 色 |
| 选中 | 外圈主色，内圈主色填充并放大 |
| 悬停 | 外圈变主色 50% 透明度 |
| 禁用 | opacity: 0.38 |

**项目适用**：
- ✅ 车辆页面：电机类型选择、通信协议选择

---

### 2.4 Switch（开关）

**用途**：即时启用的布尔设置

**视觉描述**：
- 轨道 52×32px，-thumb 24×24px
- 关闭：灰轨；开启：主色轨 + 白 Thumb 右侧
- Thumb 有阴影，轨道有圆角

**关键 CSS 属性**：
```css
.md3-switch {
  position: relative;
  width: 52px;
  height: 32px;
  cursor: pointer;
}
.md3-switch__input {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 1;
}
.md3-switch__track {
  position: absolute;
  inset: 0;
  border-radius: 16px;
  background: var(--md-sys-color-surface-variant);
  border: 2px solid var(--md-sys-color-outline);
  transition: all 0.2s;
  box-sizing: border-box;
}
.md3-switch--selected .md3-switch__track {
  background: var(--md-sys-color-secondary-container);
  border-color: var(--md-sys-color-secondary-container);
}
.md3-switch__thumb {
  position: absolute;
  top: 4px;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--md-sys-color-outline);
  box-shadow: var(--md-sys-elevation-1);
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.md3-switch--selected .md3-switch__thumb {
  left: 24px;  /* 移动到右侧 */
  background: var(--md-sys-color-on-secondary-container);
}
```

**状态**：
| 状态 | 样式变化 |
|------|---------|
| 关闭 | 灰轨，Thumb 左侧 |
| 开启 | 主色轨，Thumb 右侧 |
| 悬停 | 整体亮度+5% |
| 禁用 | opacity: 0.38 |
| 聚焦 | 可见 focus ring（2px offset outline） |

**项目适用**：
- ✅ 车辆页面：启用/禁用传感器、实时数据反馈开关
- ✅ 地图页面：显示/隐藏实时位置

---

### 2.5 Slider（滑块）

**用途**：连续数值调节，如电机功率、速度阈值

**视觉描述**：
- 水平轨道，高 4px（可触摸区域 48px 高）
- Thumb 24×24px 圆形，有阴影
- 有数值气泡显示当前值

**关键 CSS 属性**：
```css
.md3-slider {
  position: relative;
  height: 48px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.md3-slider__track {
  position: absolute;
  left: 0;
  right: 0;
  height: 4px;
  border-radius: 2px;
  background: var(--md-sys-color-surface-variant);
}
.md3-slider__fill {
  position: absolute;
  left: 0;
  height: 4px;
  border-radius: 2px;
  background: var(--md-sys-color-primary);
}
.md3-slider__thumb {
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--md-sys-color-primary);
  box-shadow: var(--md-sys-elevation-1);
  transition: transform 0.1s;
}
.md3-slider__thumb:hover {
  transform: scale(1.1);
}
.md3-slider__thumb:active {
  transform: scale(0.95);
}
```

**状态**：
| 状态 | 样式变化 |
|------|---------|
| 默认 | 轨道灰色，Thumb 为主色 |
| 悬停 | Thumb 放大 10% |
| 按下 | Thumb 缩小 5% |
| 禁用 | opacity: 0.38，轨道变 outline 色 |

**项目适用**：
- ✅ 车辆页面：电机功率限制、最高速度设置
- ✅ 地图页面：缩放级别初始值（间接）

---

## 3. 展示类

### 3.1 Card（卡片）

**用途**：容器组件，分组展示相关内容

**视觉描述**：
- 白色/表面色背景，圆角 12px
- elevation 1 阴影
- 可选：顶部色带（主色/容器色）

**关键 CSS 属性**：
```css
.md3-card {
  background: var(--md-sys-color-surface);
  border-radius: var(--md-sys-shape-corner-medium);
  box-shadow: var(--md-sys-elevation-1);
  padding: 16px;
  overflow: hidden;
}
.md3-card--outlined {
  box-shadow: none;
  border: 1px solid var(--md-sys-color-outline-variant);
}
.md3-card--elevated {
  box-shadow: var(--md-sys-elevation-2);
}
```

**项目适用**：
- ✅ 车辆页面：每个电机/传感器的配置卡片
- ✅ 地图页面：航点详情卡片、障碍物信息卡片

---

### 3.2 List Item（列表项）

**用途**：设置项列表、菜单项

**视觉描述**：
- 高度 56px（标准）/ 72px（双行）/ 88px（三行）
- 左侧可选：Icon（24px）或 Avatar（40px）
- 右侧可选：支持文本、Switch、Checkbox
- 底部有分隔线（可选）

**关键 CSS 属性**：
```css
.md3-list-item {
  display: flex;
  align-items: center;
  min-height: 56px;
  padding: 4px 16px;
  gap: 16px;
  cursor: pointer;
}
.md3-list-item__graphic {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  color: var(--md-sys-color-on-surface-variant);
}
.md3-list-item__content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.md3-list-item__title {
  font: var(--md-sys-typescale-body-large);
  color: var(--md-sys-color-on-surface);
}
.md3-list-item__subtitle {
  font: var(--md-sys-typescale-body-medium);
  color: var(--md-sys-color-on-surface-variant);
}
.md3-list-item__meta {
  color: var(--md-sys-color-on-surface-variant);
}
.md3-list-item:hover {
  background: rgba(0,0,0,0.04);
}
```

**项目适用**：
- ✅ 车辆页面：端口配置列表、传感器列表
- ✅ 地图页面：航点列表、图层列表

---

### 3.3 Chip（提示/标签）

**用途**：状态标签、过滤器、选择指示

**视觉描述**：
- 高度 32px，圆角 8px
- 可带 Icon（左侧 18px）或 Avatar（24px）
- 填充型、描边型两种风格

**关键 CSS 属性**：
```css
.md3-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 0 12px;
  border-radius: 8px;
  font: var(--md-sys-typescale-label-large);
  border: none;
  cursor: pointer;
  white-space: nowrap;
}
/* 填充型 */
.md3-chip--filled {
  background: var(--md-sys-color-secondary-container);
  color: var(--md-sys-color-on-secondary-container);
}
/* 描边型 */
.md3-chip--outlined {
  background: transparent;
  border: 1px solid var(--md-sys-color-outline);
  color: var(--md-sys-color-on-surface-variant);
}
/* 带 X 关闭按钮 */
.md3-chip__close {
  width: 18px;
  height: 18px;
  margin-left: -4px;
  border-radius: 50%;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
}
.md3-chip__close:hover {
  background: rgba(0,0,0,0.1);
}
```

**项目适用**：
- ✅ 车辆页面：已选端口标签（如"电机-A"）、传感器类型标签
- ✅ 地图页面：航点类型标签（如"起点"、"充电桩"）、障碍物类型

---

### 3.4 Avatar（头像/图标）

**用途**：用户头像、车辆图标、状态图标

**视觉描述**：
- 圆形，尺寸：40px（大）、32px（中）、24px（小）
- 可显示图片、文字（首字母）或 Icon

**关键 CSS 属性**：
```css
.md3-avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--md-sys-color-primary-container);
  color: var(--md-sys-color-on-primary-container);
  font: var(--md-sys-typescale-label-large);
  overflow: hidden;
  flex-shrink: 0;
}
.md3-avatar--size-large { width: 40px; height: 40px; }
.md3-avatar--size-medium { width: 32px; height: 32px; font: var(--md-sys-typescale-label-medium); }
.md3-avatar--size-small { width: 24px; height: 24px; font: var(--md-sys-typescale-label-small, 11px); }
.md3-avatar img { width: 100%; height: 100%; object-fit: cover; }
```

**项目适用**：
- ✅ 车辆页面：车辆设备图标、连接状态指示
- ✅ 地图页面：航点图标（区分起点/终点/途经点）

---

## 4. 反馈类

### 4.1 Dialog（对话框）

**用途**：确认操作、显示详情、表单输入

**视觉描述**：
- 居中显示，最大宽度 560px
- 圆角 28px
- 标题 + 内容 + 操作按钮
- 遮罩层：黑色 50% 透明度

**关键 CSS 属性**：
```css
.md3-dialog__scrim {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.md3-dialog {
  background: var(--md-sys-color-surface);
  border-radius: var(--md-sys-shape-corner-extra-large);
  padding: 24px;
  max-width: 560px;
  min-width: 280px;
  box-shadow: var(--md-sys-elevation-3);
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.md3-dialog__title {
  font: var(--md-sys-typescale-title-large);
  color: var(--md-sys-color-on-surface);
}
.md3-dialog__content {
  font: var(--md-sys-typescale-body-medium);
  color: var(--md-sys-color-on-surface-variant);
}
.md3-dialog__actions {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  flex-wrap: wrap;
}
```

**项目适用**：
- ✅ 车辆页面：删除确认、连接失败提示
- ✅ 地图页面：航点删除确认、地图导出选项

---

### 4.2 Snackbar（轻提示）

**用途**：操作反馈、简短消息提示

**视觉描述**：
- 底部居中，圆角 4px
- 背景 dark surface（#323232），白色文字
- 可带单个操作按钮
- 自动消失（3-5秒）或手动关闭

**关键 CSS 属性**：
```css
.md3-snackbar {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  background: #323232;
  color: white;
  border-radius: 4px;
  padding: 14px 16px;
  min-width: 300px;
  max-width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  box-shadow: var(--md-sys-elevation-3);
  z-index: 2000;
  font: var(--md-sys-typescale-body-medium);
}
.md3-snackbar__label {
  flex: 1;
  color: white;
}
.md3-snackbar__action {
  background: transparent;
  border: none;
  color: var(--md-sys-color-inverse-primary, #D0BCFF);
  font: var(--md-sys-typescale-label-large);
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  text-transform: uppercase;
}
```

**项目适用**：
- ✅ 车辆页面："程序已下载"、"连接超时"
- ✅ 地图页面："地图已保存"、"撤销操作"

---

### 4.3 Tooltip（提示气泡）

**用途**：图标/按钮的功能说明

**视觉描述**：
- 小型浮动提示，出现在目标下方或上方
- 深色背景（#616161），白色文字
- 圆角 4px，padding 4px 8px
- 延迟 200ms 显示

**关键 CSS 属性**：
```css
.md3-tooltip {
  position: absolute;
  background: #616161;
  color: white;
  border-radius: 4px;
  padding: 4px 8px;
  font: var(--md-sys-typescale-label-small, 12px);
  white-space: nowrap;
  pointer-events: none;
  z-index: 3000;
  opacity: 0;
  transition: opacity 0.15s;
}
.md3-tooltip--visible {
  opacity: 1;
}
/* 小型（桌面）高度 24px */
.md3-tooltip--small {
  height: 24px;
  display: flex;
  align-items: center;
}
/* 大型（触屏）高度 32px */
.md3-tooltip--large {
  height: 32px;
  font: var(--md-sys-typescale-label-medium);
}
```

**项目适用**：
- ✅ 通用：工具栏图标的悬停说明

---

## 5. 导航类

### 5.1 Navigation Rail（侧边导航栏）

**用途**：IDE 主导航，如：车辆配置 / 地图编辑 / 程序 / 设置

**视觉描述**：
- 固定于左侧，宽度 80px（仅图标）或 256px（带标签）
- 顶部：应用 Logo
- 中间：导航项（Icon + 可选 Label）
- 底部：设置/帮助
- 选中项有主色背景指示器（pill 形状）

**关键 CSS 属性**：
```css
.md3-navigation-rail {
  width: 80px;
  background: var(--md-sys-color-surface);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 0;
  gap: 4px;
  border-right: 1px solid var(--md-sys-color-outline-variant);
  flex-shrink: 0;
}
.md3-navigation-rail__item {
  position: relative;
  width: 56px;
  height: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: 16px;
  cursor: pointer;
  color: var(--md-sys-color-on-surface-variant);
  text-decoration: none;
  transition: background 0.2s;
}
.md3-navigation-rail__item:hover {
  background: rgba(0,0,0,0.04);
}
.md3-navigation-rail__item--selected {
  color: var(--md-sys-color-on-secondary-container);
  background: var(--md-sys-color-secondary-container);
}
.md3-navigation-rail__icon {
  width: 24px;
  height: 24px;
}
.md3-navigation-rail__label {
  font: var(--md-sys-typescale-label-small, 11px);
  display: none; /* 80px 窄版隐藏文字 */
}
/* 展开模式（256px） */
.md3-navigation-rail--extended {
  width: 256px;
}
.md3-navigation-rail--extended .md3-navigation-rail__item {
  width: auto;
  min-width: 256px;
  padding: 0 12px;
  flex-direction: row;
  justify-content: flex-start;
  gap: 12px;
}
.md3-navigation-rail--extended .md3-navigation-rail__label {
  display: block;
}
```

**项目适用**：
- ✅ 主导航：车辆页面 / 地图页面 / 程序页面 / 设置页面

---

### 5.2 Tabs（标签页）

**用途**：同一页面内的子视图切换，如"基础配置"/"高级配置"

**视觉描述**：
- 标签横向排列，固定在顶部或滚动
- 选中项：主色下划线（3px），文字变主色
- 未选中：文字为 on-surface-variant
- 支持图标+文字组合

**关键 CSS 属性**：
```css
.md3-tabs {
  display: flex;
  gap: 0;
  position: relative;
  background: var(--md-sys-color-surface);
}
.md3-tab {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0 24px;
  height: 48px;
  cursor: pointer;
  color: var(--md-sys-color-on-surface-variant);
  font: var(--md-sys-typescale-label-large);
  white-space: nowrap;
  transition: color 0.2s;
}
.md3-tab:hover {
  color: var(--md-sys-color-on-surface);
}
.md3-tab--selected {
  color: var(--md-sys-color-primary);
}
.md3-tab__indicator {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  border-radius: 3px 3px 0 0;
  background: var(--md-sys-color-primary);
  transform: scaleX(0);
  transition: transform 0.2s;
}
.md3-tab--selected .md3-tab__indicator {
  transform: scaleX(1);
}
/* 滚动型 */
.md3-tabs--scrollable {
  overflow-x: auto;
  scrollbar-width: none;
}
.md3-tabs--scrollable::-webkit-scrollbar {
  display: none;
}
```

**项目适用**：
- ✅ 车辆页面："电机配置" / "传感器配置" / "通信配置"
- ✅ 地图页面："编辑模式" / "预览模式"

---

## 附录：组件使用优先级速查

| 页面 | 核心组件 | 优先级 |
|------|---------|--------|
| 车辆页面 | Filled Button, Text Field, Switch, Card, Chip | 🔴 高 |
| 地图页面 | FAB, Card, List Item, Icon Button, Dialog | 🔴 高 |
| 通用/全局 | Navigation Rail, Tabs, Snackbar, Tooltip | 🔴 高 |
| 设置项 | Text Field, Switch, Checkbox, Radio, Slider | 🟡 中 |
| 辅助 | Dialog, Avatar | 🟡 中 |

---

*文档版本：v1.0 | 规范来源：Material Design 3 (Material You)*
