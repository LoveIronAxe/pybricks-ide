# Material Symbols 图标系统

## 1. Material Symbols vs Material Icons

| 对比项 | Material Symbols（新） | Material Icons（旧） |
|--------|----------------------|---------------------|
| 名称 | Material Symbols | Material Icons |
| 发布时间 | 2022 年 | 2014 年 |
| 特性 | 支持可变字体（权重/填充度/等级可调） | 静态图标，权重固定 |
| 样式变体 | outlined / rounded / filled / sharp | outlined / round / filled |
| 引入方式 | Google Fonts API | Google Fonts API / NPM |
| 图标数量 | 约 2,000+ | 约 9,000+（更多选择） |
| 推荐场景 | 新项目、追求 MD3 一致性 | 需要更多图标选择时 |

**本项目 IDE 推荐使用 Material Symbols**（与 MD3 设计语言保持一致）。

---

## 2. 官方 CDN 引入方式

```html
<!-- Material Symbols (推荐) -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded&display=swap" rel="stylesheet" />

<!-- 也可引入所有样式变体 -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Filled:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" rel="stylesheet" />
```

**`display=swap`** 必须添加，避免字体加载时文字闪烁（FOIT）。

---

## 3. 图标样式变体

| 变体 | CSS 类名后缀 | 说明 |
|------|-------------|------|
| Outlined | `material-symbols-outlined` | 线框风格，描边图标 |
| Rounded | `material-symbols-rounded` | 圆角风格（MD3 默认） |
| Filled | `material-symbols-filled` | 填充风格 |
| Sharp | `material-symbols-sharp` | 锐利风格，直角 |

### 完整 HTML 使用示例

```html
<!-- 基础用法 -->
<span class="material-symbols-rounded">home</span>

<!-- 指定字号 -->
<span class="material-symbols-rounded" style="font-size: 24px;">home</span>

<!-- 使用 CSS 类控制尺寸（推荐） -->
<span class="material-symbols-rounded md-24">home</span>
```

### 可变字体参数（Material Symbols 独有）

```html
<!-- opsz: 光学尺寸，wght: 字重，FILL: 填充度，GRAD: 等级 -->
<span class="material-symbols-rounded"
      style="font-variation-settings: 'opsz' 24, 'wght' 400, 'FILL' 0, 'GRAD' 0;">
  home
</span>
```

| 参数 | 范围 | 说明 |
|------|------|------|
| `opsz` | 20–48 | 光学尺寸，应与实际显示尺寸匹配 |
| `wght` | 100–700 | 字重 |
| `FILL` | 0–1 | 填充度（0=线框，1=填充） |
| `GRAD` | -50–200 | 等级（粗细微调） |

---

## 4. 图标尺寸规范

MD3 图标尺寸分为 5 档：

| 尺寸 | CSS 类名 | 适用场景 |
|------|---------|---------|
| 18dp | `md-18` | 次要操作、辅助文字旁 |
| 20dp | `md-20` | 列表项次要操作 |
| 24dp | `md-24` | 标准图标（默认） |
| 36dp | `md-36` | 强调图标 |
| 48dp | `md-48` | 大尺寸展示 |

```css
/* 尺寸 CSS 定义 */
.md-18 { font-size: 18px !important; width: 18px; height: 18px; }
.md-20 { font-size: 20px !important; width: 20px; height: 20px; }
.md-24 { font-size: 24px !important; width: 24px; height: 24px; }
.md-36 { font-size: 36px !important; width: 36px; height: 36px; }
.md-48 { font-size: 48px !important; width: 48px; height: 48px; }
```

> 注意：Material Symbols 是基于 rem/px 的矢量字体，`font-size` 即决定实际显示大小。

---

## 5. 本项目 IDE 需要的图标清单

### 5.1 侧边栏导航图标

| 功能 | 推荐图标名 | 样式 | 备注 |
|------|----------|------|------|
| 车辆/硬件 | `directions_car` | Rounded | 硬件设备列表 |
| 地图/场景 | `map` | Rounded | 地图/场景编辑 |
| 程序/脚本 | `description` | Rounded | 程序脚本管理 |
| 调试/终端 | `build` | Rounded | 调试工具 |

```html
<!-- 侧边栏图标示例 -->
<span class="material-symbols-rounded md-24">directions_car</span>
<span class="material-symbols-rounded md-24">map</span>
<span class="material-symbols-rounded md-24">description</span>
<span class="material-symbols-rounded md-24">build</span>
```

### 5.2 列表操作图标

| 功能 | 推荐图标名 | 样式 |
|------|----------|------|
| 新增/添加 | `add` | Rounded |
| 关闭 | `close` | Rounded |
| 删除 | `delete` | Rounded |
| 编辑 | `edit` | Rounded |
| 复制 | `content_copy` | Rounded |
| 更多菜单 | `more_vert` | Rounded |

### 5.3 状态指示图标

