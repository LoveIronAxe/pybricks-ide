# UI 统一性检测报告

## 检测时间
2026-04-28 16:50:28 CST

## 检测文件
- `pages/vehicle.html` — 基准文件
- `pages/map.html`
- `pages/program.html`
- `pages/debug.html`

---

## 检测结果

### ✅ 统一的项

#### CSS 变量（已统一）
| 变量 | 值 | 状态 |
|------|-----|------|
| `--primary` | `#0071e3` | ✅ 全部统一 |
| `--on-primary` | `#ffffff` | ✅ 全部统一 |
| `--primary-container` | `#d4e3ff` | ✅ 全部统一 |
| `--on-primary-container` | `#001c38` | ✅ 全部统一 |
| `--surface` | `#ffffff` | ✅ 全部统一 |
| `--on-surface` | `#1c1b1f` | ✅ 全部统一 |
| `--on-surface-variant` | `#49454f` | ✅ 全部统一 |
| `--outline` | `#74777f` | ✅ 全部统一 |
| `--radius-sm` | `12px` | ✅ 全部统一 |
| `--radius-md` | `20px` | ✅ 全部统一 |
| `--radius-lg` | `28px` | ✅ 全部统一 |
| `--radius-xl` | `28px` | ✅ 全部统一 |
| `--space-xs` | `4px` | ✅ 全部统一 |
| `--space-sm` | `8px` | ✅ 全部统一 |
| `--space-md` | `16px` | ✅ 全部统一 |
| `--space-lg` | `24px` | ✅ 全部统一 |
| `--space-xl` | `32px` | ✅ 全部统一 |
| `--sidebar-width` | `56px` | ✅ 全部统一 |
| `--list-width` | `260px` | ✅ 全部统一 |
| `--error` | `#ba1a1a` | ✅ 全部统一 |

#### 组件样式（已统一）
- `.sidebar` 宽度：`56px` ✅
- `.sidebar-item` 尺寸：`48px × 48px` ✅（program.html 除外）
- `.sidebar-item` hover 过渡时间：`0.15s` ✅
- `.sidebar-item.active::before` 左侧指示条：宽 3px，高 24px，圆角 0 3px 3px 0 ✅
- `.list-panel` 宽度约束：`260px / 200px / 360px` ✅
- `.detail-panel` 使用 `flex: 1` 填充剩余空间 ✅
- `button` 过渡时间：`0.15s` ✅
- `.btn-filled` / `.btn-primary`：高度 `40px`，内边距 `0 24px`，圆角 `20px` ✅
- `.btn-filled:hover` 使用 `color-mix()` 颜色加深 ✅
- `input[type="range"]` 使用 `accent-color: var(--primary)` ✅
- 滚动条样式：`width: 6px`，`border-radius: 3px` ✅
- Modal 使用 `backdrop-filter: blur(20px)` ✅
- Modal 打开动画：`opacity + transform: scale()` ✅

---

### ❌ 不统一的项

#### 1. CSS 变量不统一

##### map.html 缺少变量
| 缺失变量 | 基准值 | 影响 |
|---------|--------|------|
| `--surface-container` | `#fef7ff` | 未定义但未使用 |
| `--surface-container-low` | `#f8f2ff` | 未定义但未使用 |
| `--on-error` | `#ffffff` | 未定义但未使用 |
| `--elevation-1` | 多层阴影 | 影响组件阴影一致性 |
| `--elevation-2` | 多层阴影 | 影响组件阴影一致性 |
| `--elevation-3` | 多层阴影 | 影响组件阴影一致性 |
| `--radius-full` | `9999px` | 未使用 |
| `--shadow-sm` | `rgba(0,0,0,0.12)` | map.html 中未使用 |
| `--shadow-md` | `rgba(0,0,0,0.15)` | map.html 中未使用 |
| `--shadow-lg` | `rgba(0,0,0,0.18)` | map.html 中未使用 |

##### program.html 缺少变量
| 缺失变量 | 基准值 |
|---------|--------|
| `--elevation-1` | 多层阴影 |
| `--elevation-2` | 多层阴影 |
| `--elevation-3` | 多层阴影 |
| `--radius-full` | `9999px` |

##### map.html 使用未定义变量
- `box-shadow: var(--shadow)` — 但 `var(--shadow)` 未在 `:root` 中定义（应为 `var(--shadow-md)`）

##### map.html `outline-variant` 值不同
- map.html: `--outline-variant: #e0e0e0`（浅灰）
- vehicle.html: `--outline-variant: #c5c5d0`（略深）
- 影响：边框颜色不一致

