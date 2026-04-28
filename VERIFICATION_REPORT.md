# Pybricks IDE 功能验证报告

> 验证时间：2026-04-28
> 验证范围：IDE v1.0（map.html / program.html / vehicle.html / CODE_GENERATION.md）

---

## 一、地图 → 流程图导出

### 检查结果：❌ 功能缺失

**文件：`pages/map.html`**

地图编辑器（map.html）**完全没有**流程图导出功能。搜索结果：

```bash
$ grep -i "mermaid\|plantuml\|svg.*export\|export.*svg\|flowchart" map.html
# 无任何匹配
```

### 现有导出功能

| 导出演示 | 支持情况 |
|---|---|
| 导出为 JSON（地图配置） | ✅ 有（localStorage / IndexedDB） |
| 导出为 PNG/SVG（位图） | ❌ 无 |
| 导出为 Mermaid 流程图 | ❌ 无 |
| 导出为 PlantUML | ❌ 无 |
| 导出为 Python 代码 | ❌ 无 |

### 地图数据结构（paths 字段）

地图中存储的 `paths` 数据格式如下，可用于流程图生成：

```json
"paths": [
  { "id": "path_1", "type": "polyline", "points": [{"x":50,"y":50},{"x":150,"y":50}] },
  { "id": "path_2", "type": "arc", "cx":150,"cy":150,"r":50,"startAngle":-90,"endAngle":0 }
]
```

### 改进建议

1. **添加 Mermaid 格式导出**：将 `paths` 转换为 Mermaid 流程图语法
2. **添加 SVG 导出**：将 Canvas 绘制内容导出为 SVG
3. **添加 PNG 导出**：将 Canvas 绘制内容导出为位图

---

## 二、程序导出验证

### 检查结果：⚠️ 基本功能正常，但存在 API 错误

**文件：`pages/program.html`**

#### 2.1 导出格式

- ✅ 导出为 `.py` 文件（不是 `.json`）
- ✅ 下载使用 `Blob` + `createObjectURL` 方案

#### 2.2 导出的代码结构

```python
# === AUTO GENERATED ===
from pybricks.hubs import PrimeHub
from pybricks.pupdevices import Motor, ColorSensor
from pybricks.parameters import Port, Direction, Stop
from pybricks.robotics import DriveBase
from pybricks.tools import wait

MAX_MOTOR_SPEED = 1180
# ... 全局变量 ...
def init():
    global hub, ...
    hub = PrimeHub()
    # TODO: Configure motors and sensors based on vehicle
    pass

# === USER CODE START ===
（blocksToPython 生成的代码）
# === USER CODE END ===

init()
```

#### 2.3 发现的问题

| 问题 | 严重程度 | 说明 |
|---|---|---|
| `Color` 未被 import | 🔴 高 | `hub.light.on(Color.RED)` 会导致 `NameError` |
| `hub.light.on(Color.RED * brightness)` 乘法操作 | 🟡 中 | Pybricks Color 不支持乘法运算来调整亮度 |
| `else:` 块单独生成没有配套 `if` | 🔴 高 | `blocksToPython` 对 `else_block` 生成的代码是独立行 `else:`，没有父级 `if` 时语法错误 |
| `init()` 函数只有 `pass` | 🟡 中 | 车辆控制块如 `init_vehicle` 生成的 `init()` 与实际 `init()` 函数冲突 |
| `while True: pass` 结尾 | 🟡 中 | 用户有实际代码时，仍然追加空循环 |

---

## 三、代码生成语法验证

### 检查结果：⚠️ 存在多个语法和 API 错误

**文件：`pages/program.html`（`generatePythonCode()` + `blocksToPython()`）**

#### 3.1 Motor API 参数顺序验证

对照官方文档（`docs_backup/pupdevices_motor.md`）：

```
官方示例：example_motor.run_time(500, 2000)   # speed=500, time=2000ms
官方示例：example_motor.run_angle(500, 90)    # speed=500, angle=90°
```

