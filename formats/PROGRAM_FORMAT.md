# Pybricks IDE 程序数据格式说明

## 文件结构

程序数据存储在 IndexedDB 中，可导出为两种格式：

| 格式 | 文件扩展名 | 说明 |
|------|-----------|------|
| JSON | `.json` | 完整程序数据（含元数据） |
| Python | `.py` | 纯 Python 代码（从 userCode 区域生成） |

**JSON 文件名格式**: `pybricks_programs_YYYYMMDD.json`
**Python 文件名格式**: `程序名.py`

---

## JSON 格式

### 顶层结构

```json
{
  "version": "1.0",
  "exportedAt": "2025-04-28T12:00:00.000+08:00",
  "programs": [ ... ]
}
```

| 字段 | 类型 | 说明 |
|------|------|------|
| `version` | string | 格式版本，当前为 "1.0" |
| `exportedAt` | string | ISO 8601 导出时间 |
| `programs` | array | 程序数组 |

---

## 程序对象 (Program)

```json
{
  "id": "prog_abc12345",
  "name": "巡线程序",
  "blocks": [ ... ],
  "createdAt": "2025-04-28T10:00:00.000+08:00",
  "updatedAt": "2025-04-28T11:30:00.000+08:00"
}
```

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `id` | string | ✅ | 程序唯一标识，格式 `prog_` + 9位随机字符 |
| `name` | string | ✅ | 程序名称 |
| `blocks` | array | ✅ | 代码块数组（可为空） |
| `createdAt` | string | — | 创建时间（ISO 8601） |
| `updatedAt` | string | — | 最后修改时间（ISO 8601） |

---

## 代码块对象 (Block)

```json
{
  "id": "blk_001",
  "blockType": "db_straight",
  "fields": {
    "dist": "500",
    "speed": "200",
    "stop": "Stop.HOLD"
  },
  "children": []
}
```

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `id` | string | ✅ | 代码块唯一标识 |
| `blockType` | string | ✅ | 块类型标识符（见块类型表） |
| `fields` | object | ✅ | 参数值对象，key 为参数名 |
| `children` | array | — | 子块数组（用于结构块如 if/for/while） |

### 块类型标识符表

#### 基础语法
| blockType | 中文名 | 结构块 | 说明 |
|-----------|--------|--------|------|
| `var_assign` | 变量赋值 | ❌ | `x = value` |
| `arithmetic` | 四则运算 | ❌ | `a + b` |
| `compare` | 比较运算 | ❌ | `a == b` |
| `logic` | 逻辑运算 | ❌ | `a and b` |
| `string_op` | 字符串 | ❌ | 字符串操作 |
| `list_op` | 列表操作 | ❌ | 列表追加/弹出等 |
| `def_func` | def函数 | ✅ | `def name(args):` |
| `import` | import | ❌ | `from module import *` |
| `if_block` | if 条件 | ✅ | `if cond:` |
| `else_block` | else | ✅ | `else:` |
| `for_loop` | for 循环 | ✅ | `for i in range(n):` |
| `while_loop` | while 循环 | ✅ | `while cond:` |
| `try_except` | try-except | ✅ | 异常处理 |
| `return_stmt` | return | ❌ | `return value` |

#### 底盘控制 (DriveBase)
| blockType | 中文名 | 说明 |
|-----------|--------|------|
| `db_straight` | db.straight() | 直行 |
| `db_turn` | db.turn() | 转弯 |
| `db_drive` | db.drive() | 持续行驶 |
| `db_stop` | db.stop() | 停车 |
| `db_settings` | db.settings() | 速度设置 |
| `db_distance` | db.distance() | 已行距离 |
| `db_heading` | db.heading() | 行驶角度 |

#### 电机控制 (Motor)
| blockType | 中文名 | 说明 |
|-----------|--------|------|
| `motor_run_time` | motor.run_time() | 时间控制 |
| `motor_run_angle` | motor.run_angle() | 角度控制 |
| `motor_dc` | motor.dc() | 功率控制 |
| `motor_stop` | motor.stop() | 停止 |
| `motor_hold` | motor.hold() | 保持 |
| `motor_angle` | motor.angle() | 获取角度 |
| `motor_speed` | motor.speed() | 获取速度 |

#### 车辆控制
| blockType | 中文名 | 说明 |
|-----------|--------|------|
| `init_vehicle` | init() | 初始化 |
| `follow_line` | follow_line() | 巡线 |
| `turn_vehicle` | turn() | 转弯 |
| `drive_forward` | drive_forward() | 直行 |
| `claw_open` | claw_open() | 爪子打开 |
| `claw_close` | claw_close() | 爪子关闭 |
| `fork_up` | fork_up() | 叉子抬起 |
| `fork_down` | fork_down() | 叉子放下 |

