# Prime Hub 外观规格说明书 — HTML/CSS 实现参考

> 本文档整理 LEGO SPIKE Prime Hub 的外观尺寸、端口布局、设备类型，用于在 IDE 页面中用 HTML/CSS 精确复刻 Hub 外观。
>
> **参考来源**：pybricks v3.6.1 官方文档 + pybricks_docs/ 项目代码。

---

## 1. Prime Hub 整体尺寸

### 实物尺寸（参考值）

| 维度 | 数值 | 说明 |
|------|------|------|
| 宽度（X） | **102 mm** | 含端口凸出部分 |
| 深度（Y） | **82 mm** | 含端口凸出部分 |
| 高度（Z） | **约 35 mm** | 不含端口高度 |

> **IDE 缩放比例**：由于 102×82mm 比例在 IDE 卡片中展示过大，建议 CSS 中以 **204×164px**（2x 缩放）为基准，按 `width: 204px; height: 164px` 渲染 Hub 主体。实际比例 = 102:82 ≈ **5:4**（宽:高）。

### 主体形状

- 主体为**圆角矩形**（LEGO 经典蓝色 #0202F0 或深蓝色 #1B3B9F）
- 顶面有轻微弧度（四角圆润，`border-radius: 20px` 级别）
- 材质：ABS 塑料质感，可用 `background: linear-gradient(145deg, #2B4DB0, #152E7A)` 模拟

---

## 2. 端口布局（俯视图）

### 端口排列（顺时针，从顶部看）

```
        ┌─────────────────────────────────────┐
        │          [LEFT] [RIGHT]              │  ← 顶部：按钮
        │           [CENTER]  [BT]             │  ← 按钮区域
        │                                     │
        │     A │                        │ B  │  ← 左右两侧端口
        │        │                        │    │
        │        │     ┌───────┐         │    │
        │        │     │ 5×5   │         │    │
        │        │     │ 点阵屏 │         │    │
        │        │     └───────┘         │    │
        │     C │          🔴LED         │ D  │  ← 端口 + 中心 LED
        │                                     │
        │         [E]              [F]        │  ← 底部：传感器端口
        └─────────────────────────────────────┘
```

### 端口详细位置

| 端口 | 位置 | 方向 | 类型 |
|------|------|------|------|
| **A** | 左侧中部 | 左侧凸出 | 电机/设备 |
| **B** | 右侧中部 | 右侧凸出 | 电机/设备 |
| **C** | 左下角 | 左侧下凸出 | 电机/设备 |
| **D** | 右下角 | 右侧下凸出 | 电机/设备 |
| **E** | 底部左侧 | 下方凸出 | 传感器 |
| **F** | 底部右侧 | 下方凸出 | 传感器 |

### 端口外观

- 每个端口为**凸出的小长方形**（LEGO 接口标准）
- 尺寸：约 **12mm × 8mm**（实物），CSS 中约 **14px × 8px**
- 端口内有一个**小凹槽**（用来卡住线缆）
- 未连接时显示为**深色凹槽** `#1a1a1a`
- 已连接时显示为**浅色插头** `#888`

### 端口 CSS 定位参考

```css
/* Hub 主体容器（基准尺寸 204×164px = 102×82mm 的 2x 缩放） */
.hub-body {
  position: relative;
  width: 204px;
  height: 164px;
  background: linear-gradient(145deg, #2B4DB0, #152E7A);
  border-radius: 22px;  /* 圆角，与实物圆润度匹配 */
  /* 其他样式... */
}

/* 端口基础样式 */
.port {
  position: absolute;
  width: 14px;
  height: 8px;
  background: #1a1a1a;  /* 凹槽深色 */
  border-radius: 2px;
  border: 1px solid #0a0a0a;
}

/* 端口定位（以 Hub 中心为基准的偏移量） */
.port-A { left: -10px; top: 65px; }   /* 左侧中部 */
.port-B { right: -10px; top: 65px; }  /* 右侧中部 */
.port-C { left: -10px; top: 140px; }  /* 左下 */
.port-D { right: -10px; top: 140px; } /* 右下 */
.port-E { left: 40px; bottom: -8px; } /* 底部左 */
.port-F { right: 40px; bottom: -8px; } /* 底部右 */

/* 已连接状态 */
.port.connected {
  background: #888;
  border-color: #666;
}
```

### 端口标签