IDE 生成的代码（palette 定义）：
```javascript
// motor_run_time
pyCode: f => `motor_${port}.run_time(${f.speed}, ${f.time}, then=${f.stop})`
// motor_run_angle
pyCode: f => `motor_${port}.run_angle(${f.speed}, ${f.angle}, then=${f.stop})`
```

**结论：✅ Motor API 参数顺序正确**（speed 在前，time/angle 在后）

#### 3.2 DriveBase API 验证

对照官方文档（`docs_backup/robotics.md`）：

```
drive_base.straight(500)      # distance=500mm
drive_base.turn(180)           # angle=180°
```

IDE 生成的代码：
```javascript
// db_straight
pyCode: f => `db.straight(${f.dist}, then=${f.stop})`  ✅ 正确
// db_turn
pyCode: f => `db.turn(${f.angle}, then=${f.stop})`       ✅ 正确
```

#### 3.3 hub.light.on() 亮度问题

```javascript
// hub_light_on
pyCode: f => `hub.light.on(${f.color} * ${f.brightness / 100})`
// 当 brightness=100 时：Color.RED * 1.0
```

**问题：Pybricks 的 Color 对象不支持乘法运算符来调整亮度。**

正确做法应该是：
```python
# Pybricks 正确做法：直接使用颜色常量，亮度通过占空比控制
hub.light.on(Color.RED)  # 不支持亮度参数
# 或者使用 ColorDistanceSensor 的灯光功能来调亮度
```

#### 3.4 blocksToPython 结构块问题

```javascript
// else_block 的 pyCode
'else_block': { ..., pyCode: () => `else:`, isStruct: true }

// 当 else_block 被放置在主层（没有父级 if_block）时：
// 生成的代码是：
else:
// 这是语法错误！
```

#### 3.5 hub.imu.ready() 调用

CODE_GENERATION.md 模板中有：
```python
while not hub.imu.ready():
    wait(10)
```

**验证：✅ 官方文档（hubs_primehub.md）确认 `imu.ready()` 是一个有效方法**

---

## 四、CODE_GENERATION.md 设计文档验证

### 检查结果：⚠️ 设计文档与实际程序页实现不一致

#### 4.1 不一致之处

| 项目 | 设计文档（CODE_GENERATION.md） | 实际程序页（program.html） |
|---|---|---|
| 模板引擎 | Jinja2 | 纯 JavaScript 字符串拼接 |
| 用户代码保留 | 独立 `programs.json`，通过 `{{ user_code_initial }}` 注入 | blocksToPython() 动态生成，无独立存储 |
| init() 函数 | 完整的 Hub + 电机 + 传感器初始化 | 只有 `pass` |
| follow_line() | 完整 PID 巡线逻辑 | 依赖 palette 积木块拼接 |
| 导出入口 | 车辆页面"一键导出Python" | 程序页面"导出 Python" |

#### 4.2 设计文档示例代码中的语法错误

**follow_line() 函数中的 threshold 未定义：**

```python
def follow_line(distance, enable_lf, base_speed, kp=1.5, wait_ms=10, stop_on_end=True):
    # ...
    error = reflection - threshold   # ❌ threshold 未定义！
    # ...
```

在完整示例中，`threshold` 在文件末尾通过 `threshold = calibrate()` 赋值，
但 `follow_line()` 在 `init()` 之后定义之前就被调用了。正确顺序应该是：

```python
def calibrate():
    # ...

def follow_line(...):
    # ... 使用 threshold ...

init()
threshold = calibrate()   # threshold 必须在 follow_line 调用前定义
```

**但由于 follow_line 是函数定义而非调用，这实际上不构成运行时错误。**
函数定义顺序不影响调用——只要在调用前 threshold 已定义即可。

---

## 五、Pybricks API 正确性总结

### ✅ 正确的 API 用法

