# UI检查报告 — 问题清单

检查时间：2026-04-28

---

## 一、vehicle.html 问题

### 1. CSS变量
- **缺失变量**：`--surface-container` 和 `--surface-container-low` 在此文件中未定义，而 map.html 和 debug.html 中有定义（`--surface-container: #fef7ff; --surface-container-low: #f8f2ff;`）
- **超纲变量**：额外定义了 `--radius-full`、`--elevation-1/2/3`、`--shadow-sm/md/lg`，其他文件未使用，不影响功能但增加冗余

### 2. 侧边栏宽度
- ✅ 宽度为 `56px`，图标 `48x48`，使用了 `--radius-md` (20px) 圆角
- 间距为 `4px`，使用了 `font-size: 10px`

### 3. 弹窗样式
- ✅ 使用了 `var(--radius-xl)` = 28px
- ✅ 使用了 `backdrop-filter: blur(20px)`

### 4. 按钮样式
- ✅ 主按钮 `.btn-filled`：背景 `var(--primary)` (#0071e3)，文字 `var(--on-primary)` (白色)，`border-radius: 20px`
- ✅ 次按钮 `.btn-outlined`：边框 `1px solid var(--outline)`，透明背景，`border-radius: 20px`
- ✅ 导出按钮 `.btn-export`：背景 `var(--primary)`，圆角 `20px`

### 5. 右上角导出按钮
- ✅ 有 "📥 一键导出Python" 按钮，位于 topbar

### 6. localStorage键名
- ✅ 使用 `pybricks_vehicles` 和 `pybricks_activeVehicleId`

### 7. HTML语法问题
- ⚠️ **严重问题**：文件末尾在 `</body></html>` 之后，又出现了第二份 HTML 文档结构（从 `<!DOCTYPE html>` 到 `</html>`），包含 map.html 的完整内容。这是**重复文档**，属于严重HTML结构错误，会导致浏览器解析混乱

### 8. Pybricks代码块检查（不适用）
- vehicle.html 无代码块功能，跳过

---

## 二、map.html 问题

### 1. CSS变量
- ⚠️ **缺失变量**：定义了 `--surface-container` 等，但与 vehicle.html 相比，`--surface-container` 和 `--surface-container-low` 在此文件中**未定义**
- **命名差异**：`--outline-variant: #e0e0e0`（vehicle 为 `#c5c5d0`，debug 为 `#e0e0e0`）——三者不统一
- **缺失变量**：`--surface-container`、`--surface-container-low` 在 vehicle 和 debug 中有，map 中无

### 2. 侧边栏宽度
- ✅ 宽度为 `56px`，图标 `22px`，标签 `font-size: 9px`（vehicle 为 10px）
- ⚠️ **不一致**：标签字体大小为 9px，而 vehicle 为 10px

### 3. 弹窗样式
- ✅ 使用了 `var(--radius-xl)` = 28px
- ✅ 使用了 `backdrop-filter: blur(20px)`
- ⚠️ **缺失**：`--radius-xl` 定义了但弹窗用的是 `var(--radius-lg)`（同为28px），变量使用混乱但效果正确

### 4. 按钮样式
- ✅ `.btn-filled`：背景 `var(--primary)`，圆角 `20px`
- ✅ `.btn-outlined`：边框透明背景，圆角 `20px`
- ⚠️ **btn-add 样式不一致**：map 的 `btn-add` 使用 `background: var(--primary)`（蓝色圆形），而 vehicle 的 `btn-add` 使用透明背景圆形按钮

### 5. 右上角导出按钮
- ❌ **没有导出按钮**。map 页面无 topbar，仅有 list-panel 和 editor-area，无导出 Python 功能（但地图编辑器开发中，可接受）

### 6. localStorage键名
- ⚠️ **命名不一致**：使用 `pybricks_maps`（全小写无下划线分隔），而 vehicle 用 `pybricks_vehicles`（有下划线），program 用 `pybricks_programs`（有下划线）。建议统一为 `pybricks_maps`

### 7. HTML语法问题
- ⚠️ vehicle.html 文件末尾包含完整 map.html 文档内容，导致 vehicle.html 实际上是两个 HTML 文档合并在一起。map.html 本身作为独立文件结构正确

---

## 三、program.html 问题

### 1. CSS变量
- ❌ **完全不同的设计系统**：program.html 使用了自己的一套 CSS 变量：
  - `--bg: #ffffff`（vehicle/map/debug 用 `--surface`）
  - `--text: #1d1d1f`（vehicle/map/debug 用 `--on-surface`）
  - `--border: #d2d2d7`（vehicle/map/debug 用 `--outline`）
  - `--bg-secondary: #f5f5f7`（vehicle/map/debug 用 `--surface-variant`）
  - 无 `--surface-container` 系列变量
- **额外变量**：`--primary-light`、`--primary-dark`、`--bg-tertiary`、`--text-secondary`、`--palette-w`、`--list-w` 等其他文件均无
- 这是**严重的不一致问题**

### 2. 侧边栏宽度
- ⚠️ **宽度不一致**：program.html 的 `.sidebar-item` 宽度为 `44px`（其他文件为 `48px`）
- ⚠️ **高度不一致**：program.html 的 `.sidebar-item` 高度为 `52px`（其他文件为 `48px`）
- ✅ 宽度整体 `56px` 保持一致

### 3. 弹窗样式
- ✅ `border-radius: var(--radius-lg)` = 28px
- ✅ `backdrop-filter: blur(20px)`

### 4. 按钮样式
- ✅ `.btn-primary`：背景 `#0071e3`，白色文字，`border-radius: 20px`
- ✅ `.btn-cancel`：边框样式，透明背景

### 5. 右上角导出按钮
- ✅ 有 "📥 导出 Python" 按钮，位于 detail-toolbar

### 6. localStorage键名
- ✅ 使用 `pybricks_programs` 和 `pybricks_activeProgramId`

### 7. HTML语法问题
- ✅ 文件结构完整，无明显语法错误

### 8. Pybricks代码块检查（program.html）
- **潜在XSS风险**：`renderBlockHTML` 中使用字符串拼接将 block label 插入 innerHTML，如果 block label 包含恶意 `<script>` 标签，可能执行。建议使用 `textContent` 或对 label 进行 HTML 转义（文件中已有 `escHtml` 工具函数但未用于 block label）
- ⚠️ 部分代码块生成了非标准 Pybricks API 调用，需要人工核对：
  - `motor_run_time` → `motor_a.run_time(...)` 等（方法名正确，但变量名生成方式需确认）
  - `hub_imu_up()` → Pybricks 实际 API 为 `hub.imu.up()` ✅ 正确
  - `hub_imu_tilt()` → Pybricks 实际 API 为 `hub.imu.tilt()` ✅ 正确
  - `hub_imu_heading()` → `imu.heading()` ✅ 正确
  - `hub_battery_voltage()` → `hub.battery.voltage()` ✅ 正确
  - ⚠️ `hub_speaker_beep()` → 生成 `hub.speaker.beep(...)` ✅
  - ⚠️ `hub_speaker_notes()` → 生成 `hub.speaker.play_notes(...)` ✅
  - ⚠️ `hub_display_pixel()` → `hub.display.pixel(...)` ✅
  - ⚠️ `hub_display_number()` → `hub.display.number(...)` ✅
  - ⚠️ `hub_display_char()` → `hub.display.char(...)` ✅
  - ⚠️ `hub_display_text()` → `hub.display.text(...)` ✅
  - ⚠️ `hub_display_off()` → `hub.display.off()` ✅
  - ⚠️ `hub_light_on()` → `hub.light.on(...)` ✅
  - ⚠️ `hub_light_off()` → `hub.light.off()` ✅
  - ⚠️ `hub_light_blink()` → `hub.light.blink(...)` ✅
  - ⚠️ `hub_buttons()` → `hub.buttons.pressed()` ✅
  - ⚠️ `hub_system_shutdown()` → `hub.system.shutdown()` ✅
  - ⚠️ `tool_stopwatch` → `stopwatch_time()` — **Pybricks 无此函数**，应使用 `StopWatch` 类
  - ⚠️ `cs_color/cs_reflection/cs_rgb/cs_hsv` 生成 `cs_port.color()` — 需确认 ColorSensor 实例变量命名约定

---

## 四、debug.html 问题

### 1. CSS变量
- ✅ 使用了与 vehicle.html 相似的 Material Design 设计系统变量
- ⚠️ `--outline-variant: #e0e0e0`（vehicle 为 `#c5c5d0`）——**不一致**

### 2. 侧边栏宽度
- ✅ 宽度为 `56px`，sidebar-item `48x48`
- ✅ 使用 `font-size: 10px`（与 vehicle 一致）

### 3. 弹窗样式
- ✅ `border-radius: var(--radius-lg)` = 28px
- ✅ `backdrop-filter: blur(20px)`

### 4. 按钮样式
- ✅ `.btn-primary`：背景 `var(--primary)`，圆角 `var(--radius-btn)` = 20px
- ✅ `.btn-outlined`：边框透明背景

### 5. 右上角导出按钮
- ✅ 有 "📥 一键导出 Python" 按钮

### 6. localStorage键名
- ✅ 使用 `pybricks_debugSessions`
- ⚠️ `loadState()` 中读取 `pybricks_settings`（未在 vehicle/program 中出现）

### 7. HTML语法问题
- ✅ 文件结构完整，无明显语法错误
- ⚠️ **导出Python硬编码**：`exportPython()` 函数生成的是硬编码的示例 Python 代码，未读取 vehicle 页面配置的实际数据（如电机端口、轮组参数等），与 vehicle.html 的 `exportPython()` 实现不一致

---

## 五、跨文件一致性问题汇总

| 项目 | vehicle | map | program | debug |
|------|---------|-----|---------|-------|
| CSS变量设计系统 | Material Design | Material Design | 自定义系统 | Material Design |
| CSS变量--primary | ✅ #0071e3 | ✅ #0071e3 | ✅ #0071e3 | ✅ #0071e3 |
| CSS变量--surface-container | ❌ 未定义 | ❌ 未定义 | ❌ 不存在 | ✅ #fef7ff |
| CSS变量--outline-variant | #c5c5d0 | #e0e0e0 | 不适用(border) | #e0e0e0 |
| 侧边栏宽度 | ✅ 56px | ✅ 56px | ✅ 56px | ✅ 56px |
| 侧边栏item尺寸 | 48x48 | 48x48 | ⚠️ 44x52 | 48x48 |
| 侧边栏标签字号 | 10px | ⚠️ 9px | 无标签 | 10px |
| 弹窗圆角 | ✅ 28px | ✅ 28px | ✅ 28px | ✅ 28px |
| 弹窗backdrop-filter | ✅ blur(20px) | ✅ blur(20px) | ✅ blur(20px) | ✅ blur(20px) |
| 主按钮圆角 | ✅ 20px | ✅ 20px | ✅ 20px | ✅ 20px |
| 导出按钮 | ✅ 有 | ❌ 无（开发中） | ✅ 有 | ✅ 有 |
| localStorage键名风格 | pybricks_vehicles | ⚠️ pybricks_maps（全小写） | pybricks_programs | pybricks_debugSessions |
| HTML结构问题 | ❌ 末尾有重复文档 | ⚠️ vehicle.html 包含它 | ✅ 正常 | ✅ 正常 |
| btn-add按钮样式 | 透明背景圆形 | ⚠️ 蓝色背景圆形 | 蓝色背景 | 无btn-add |

---

## 六、问题文件地址

所有问题文件的路径：
- `/home/simonljt/.openclaw/workspace-lobster5/pybricks_docs/IDE/pages/vehicle.html`
- `/home/simonljt/.openclaw/workspace-lobster5/pybricks_docs/IDE/pages/map.html`
- `/home/simonljt/.openclaw/workspace-lobster5/pybricks_docs/IDE/pages/program.html`
- `/home/simonljt/.openclaw/workspace-lobster5/pybricks_docs/IDE/pages/debug.html`

---

## 七、问题严重程度排序

### 🔴 严重（必须修复）
1. **vehicle.html 末尾有重复HTML文档** — 会导致浏览器解析混乱，是最严重的问题
2. **program.html 使用完全不同的CSS设计系统** — 与其他三个文件视觉一致性极差
3. **program.html sidebar-item 尺寸(44x52)与其他文件(48x48)不一致**

### 🟡 中等（建议修复）
4. map.html `btn-add` 使用蓝色背景，与 vehicle 的透明背景不一致
5. `--outline-variant` 颜色值不统一（vehicle=#c5c5d0，map/debug=#e0e0e0）
6. localStorage 键名风格不统一（map 用全小写 `pybricks_maps`，其他用 snake_case）
7. `--surface-container`/`--surface-container-low` 在 vehicle/map/program 中缺失，只在 debug 中有
8. 侧边栏标签字号 map 为 9px，其他为 10px

### 🟢 低（可接受）
9. map.html 无导出按钮（地图编辑器开发中，可接受）
10. debug.html `exportPython()` 使用硬编码代码（未读取实际配置）
11. program.html `tool_stopwatch` 生成非标准 Pybricks API