- 每个端口旁边有**字母标签**（A/B/C/D/E/F）
- 标签字体：`font-size: 9px; font-weight: bold; color: #aaa`
- 标签位置：紧邻端口外侧

---

## 3. 5×5 点阵显示屏

### 规格

| 属性 | 数值 |
|------|------|
| 尺寸 | **5×5 像素点阵** |
| 像素形状 | 圆形（直径约 2mm） |
| 像素间距 | 约 1mm |
| 显示内容 | 数字(0-99)、字母、图标(Icon)、自定义像素 |
| 颜色 | 橙红色（#FF5500 级别） |
| 单像素亮度 | 0-100%（ brightness 参数）|

### 像素坐标系统

```python
# Pybricks API 中的坐标（0-indexed）
display.pixel(row, column, brightness=100)
# row: 0 = 顶部，4 = 底部
# column: 0 = 左，4 = 右
```

### HTML/CSS 实现思路

```css
/* 显示屏容器 */
.display-screen {
  position: absolute;
  top: 55px;      /* 偏上，顶部留给按钮 */
  left: 50%;
  transform: translateX(-50%);
  width: 78px;    /* 5个像素点 + 4个间距 */
  height: 78px;
  display: grid;
  grid-template-columns: repeat(5, 12px);
  grid-template-rows: repeat(5, 12px);
  gap: 4px;       /* 像素间距约 1mm */
  padding: 8px;
  background: #111; /* 深色背景，模拟显示屏 */
  border-radius: 8px;
  border: 1px solid #333;
}

/* 单个像素点 */
.pixel {
  width: 12px;
  height: 12px;
  border-radius: 50%;  /* 圆形像素 */
  background: #331100; /* 关闭状态：几乎不发光 */
  transition: background 0.05s, box-shadow 0.05s;
}

/* 像素点亮状态（示例：橙红色） */
.pixel.on {
  background: #FF6600;
  box-shadow: 0 0 6px 2px rgba(255, 100, 0, 0.8); /* 发光效果 */
}

/* 亮度级别（可用 opacity 或 filter 模拟） */
.pixel.b-75 { opacity: 0.75; }
.pixel.b-50 { opacity: 0.50; }
.pixel.b-25 { opacity: 0.25; }
```

---

## 4. 按钮布局

### Prime Hub 按钮（共 4 个）

| 按钮 | 位置（顶面视角） | 功能 | Pybricks Button |
|------|----------------|------|-----------------|
| **LEFT** | 顶面左侧 | 左方向/选择 | `Button.LEFT` |
| **RIGHT** | 顶面右侧 | 右方向/选择 | `Button.RIGHT` |
| **CENTER** | 顶面中央偏下 | 确认/停止 | `Button.CENTER` |
| **BLUETOOTH** | 顶面右下角（蓝底图标） | 蓝牙配对 | `Button.BLUETOOTH` |

### 按钮布局位置（CSS 定位参考）

```css
/* Hub 顶面区域（Y 轴较小的一侧为"顶部"） */
.hub-top-area {
  position: absolute;
  top: 12px;   /* 距顶边约 12px */
  left: 0;
  right: 0;
  display: flex;
  justify-content: center; /* 按钮组居中 */
  gap: 24px;   /* LEFT 和 RIGHT 间距 */
}

/* LEFT / RIGHT 按钮 */
.btn-left, .btn-right {
  width: 36px;
  height: 14px;
  background: #ddd;
  border-radius: 7px; /* 胶囊形 */
  border: 1px solid #bbb;
  cursor: pointer;
}

/* CENTER 按钮 */
.btn-center {
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 28px;
  height: 28px;
  border-radius: 50%; /* 圆形 */
  background: #ddd;
  border: 1px solid #bbb;
}

/* BLUETOOTH 按钮 */
.btn-bluetooth {
  position: absolute;
  top: 18px;
  right: 18px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #e0e0e0;
  border: 1px solid #bbb;
  font-size: 9px; /* 蓝牙图标 */
}
```

---

## 5. 状态 LED 指示灯

### LED 位置与功能

| LED | 位置 | 颜色 | 功能 |
|-----|------|------|------|
| **状态灯** | Hub 正面/中心下方 | 红/绿/蓝/黄等 | 程序运行状态、充电状态 |
| **充电指示灯** | USB 口旁边 | 红（充电中）/绿（充满）/黄（故障）| 充电状态 |

### CSS 发光效果