#### 巡线
| blockType | 中文名 | 说明 |
|-----------|--------|------|
| `lf_pid` | 单光巡线PID | PID 巡线 |
| `lf_dual` | 双光巡线 | 双光巡线 |
| `lf_stop` | 停止巡线 | 停止 |

#### 传感器
| blockType | 中文名 | 说明 |
|-----------|--------|------|
| `reflection` | reflection() | 反射率 |
| `color_sensor` | color() | 颜色 |
| `distance_sensor` | distance() | 距离 |
| `button_pressed` | button.pressed() | 按钮 |
| `force_sensor` | force.force() | 力 |
| `cs_color` | color_sensor.color() | 颜色传感器 |
| `cs_reflection` | color_sensor.reflection() | 反射率 |
| `cs_rgb` | color_sensor.rgb() | RGB |
| `cs_hsv` | color_sensor.hsv() | HSV |
| `cds_color` | cds.color() | 颜色距离传感器 |
| `cds_distance` | cds.distance() | 距离 |
| `fs_force` | force.force() | 力 |
| `us_distance` | ultrasonic.distance() | 超声波距离 |
| `us_presence` | ultrasonic.presence() | 存在检测 |

#### Hub
| blockType | 中文名 | 说明 |
|-----------|--------|------|
| `hub_light_on` | hub.light.on() | 灯光 |
| `hub_light_off` | hub.light.off() | 关灯 |
| `hub_light_blink` | hub.light.blink() | 闪烁 |
| `hub_buttons` | hub.buttons.pressed() | 按钮状态 |
| `hub_display_pixel` | display.pixel() | 显示像素 |
| `hub_display_number` | display.number() | 显示数字 |
| `hub_display_char` | display.char() | 显示字符 |
| `hub_display_text` | display.text() | 显示文本 |
| `hub_display_off` | display.off() | 关闭显示 |
| `hub_imu_up` | imu.up() | 朝上方向 |
| `hub_imu_tilt` | imu.tilt() | 倾斜角 |
| `hub_imu_heading` | imu.heading() | 航向角 |
| `hub_speaker_beep` | speaker.beep() | 蜂鸣 |
| `hub_speaker_notes` | speaker.play_notes() | 音符 |
| `hub_battery_voltage` | battery.voltage() | 电压 |
| `hub_system_shutdown` | system.shutdown() | 关机 |

#### 参数
| blockType | 中文名 | 说明 |
|-----------|--------|------|
| `param_port` | Port | 端口 |
| `param_direction` | Direction | 方向 |
| `param_stop` | Stop | 停止方式 |
| `param_side` | Side | 侧面 |
| `param_color` | Color | 颜色 |
| `param_button` | Button | 按钮 |
| `param_axis` | Axis | 轴 |

#### 工具函数
| blockType | 中文名 | 说明 |
|-----------|--------|------|
| `tool_wait` | wait() | 等待 |
| `tool_stopwatch` | StopWatch | 计时器 |

---

## Python 导入说明

### 从 .py 文件导入（提取 userCode）

由于 Python 代码是纯文本，不包含块结构信息，导入时会：
1. 解析 Python 文件
2. 提取 `# === USER CODE START ===` 和 `# === USER CODE END ===` 之间的代码
3. 将纯文本作为 `userCode` 存入程序对象

**注意**: `.py` 导入**不支持**图形化还原，只能保存为纯文本 `userCode`。

```python
# pybricks 程序自动生成
from pybricks.hubs import PrimeHub
...
# === USER CODE START ===
# 用户编写的代码在这里
while True:
    db.straight(500, then=Stop.HOLD)
# === USER CODE END ===
```

---

## 示例 JSON 文件

```json
{
  "version": "1.0",
  "exportedAt": "2025-04-28T12:00:00.000+08:00",
  "programs": [
    {
      "id": "prog_abc12345",
      "name": "巡线程序",
      "blocks": [
        {
          "id": "blk_001",
          "blockType": "init_vehicle",
          "fields": {},
          "children": []
        },
        {
          "id": "blk_002",
          "blockType": "lf_pid",
          "fields": {
            "dist": "500",
            "kp": "1.5",
            "speed": "300",
            "wait_ms": "10"
          },
          "children": []
        },
        {
          "id": "blk_003",
          "blockType": "if_block",
          "fields": { "cond": "db.distance() > 1000" },
          "children": [
            {
              "id": "blk_004",
              "blockType": "db_straight",
              "fields": { "dist": "100", "speed": "100", "stop": "Stop.HOLD" },
              "children": []
            }
          ]
        }
      ],
      "createdAt": "2025-04-28T10:00:00.000+08:00",
      "updatedAt": "2025-04-28T11:30:00.000+08:00"
    }
  ]
}
```