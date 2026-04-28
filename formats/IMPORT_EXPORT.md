# Pybricks IDE 导入导出功能说明

## 概述

Pybricks IDE 支持在三个主要页面（车辆、地图、程序）进行数据的导入和导出。所有数据以 JSON 格式为主，程序额外支持 Python 代码导出。

---

## 通用说明

### 文件命名规范

| 类型 | 格式 | 示例 |
|------|------|------|
| 车辆导出 | `pybricks_vehicles_YYYYMMDD.json` | `pybricks_vehicles_20250428.json` |
| 地图导出 | `pybricks_maps_YYYYMMDD.json` | `pybricks_maps_20250428.json` |
| 程序导出 (JSON) | `pybricks_programs_YYYYMMDD.json` | `pybricks_programs_20250428.json` |
| 程序导出 (Python) | `程序名.py` | `巡线程序.py` |
| 单车辆导出 (Python) | `车辆名.py` | `竞赛小车.py` |
| 地图导出 (PNG) | `pybricks_map_地图名_YYYYMMDD.png` | `pybricks_map_比赛地图_20250428.png` |

---

## 车辆配置页面 (vehicle.html)

### 导出车辆

#### 方式一：导出全部车辆（JSON）

将所有车辆配置导出为一个 JSON 文件。

**操作**: 点击顶部「📥 一键导出Python」按钮旁的下拉菜单，选择「导出全部车辆」

**输出内容**: 包含 `version`、`exportedAt`、`vehicles` 数组的 JSON 文件

```json
{
  "version": "1.0",
  "exportedAt": "2025-04-28T12:00:00.000+08:00",
  "vehicles": [ ... ]
}
```

#### 方式二：导出单个车辆（Python）

将当前选中车辆的配置生成 Python 代码框架文件。

**操作**: 在车辆详情面板中选择「导出为 Python」

**输出内容**: 包含设备初始化和基础代码的 `.py` 文件

```python
# Pybricks 程序自动生成
# 车辆: 竞赛小车
# 生成时间: 2025-04-28 12:00:00

from pybricks.hubs import PrimeHub
from pybricks.pupdevices import Motor, ColorSensor
from pybricks.parameters import Direction, Port
from pybricks.robotics import DriveBase

a_motor = Motor(Port.A, Direction.CLOCKWISE)
d_motor = Motor(Port.D, Direction.CLOCKWISE)
e_sensor = ColorSensor(Port.E)

hub = PrimeHub()

robot = DriveBase(a_motor, d_motor, wheel_diameter=62, axle_track=112)

# 巡线参数
LINE_KP = 1.5
LINE_THRESHOLD = 35
LINE_WAIT_MS = 10

# 主程序
while True:
    pass
```

### 导入车辆

#### 方式一：合并模式（默认）

将导入的车辆追加到现有列表。

- ID 重复的车辆不会被覆盖
- 新车辆 ID 保持不变

#### 方式二：覆盖模式

清空现有车辆，完全替换为导入数据。

**操作**: 点击导入按钮后，选择「覆盖」或「合并」

**验证规则**:
1. 文件必须是有效的 JSON
2. 必须包含 `vehicles` 数组
3. 每个车辆必须有 `id`、`name`、`hub` 字段
4. `hub` 必须为 `"PrimeHub"`
5. `ports` 必须包含 A~F 六个键

---

## 地图编辑页面 (map.html)

### 导出地图

#### 方式一：导出全部地图（JSON）

将所有地图配置导出为 JSON 文件。

**操作**: 在地图列表右键或工具栏选择「导出地图」

**输出内容**: 包含所有地图数据的 JSON 文件

#### 方式二：导出当前地图（JSON）

只导出当前选中的地图。

**操作**: 点击工具栏导出按钮

#### 方式三：导出当前地图为 PNG

将地图画布导出为图片文件。

**操作**: 点击工具栏截图按钮

**输出内容**: PNG 格式图片，包含底图、障碍物、搬运物、路径、标尺