```css
/* 状态 LED 基础 */
.status-led {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #333; /* 熄灭状态 */
  transition: background 0.3s, box-shadow 0.3s;
}

/* 红色点亮 */
.status-led.red.on {
  background: #ff0000;
  box-shadow: 0 0 8px 3px rgba(255, 0, 0, 0.7);
}

/* 绿色点亮 */
.status-led.green.on {
  background: #00ff00;
  box-shadow: 0 0 8px 3px rgba(0, 255, 0, 0.7);
}

/* 蓝色点亮（蓝牙） */
.status-led.blue.on {
  background: #0071e3;
  box-shadow: 0 0 8px 3px rgba(0, 113, 227, 0.7);
}

/* 呼吸灯动画（用于 blink/animate） */
@keyframes led-blink {
  0%, 100% { opacity: 1; box-shadow: 0 0 8px 3px currentColor; }
  50% { opacity: 0.2; box-shadow: none; }
}

.status-led.blinking {
  animation: led-blink 1s infinite;
}

/* 多色呼吸灯 */
@keyframes led-cycle {
  0%   { background: #ff0000; box-shadow: 0 0 8px 3px rgba(255,0,0,0.7); }
  33%  { background: #00ff00; box-shadow: 0 0 8px 3px rgba(0,255,0,0.7); }
  66%  { background: #0071e3; box-shadow: 0 0 8px 3px rgba(0,113,227,0.7); }
  100% { background: #ff0000; box-shadow: 0 0 8px 3px rgba(255,0,0,0.7); }
}
```

---

## 6. 接口设备类型与 Emoji 映射

### 设备完整列表

| 设备类型 | 类名 (Pybricks) | Emoji | 可用端口 | 说明 |
|---------|----------------|-------|---------|------|
| 中型电机 | `Motor` (pupdevices) | ⚙️ | A/B/C/D | 差速驱动、机构驱动 |
| 大型电机 | `Motor` (technic) | ⚙️+ | A/B/C/D | 高扭矩输出 |
| 颜色传感器 | `ColorSensor` | 🔴 | E/F | 巡线、颜色识别 |
| 颜色距离传感器 | `ColorLightMatrix` | 📏 | E/F | 距离+颜色 |
| 力传感器 | `ForceSensor` | 🔲 | A/B/C/D | 力检测、碰撞检测 |
| 超声波传感器 | `UltrasonicSensor` | 📡 | E/F | 距离测量 |
| 红外传感器 | `InfraredSensor` | 📶 | E/F | 遥控信号接收 |
| 倾斜传感器 | `TiltSensor` | 📐 | E/F | 角度检测 |
| 遥控器 | `RemoteControl` | 🎮 | — | 无线遥控 |
| 叉子设备 | (自定义) | 🍴 | — | 陛下机器车专用 |
| 钳子设备 | (自定义) | ✋ | — | 陛下机器车专用 |
| DC 电机 | `DCMotor` | ⚡ | A/B/C/D | 简单电机控制 |
| PF 电机 | `PFMotor` | 🔋 | A/B/C/D | Power Functions 电机 |

### Emoji 映射表（代码中可直接使用）

```javascript
const DEVICE_EMOJI_MAP = {
  'Motor (Medium)': '⚙️',
  'Motor (Technic Large)': '⚙️➕',
  'ColorSensor': '🔴',
  'ColorLightMatrix': '📏',
  'ForceSensor': '🔲',
  'UltrasonicSensor': '📡',
  'InfraredSensor': '📶',
  'TiltSensor': '📐',
  'RemoteControl': '🎮',
  'DCMotor': '⚡',
  'PFMotor': '🔋',
  //陛下自定义设备
  'Fork (叉子)': '🍴',
  'Claw (钳子)': '✋',
};
```

### 端口类型约束

```
电机端口（A/B/C/D）→ 可连接：Motor, DCMotor, PFMotor, ForceSensor
传感器端口（E/F）→ 可连接：ColorSensor, UltrasonicSensor, InfraredSensor, TiltSensor, ColorLightMatrix
```

---

## 7. 中型电机外观

### 实物尺寸

| 维度 | 数值 | 说明 |
|------|------|------|
| 长度 | 约 52 mm | 含转轴 |
| 宽度 | 约 26 mm | 主体宽度 |
| 高度 | 约 26 mm | 主体高度 |
| 转轴直径 | 约 8 mm | 输出轴 |

### 外观描述