| 代码片段 | 验证结果 |
|---|---|
| `Motor(Port.A, Direction.CLOCKWISE)` | ✅ 正确 |
| `ColorSensor(Port.E)` | ✅ 正确 |
| `DriveBase(left, right, wheel_diameter=62, axle_track=112)` | ✅ 正确 |
| `db.straight(500, then=Stop.HOLD)` | ✅ 正确 |
| `db.turn(90, then=Stop.HOLD)` | ✅ 正确 |
| `motor.run_time(500, 2000, then=Stop.HOLD)` | ✅ 正确 |
| `motor.run_angle(500, 90, then=Stop.HOLD)` | ✅ 正确 |
| `hub.imu.ready()` | ✅ 正确（官方文档确认） |
| `hub.buttons.pressed()` | ✅ 正确 |
| `wait(1000)` | ✅ 正确 |

### ❌ 错误或存疑的 API 用法

| 代码片段 | 问题 | 建议修复 |
|---|---|---|
| `hub.light.on(Color.RED * 0.5)` | Pybricks Color 不支持乘法 | 使用 `hub.light.on(Color.RED)` 或查找官方调光 API |
| `Color` 没有被 import | NameError | 添加 `from pybricks.parameters import Color` |

### ⚠️ 需要注意的 API 细节

| 项目 | 说明 |
|---|---|
| `db.drive(speed, turn_rate)` | 持续行驶，需要手动 `db.stop()` 停止 |
| `db.settings(speed, accel, turn_rate, turn_accel)` | 四个参数必须同时提供 |
| `ColorDistanceSensor` vs `ColorSensor` | 两个不同的类，API 不同 |
| `Motor` 的 `dc(power)` | power 范围 -100~100（百分比） |
| `motor.stop(Stop.COAST)` | stop() 可以接受停止方式参数 |

---

## 六、综合评分与改进建议

### 功能完整性评分

| 功能 | 评分 | 说明 |
|---|---|---|
| 地图绘制 | ⭐⭐⭐⭐ | 功能完整，支持多种障碍物和路径 |
| 地图导出 | ⭐ | 完全没有导出功能 |
| 程序积木 | ⭐⭐⭐⭐ | 覆盖了主要 Pybricks API |
| 代码生成 | ⭐⭐ | 存在 API 错误和结构问题 |
| 程序导出 | ⭐⭐⭐ | 基本可用，但需修复 Color import |
| Pybricks API 准确性 | ⭐⭐⭐ | 大部分正确，Color 乘法有问题 |

### 优先修复项（按严重程度）

1. **[高] 添加 `from pybricks.parameters import Color` 到生成代码**
   - 影响所有使用 `Color.RED` 等颜色的 hub 块

2. **[高] 修复 `hub.light.on()` 亮度调整方式**
   - 当前 `Color.RED * (brightness/100)` 不是有效 Pybricks 用法

3. **[高] 防止 `else:` 块单独出现**
   - 需要验证 else_block 有对应的父级 if_block

4. **[中] 完善 `init()` 函数**
   - 当前只有 `pass`，应包含实际的初始化代码

5. **[中] 地图导出功能**
   - 添加 Mermaid / SVG / PNG 导出选项

6. **[低] 设计文档与实现同步**
   - CODE_GENERATION.md 描述的 Jinja2 模板引擎尚未实现

---

## 七、测试项目文件

已创建测试项目目录：`test_project/`

```
test_project/
├── test_vehicle.json    # 车辆配置测试数据（符合 VEHICLE_FORMAT）
├── test_map.json        # 地图配置测试数据（符合 MAP_FORMAT）
└── test_program.json    # 程序积木测试数据（符合 PROGRAM_FORMAT）
```

### 使用方法

1. 将 `test_vehicle.json` 内容导入车辆配置页
2. 将 `test_map.json` 内容导入地图编辑页
3. 将 `test_program.json` 中的 blocks 导入程序编辑器
4. 点击"导出 Python"验证生成代码

---

*报告生成：5号龙虾（小李）*
*验证依据：Pybricks 官方文档（docs_backup/）*
