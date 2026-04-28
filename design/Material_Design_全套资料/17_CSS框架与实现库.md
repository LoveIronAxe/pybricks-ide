# CSS 框架与实现库对比

## 纯 CSS vs CSS 框架

| 维度 | 纯 CSS（自研） | Cherry Design System | Materialize | MUI（React） |
|------|---------------|---------------------|-------------|-------------|
| **包体积** | 0（按需引入） | ~50KB | ~150KB | 几百 KB+ |
| **学习成本** | 需了解 MD3 规范 | 低 | 低 | 需 React 知识 |
| **定制性** | 完全自由 | 中等 | 中等 | 较困难 |
| **加载速度** | 最快 | 快 | 中等 | 较慢 |
| **组件完整性** | 需自己实现 | 部分组件 | 较完整 | 非常完整 |
| **维护成本** | 自己维护 | 有社区 | 社区活跃 | 官方维护 |
| **适用场景** | 单页应用、定制化需求 | 快速开发 | 快速开发 | React 项目 |

## 主流框架对比

### Cherry Design System
- **定位**：轻量级 Material Design 实现
- **特点**：基于 Web Components，纯 CSS 变量驱动主题
- **地址**：https://cherry.fun/
- **适合**：需要快速出原型、接受一定定制妥协的项目

### Materialize CSS
- **定位**：Material Design 官方 CSS 框架（非 React 版）
- **特点**：
  - 纯 CSS + JS（非 React）
  - 组件较全（卡片、按钮、表单、导航等）
  - 提供 CDN，单文件引入
- **问题**：
  - 许久未更新，维护状态不佳
  - 风格偏旧版 Material Design，非 MD3
- **结论**：**不推荐新项目使用**

### MUI（Material UI）
- **定位**：React 组件库
- **特点**：
  - 完整的 MD3 支持（MUI v5+）
  - 组件极其完善
  - 主题系统强大
- **问题**：
  - 依赖 React，仅适合 React 项目
  - 包体积大（完整的 MUI + Emotion）
  - 不适合单页 IDE（加载速度敏感）
- **结论**：仅在项目确定使用 React 时考虑

### 其他可选

| 框架 | 说明 |
|------|------|
| **Arco Design** | 字节跳动出品，质量高，但非 MD3 风格 |
| **Semi Design** | 字节出品，类似但非 MD3 |
| **Shadcn/ui** | 基于 Radix + Tailwind，组件质量高，非 MD3 |
| **daisyUI** | 基于 Tailwind，轻量，但非 MD3 |

## 本项目 IDE 的建议

### ✅ 推荐：纯 CSS（自研）

**理由**：

1. **加载速度优先**：本项目是单页应用，首屏加载速度至关重要
   - 引入任何大型框架都会增加 JS/CSS 体积
   - 纯 CSS 只加载实际用到的样式，体积可控制在 20KB 以内

2. **完全可控**：
   - 按钮、面板、输入框等基础组件自研代码量不大
   - 不受框架 API 变更影响
   - 可针对 IDE 场景做特殊优化（如深色主题支持）

3. **MD3 风格可完全复制**：
   - MD3 本质是一套设计规范，用 CSS 变量定义色彩和语义
   - 官方提供完整的 Design Token 规范，可直接照搬
   - 组件样式参考官方 Demo 页面（https://m3.material.io/components）

4. **IDE 场景不需要完整组件库**：
   - IDE 核心 UI（工具栏、侧边栏、编辑器面板、状态栏）都是自定义组件
   - 不需要表格、数据展示等复杂组件
   - 只做基础表单控件（按钮、输入框、下拉菜单、开关）

### 📋 实施建议

**阶段一**：定义 Design Token（CSS 变量）
- 色彩系统（陛下配色方案）
- 字体系统
- 间距 / 圆角 / 阴影

**阶段二**：实现基础组件
- 按钮（Filled, Outlined, Text, Elevated）
- 输入框（Outlined Text Field）
- 工具栏 / 侧边栏 / 面板
- 菜单 / 对话框

**阶段三**：细节打磨
- 焦点状态（MD3 强调焦点环）
- 深色主题
- 动效（MD3 建议的 easing）

### 参考实现来源

| 内容 | 来源 |
|------|------|
| Design Token 变量名 | https://m3.material.io/styles/color |
| 组件样式代码 | https://m3.material.io/components（底部 Code 标签） |
| Web 组件参考 | https://github.com/material-components（Button, TextField 等） |
| 图标 | Material Icons CDN |