- **主体**：长方形盒状，两侧有 LEGO 凸粒安装孔
- **转子（输出轴）**：居中凸出，截面为 **Maelstrom 十字轴**（LDD 十字孔）
- **连接端**：一侧有 **RJ12 接口**（6P6C 电话线接头），用于连接 Hub
- **齿轮箱**：内部减速齿轮，外部可见齿轮轮廓（装饰性）
- **颜色**：深蓝色（#1B3B9F）主体 + 浅蓝色装饰条

### HTML/CSS 实现思路

```css
/* 中型电机主体 */
.motor {
  position: relative;
  width: 80px;   /* 约 2x 缩放 */
  height: 40px;
  background: linear-gradient(135deg, #2B4DB0, #152E7A);
  border-radius: 6px;
  border: 1px solid #0a1a5a;
}

/* 转轴（凸出部分）居中 */
.motor-shaft {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 14px;
  height: 14px;
  background: #888;
  border-radius: 50%;
  border: 2px solid #666;
  box-shadow: inset 0 0 4px rgba(0,0,0,0.5);
}

/* 十字轴装饰线 */
.motor-shaft::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  background:
    linear-gradient(#555, #555) no-repeat center,
    linear-gradient(#555, #555) no-repeat center;
  background-size: 10px 2px, 2px 10px; /* 十字 */
}

/* RJ12 接口端（连接 Hub 的那一侧）*/
.motor-connector {
  position: absolute;
  right: -6px;
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
  height: 12px;
  background: #222;
  border-radius: 2px;
}
```

---

## 8. 颜色传感器外观

### 实物尺寸

| 维度 | 数值 |
|------|------|
| 主体宽度 | 约 24 mm |
| 主体高度 | 约 32 mm |
| 深度 | 约 16 mm |
| LED 直径 | 约 6 mm |

### 外观描述

- **主体**：长方形，顶部有**透镜窗口**（用于检测颜色）
- **LED**：传感器头部有一个 **RGB LED**（检测时发出红/绿/蓝光）
- **连接端**：一侧有 RJ12 接口（6P6C）
- **颜色**：深蓝色主体（与 Hub 同色系）

### HTML/CSS 实现思路

```css
/* 颜色传感器主体 */
.colorsensor {
  position: relative;
  width: 36px;   /* 约 1.5x */
  height: 48px;
  background: linear-gradient(135deg, #2B4DB0, #152E7A);
  border-radius: 4px;
  border: 1px solid #0a1a5a;
}

/* 检测窗口（透镜）*/
.sensor-lens {
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  width: 18px;
  height: 18px;
  background: #111;
  border-radius: 50%;
  border: 2px solid #333;
}

/* RGB LED 指示灯 */
.sensor-led {
  position: absolute;
  top: 28px;
  left: 50%;
  transform: translateX(-50%);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #333;
  transition: background 0.1s, box-shadow 0.1s;
}

/* LED 发光状态 */
.sensor-led.red { background: #ff0000; box-shadow: 0 0 4px 2px rgba(255,0,0,0.6); }
.sensor-led.green { background: #00ff00; box-shadow: 0 0 4px 2px rgba(0,255,0,0.6); }
.sensor-led.blue { background: #0088ff; box-shadow: 0 0 4px 2px rgba(0,136,255,0.6); }

/* RJ12 接口端 */
.sensor-connector {
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 8px;
  height: 6px;
  background: #222;
  border-radius: 1px;
}
```

---

## 9. 超声波传感器外观（参考）

- 主体呈 **T 字形**，两侧有超声波发射/接收器
- 正面有两个圆形"眼睛"（发射和接收探头）
- 尺寸：约 48mm × 32mm × 16mm

---

## 10. HTML/CSS 整体布局建议

### 完整 Hub 组件结构