**注意**: PNG 导出的是当前可见区域，不含 UI 元素

### 导入地图

#### 从 JSON 导入

拖拽图片文件到左侧地图列表可直接导入（创建新地图）。

**操作**:
1. 将图片文件拖入列表区域
2. 输入地图名称
3. 确认导入

**验证规则**:
1. 文件必须是有效的 JSON
2. 必须包含 `maps` 数组或单个地图对象
3. `id` 字段必填且唯一
4. `obstacles`、`movableItems`、`paths`、`rulers` 必须为数组

---

## 程序编辑页面 (program.html)

### 导出程序

#### 方式一：导出全部程序（JSON）

**操作**: 点击「📥 导出 Python」按钮旁的下拉菜单

**输出内容**: 所有程序的完整 JSON（含代码块结构）

#### 方式二：导出当前程序（JSON）

只导出当前选中程序的 JSON 结构。

#### 方式三：导出当前程序为 Python

将代码块实时转换为 Python 代码并下载。

**操作**: 点击「📥 导出 Python」按钮

**输出内容**: 纯 Python 代码文件（`.py`）

```python
# === AUTO GENERATED ===
from pybricks.hubs import PrimeHub
from pybricks.pupdevices import Motor, ColorSensor
from pybricks.parameters import Port, Direction, Stop
from pybricks.robotics import DriveBase
from pybricks.tools import wait

MAX_MOTOR_SPEED = 1180

hub = None
left_motor = None
right_motor = None
line_sensor = None
drive_base = None

def init():
    global hub, left_motor, right_motor, line_sensor, drive_base
    hub = PrimeHub()
    # TODO: Configure motors and sensors based on vehicle
    pass

# === USER CODE START ===
# 用户代码块生成的代码
db.straight(500, then=Stop.HOLD)
# === USER CODE END ===

init()
```

### 导入程序

#### 从 JSON 导入

将程序 JSON 文件导入（合并或覆盖）。

**验证规则**:
1. 文件必须是有效的 JSON
2. 必须包含 `programs` 数组或单个程序对象
3. 每个程序必须有 `id`、`name`、`blocks` 字段

#### 从 Python 导入

**⚠️ 重要限制**: 目前不支持从 Python 代码还原为图形化代码块。

**操作方式**:
1. 导入 Python 文件
2. 系统会提取 `# === USER CODE START ===` 和 `# === USER CODE END ===` 之间的代码
3. 保存为纯文本 `userCode`（作为单个文本块显示）

**限制说明**:
- 无法还原为图形化积木块
- 只能作为文本查看，无法编辑
- 如需完整编辑功能，建议重新用积木搭建后再导出

---

## 注意事项

### 数据存储
- 所有数据默认存储在浏览器 IndexedDB 中
- 清除浏览器数据会导致所有配置丢失
- 建议定期导出备份

### 文件大小
- 地图图片（imageData）可能较大，导出 JSON 时请注意
- 建议在需要分享时使用压缩后的地图数据

### 兼容性
- 格式版本为 `1.0`，后续更新会递增版本号
- 旧版本文件可通过迁移脚本转换

### 浏览器限制
- 部分浏览器限制本地文件访问，需通过文件选择器选择文件
- 建议使用 Chrome/Edge/Firefox 最新版本

---

## 快捷操作汇总

| 页面 | 操作 | 快捷方式 |
|------|------|---------|
| 车辆 | 导出全部 | 顶部「导出车辆」按钮 |
| 车辆 | 导出Python | 顶部「📥 一键导出Python」 |
| 地图 | 导出JSON | 工具栏导出按钮 |
| 地图 | 导出PNG | 工具栏截图按钮 |
| 地图 | 导入 | 拖拽图片文件到列表 |
| 程序 | 导出Python | 工具栏「📥 导出 Python」 |
| 程序 | 导入JSON | 工具栏导入按钮 |
| 程序 | 导入Python | 工具栏导入按钮（自动提取 userCode） |