##### map.html `surface-variant` 值不同
- map.html: `--surface-variant: #f5f5f7`（偏蓝白）
- vehicle.html: `--surface-variant: #f5f5f5`（中性灰）
- 影响：整体背景色调不一致

##### program.html 变量名不标准
| program.html | 应改为 | 对应 vehicle.html |
|-------------|--------|-------------------|
| `--radius: 12px` | `--radius-sm` | `--radius-sm: 12px` ✅ |
| `--sidebar-w: 56px` | `--sidebar-width` | `--sidebar-width: 56px` ✅ |
| `--list-w: 260px` | `--list-width` | `--list-width: 260px` ✅ |

##### program.html `surface-variant` 不同
- program.html: `--surface-variant: #f5f5f7`
- vehicle.html: `--surface-variant: #f5f5f5`

##### program.html `body` 字体
- program.html: 硬编码 `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- vehicle.html: `var(--font)` → `'Roboto', 'Noto Sans SC', sans-serif`
- 影响：中文字体缺失

##### debug.html `outline-variant` 不同
- debug.html: `--outline-variant: #e0e0e0`
- vehicle.html: `--outline-variant: #c5c5d0`

##### debug.html `body` 字体
- debug.html: 硬编码 `'Roboto', 'Noto Sans SC', sans-serif`（直接写在 body）
- vehicle.html: `var(--font)` → `'Roboto', 'Noto Sans SC', sans-serif`

##### debug.html `topbar` 背景
- debug.html: `background: var(--surface-variant)`
- vehicle.html: `background: var(--surface)`
- 影响：顶部栏背景与 vehicle.html 不一致

##### debug.html 缺少按钮圆角变量
- debug.html: `--radius-btn: 20px`（独立变量）
- vehicle.html: 使用 `20px` 字面量

---

#### 2. 组件样式不统一

##### `.sidebar-item` 圆角
| 页面 | border-radius | 值 |
|------|--------------|-----|
| vehicle.html | `var(--radius-md)` | 20px ✅ |
| map.html | `var(--radius-md)` | 20px ✅（但用了同一变量名，所以没问题） |
| program.html | `10px` | 字面量 ❌ |
| debug.html | `var(--radius-sm)` / 12px | 字面量 ❌ |

**说明**：map.html 使用了与 vehicle.html 相同的 `var(--radius-md)`（20px），虽然 debug.html 用了 12px，但视觉上 10px/12px/20px 三者都不统一。**已修复 map.html 与 vehicle.html 统一为 20px。** program.html 和 debug.html 的 10px/12px 因结构差异较大暂不强制统一。

##### `.sidebar-item` 尺寸
| 页面 | 宽 | 高 |
|------|----|----|
| vehicle.html | 48px | 48px |
| program.html | 44px | 52px |

##### `.sidebar-item.active` 文字颜色
| 页面 | color | 背景 |
|------|-------|------|
| vehicle.html | `var(--on-primary-container)` | `var(--primary-container)` ✅ |
| debug.html | `var(--primary)` | `var(--primary-container)` ❌ |

debug.html 中文字颜色 `var(--primary)` 在蓝色背景 `#d4e3ff` 上对比度不足，应改为 `var(--on-primary-container)`。

##### `.list-item` 尺寸
| 页面 | padding | border-radius |
|------|---------|--------------|
| vehicle.html | 12px | `var(--radius-sm)` (12px) |
| program.html | 9px | 8px |
| debug.html | `var(--space-sm) var(--space-md)` (8px 16px) | `var(--radius-md)` (20px) |

三者差异较大，program.html 偏小，debug.html 偏大。

##### `.list-item.active` 样式
| 页面 | 背景 | 文字颜色 |
|------|------|---------|
| vehicle.html | `var(--primary-container)` | `var(--on-primary-container)` ✅ |
| program.html | `var(--primary-container)` | `var(--primary)` ❌ |
| debug.html | `var(--primary-container)` | 未设置（继承）❌ |

##### `.btn-outlined` 圆角
| 页面 | border-radius |
|------|--------------|
| vehicle.html | `20px`（字面量）|
| debug.html | `var(--radius-sm)` (12px) |

---

### 建议修复方案

#### 立即修复（已执行）

1. **map.html — 添加缺失的 CSS 变量**
   - 添加 `--surface-container`, `--on-error`, `--elevation-*`, `--radius-full`, `--shadow-*` 等缺失变量

2. **map.html — 修正 `outline-variant` 颜色**
   - `#e0e0e0` → `#c5c5d0`

3. **map.html — 修正 `surface-variant` 颜色**
   - `#f5f5f7` → `#f5f5f5`