```html
<div class="hub-card">
  <div class="hub-body">
    <!-- 端口（绝对定位） -->
    <div class="port port-A"><span class="port-label">A</span></div>
    <div class="port port-B"><span class="port-label">B</span></div>
    <div class="port port-C"><span class="port-label">C</span></div>
    <div class="port port-D"><span class="port-label">D</span></div>
    <div class="port port-E"><span class="port-label">E</span></div>
    <div class="port port-F"><span class="port-label">F</span></div>

    <!-- 按钮（顶部区域，flex 布局） -->
    <div class="hub-top">
      <button class="hub-btn btn-left">◀</button>
      <button class="hub-btn btn-right">▶</button>
      <button class="hub-btn btn-center">●</button>
      <button class="hub-btn btn-bt">📶</button>
    </div>

    <!-- 5×5 点阵显示屏 -->
    <div class="display-screen">
      <!-- 25 个像素 -->
      <div class="pixel" data-row="0" data-col="0"></div>
      <!-- ... (5×5 = 25 个 pixel div) -->
    </div>

    <!-- 状态 LED -->
    <div class="status-led green on"></div>
  </div>

  <!-- 连接线（SVG 路径，可选） -->
  <!-- <svg class="hub-wires"><path d="..."/></svg> -->
</div>
```

### CSS 布局关键点

```css
/* Hub 卡片容器 */
.hub-card {
  display: inline-block;
  padding: 16px;
  background: var(--surface-variant);
  border-radius: 16px;
}

/* Hub 主体（相对定位，作为端口的定位基准） */
.hub-body {
  position: relative;
  width: 204px;
  height: 164px;
  background: linear-gradient(145deg, #2B4DB0, #152E7A);
  border-radius: 22px;
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.15),
    0 4px 16px rgba(0,0,0,0.3);
}

/* 顶部按钮区域（flexbox，absolute 嵌套在 flex 容器中） */
.hub-top {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 12px;
  gap: 20px;
}

/* 所有按钮（绝对定位 + flexbox 结合） */
.hub-btn {
  border: none;
  cursor: pointer;
  font-size: 0; /* 隐藏文字，用 CSS 画图标 */
  transition: transform 0.1s, background 0.1s;
}

.hub-btn:active {
  transform: scale(0.92);
  background: #ccc;
}

/* 显示屏（居中，绝对定位） */
.display-screen {
  position: absolute;
  top: 52px;
  left: 50%;
  transform: translateX(-50%);
  /* 其他样式见第3节 */
}

/* 状态 LED（右下区域） */
.status-led {
  position: absolute;
  bottom: 14px;
  right: 14px;
  /* 其他样式见第5节 */
}
```

### 重要比例数字汇总

```
Hub 实际比例: 102mm : 82mm ≈ 1.24 : 1
CSS 渲染基准: 204px : 164px
端口数量: 6 个 (A-F)
电机端口: A, B, C, D (左侧2 + 右侧2)
传感器端口: E, F (底部)
显示屏: 5×5 = 25 像素
按钮数量: 4 个 (LEFT, RIGHT, CENTER, BLUETOOTH)
LED 状态灯: 1 个 (多色，支持 blink/animate)
```

---

## 11. 设备选择弹窗

### 弹窗数据结构

```javascript
// 连接设备弹窗的设备列表
const DEVICES_BY_PORT_TYPE = {
  motor: [          // A/B/C/D 端口
    { name: '中型电机', emoji: '⚙️', className: 'Motor' },
    { name: '大型电机', emoji: '⚙️➕', className: 'Motor' },
    { name: '力传感器', emoji: '🔲', className: 'ForceSensor' },
  ],
  sensor: [         // E/F 端口
    { name: '颜色传感器', emoji: '🔴', className: 'ColorSensor' },
    { name: '颜色距离传感器', emoji: '📏', className: 'ColorLightMatrix' },
    { name: '超声波传感器', emoji: '📡', className: 'UltrasonicSensor' },
    { name: '红外传感器', emoji: '📶', className: 'InfraredSensor' },
    { name: '倾斜传感器', emoji: '📐', className: 'TiltSensor' },
  ],
};
```

---

## 12. 设备卡片（跟随端口连线）

```css
/* 设备卡片（连接在端口上的设备表示）*/
.device-card {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: var(--surface);
  border: 1px solid var(--outline);
  border-radius: 12px;
  min-width: 120px;
  cursor: pointer;
  transition: box-shadow 0.15s;
}

.device-card:hover {
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}

.device-card .device-emoji {
  font-size: 20px;
}

.device-card .device-name {
  flex: 1;
  font-size: 13px;
  font-weight: 500;
}

.device-card .device-remove {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
  background: var(--surface-variant);
  color: var(--on-surface-variant);
  font-size: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.device-card .device-remove:hover {
  background: var(--error);
  color: white;
}
```

---

*文档版本：v1.0*
*最后更新：2026-04-27*
*参考来源：pybricks v3.6.1 官方文档 + IDE/SPEC.md*