| 功能 | 推荐图标名 | 样式 |
|------|----------|------|
| 成功 | `check_circle` | Rounded |
| 错误 | `error` | Rounded |
| 警告 | `warning` | Rounded |
| 信息 | `info` | Rounded |
| 运行中 | `play_arrow` | Rounded |
| 停止 | `stop` | Rounded |

### 5.4 设备类图标（电机、传感器）

对于电机、传感器等硬件图标，Material Symbols 覆盖有限，推荐策略：

| 类型 | 替代方案 | 说明 |
|------|---------|------|
| 电机 | `settings_input_component` / `motor` | 电机/驱动模块 |
| 传感器 | `sensors` | 传感器总览 |
| 颜色传感器 | `palette` | 颜色相关 |
| 陀螺仪 | `3d_rotation` | 姿态/惯性 |
| 触碰 | `touch_app` | 触碰检测 |
| LED | `lightbulb` | 灯光/LED |
| 电池/电量 | `battery_full` / `battery_charging_full` | 电源状态 |
| 蓝牙连接 | `bluetooth` | 无线连接 |
| USB 连接 | `usb` | 有线连接 |
| 下载/上传 | `download` / `upload` | 固件烧录 |

> **建议**：如果以上图标仍不满足需求，可在图标下方叠加文字标签（如 "Motor A"），减少图标歧义。

---

## 6. CSS 类名规范

### 6.1 基础样式

```css
/* 图标字体基础样式 */
.material-symbols-rounded {
  font-family: 'Material Symbols Rounded';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  /* 支持图标的颜色、阴影等 */
  -webkit-font-feature-settings: 'liga';
  font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
  /* 允许选择/复制（可选） */
  user-select: none;
}
```

### 6.2 交互状态

```css
/* 可点击图标 */
.material-symbols-rounded.icon-btn {
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: background-color 200ms ease, color 200ms ease;
}

.material-symbols-rounded.icon-btn:hover {
  background-color: rgba(0, 0, 0, 0.08); /* MD3 hover state */
}

.material-symbols-rounded.icon-btn:active {
  background-color: rgba(0, 0, 0, 0.12); /* MD3 pressed state */
}

/* 禁用状态 */
.material-symbols-rounded.icon-btn:disabled {
  opacity: 0.38;
  cursor: not-allowed;
}
```

### 6.3 图标 + 文字 组合

```css
/* 图标与文字水平排列 */
.icon-with-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.icon-with-label .material-symbols-rounded {
  flex-shrink: 0;
}
```

### 6.4 图标尺寸快捷类

```css
/* 与 MD3 规范一致的 5 档尺寸 */
.material-symbols-rounded.md-18 { font-size: 18px; }
.material-symbols-rounded.md-20 { font-size: 20px; }
.material-symbols-rounded.md-24 { font-size: 24px; }
.material-symbols-rounded.md-36 { font-size: 36px; }
.material-symbols-rounded.md-48 { font-size: 48px; }

/* 侧边栏图标尺寸（推荐 24dp） */
.sidebar .material-symbols-rounded { font-size: 24px; }

/* 列表操作图标尺寸（推荐 20dp） */
.list-action .material-symbols-rounded { font-size: 20px; }
```

### 6.5 颜色规范

```css
/* 默认颜色（MD3 on-surface） */
.material-symbols-rounded { color: rgba(0, 0, 0, 0.87); }

/* 次要颜色（MD3 on-surface-variant） */
.material-symbols-rounded.secondary { color: rgba(0, 0, 0, 0.6); }

/* 禁用颜色 */
.material-symbols-rounded.disabled { color: rgba(0, 0, 0, 0.38); }

/* 主题色 */
.material-symbols-rounded.primary { color: #6750A4; /* MD3 primary */ }

/* 暗色模式适配 */
@media (prefers-color-scheme: dark) {
  .material-symbols-rounded { color: rgba(255, 255, 255, 0.87); }
  .material-symbols-rounded.secondary { color: rgba(255, 255, 255, 0.6); }
  .material-symbols-rounded.disabled { color: rgba(255, 255, 255, 0.38); }
}
```

---

## 7. 常见问题

### Q: 图标不显示怎么办？

1. 检查 Google Fonts CDN 链接是否正确
2. 确认网络可以访问 `fonts.googleapis.com`
3. 确认类名拼写正确（`material-symbols-rounded` 不是 `material-symbols-rounded`）
4. 确认浏览器控制台无 CORS 错误

### Q: 如何离线使用？

1. 将 Google Fonts 的 CSS 和 WOFF2 文件下载到本地
2. 修改 `@font-face` 的 `src` 指向本地路径
3. 建议使用 Fontsource NPM 包：
   ```bash
   npm install @fontsource/material-symbols-rounded
   ```

### Q: 图标名称怎么查？

访问 [Material Symbols 预览页](https://fonts.google.com/icons) 或 [Google Fonts Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols)。