4. **map.html — 替换 `var(--shadow)` 为标准阴影变量**
   - Modal 的 `box-shadow: var(--shadow)` → `box-shadow: var(--elevation-3)`

5. **debug.html — 修正 topbar 背景**
   - `background: var(--surface-variant)` → `background: var(--surface)`

6. **debug.html — 修正 `.sidebar-item.active` 文字颜色**
   - `color: var(--primary)` → `color: var(--on-primary-container)`

7. **program.html — 重命名非标准变量**
   - `--radius` → `--radius-sm`
   - `--sidebar-w` → `--sidebar-width`
   - `--list-w` → `--list-width`

8. **program.html — 添加缺失 CSS 变量**
   - 添加 `--elevation-1/2/3`, `--radius-full`

9. **program.html — body 字体使用 CSS 变量**
   - 硬编码字体栈 → `var(--font)`

10. **program.html — 修正 `surface-variant`**
    - `#f5f5f7` → `#f5f5f5`

11. **program.html — 修正 `.sidebar-item.active` 文字颜色**
    - `color: var(--primary)` → `color: var(--on-primary-container)`

12. **program.html — 修正 `.list-item.active` 文字颜色**
    - `color: var(--primary)` → `color: var(--on-primary-container)`

#### 后续建议（不强制）

1. **program.html `.sidebar-item` 尺寸**：当前 44×52px 与其他页面的 48×48px 不同，可考虑统一但非必须（program.html 布局差异较大）
2. **program.html `.list-item` padding**：当前 9px 偏小，建议统一为 12px
3. **program.html `.list-item` border-radius**：当前 8px，建议与 vehicle.html 统一为 12px
4. **debug.html `.btn-outlined` border-radius**：当前 12px，建议统一为 20px
5. **debug.html `.list-header` padding**：当前 padding 值略有不同，建议统一为 `16px`

---

## 修复执行记录

| 文件 | 修复项 | 状态 |
|------|--------|------|
| map.html | 添加缺失 CSS 变量（elevation-1/2/3, surface-container, surface-container-low, on-error, radius-full, space-xs/sm/md, shadow-sm/md/lg） | ✅ 已修复 |
| map.html | 修正 `outline-variant: #e0e0e0` → `#c5c5d0` | ✅ 已修复 |
| map.html | 修正 `surface-variant: #f5f5f7` → `#f5f5f5` | ✅ 已修复 |
| map.html | `box-shadow: var(--shadow)` → `box-shadow: var(--elevation-3)`（原 var(--shadow) 未定义） | ✅ 已修复 |
| map.html | `.sidebar-item.active { color: var(--primary) }` → `var(--on-primary-container)` | ✅ 已修复 |
| debug.html | topbar `background: var(--surface-variant)` → `var(--surface)` | ✅ 已修复 |
| debug.html | `.sidebar-item.active .sidebar-label { color: var(--primary) }` → `var(--on-primary-container)` | ✅ 已修复 |
| debug.html | `--outline-variant: #e0e0e0` → `#c5c5d0` | ✅ 已修复 |
| debug.html | body font 硬编码 → `var(--font)` | ✅ 已修复 |
| debug.html | 添加 `--font: 'Roboto', 'Noto Sans SC', sans-serif` 到 :root | ✅ 已修复 |
| program.html | `--radius` → `--radius-sm` | ✅ 已修复 |
| program.html | 添加 `--radius-md`, `--radius-full`, `--list-width` | ✅ 已修复 |
| program.html | `--sidebar-w` → `--sidebar-width` | ✅ 已修复 |
| program.html | `--list-w` → `--list-width` | ✅ 已修复 |
| program.html | 添加 `--elevation-1/2/3`, `--surface-container`, `--surface-container-low` | ✅ 已修复 |
| program.html | 移除孤立的 `--shadow` 变量（3处 `box-shadow: var(--shadow)` → `box-shadow: var(--elevation-3)`） | ✅ 已修复 |
| program.html | `surface-variant: #f5f5f7` → `#f5f5f5` | ✅ 已修复 |
| program.html | body 字体硬编码 → `var(--font)` | ✅ 已修复 |
| program.html | 添加 `--outline-variant: #c5c5d0` 和 `--on-error: #ffffff` | ✅ 已修复 |
| program.html | `.sidebar-item.active { color: var(--primary) }` → `var(--on-primary-container)` | ✅ 已修复 |
| program.html | `.list-item.active { color: var(--primary) }` → `var(--on-primary-container)` | ✅ 已修复 |

---

*检测基于 vehicle.html 作为基准文件（它是第一个被 PWA 改造的页面）。*
