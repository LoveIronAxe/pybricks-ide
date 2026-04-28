# Pybricks IDE 车辆配置格式说明

## 文件结构

车辆配置存储在 IndexedDB 中，可导出为 JSON 文件。

**文件名格式**: `pybricks_vehicles_YYYYMMDD.json`

---

## 顶层 JSON 结构

```json
{
  "version": "1.0",
  "exportedAt": "2025-04-28T12:00:00.000+08:00",
  "vehicles": [ ... ]
}
```

| 字段 | 类型 | 说明 |
|------|------|------|
| `version` | string | 格式版本，当前为 "1.0" |
| `exportedAt` | string | ISO 8601 导出时间 |
| `vehicles` | array | 车辆数组，每个元素是一辆车的完整配置 |

---

## 车辆对象 (Vehicle)

```json
{
  "id": "v_abc12345",
  "name": "我的小车",
  "hub": "PrimeHub",
  "ports": {
    "A": { "className": "MotorLarge", "states": [ ... ] },
    "B": null,
    "C": null,
    "D": { "className": "MotorMedium", "states": [ ... ] },
    "E": { "className": "ColorSensor", "states": [ ... ] },
    "F": null
  },
  "wheelGroup": {
    "leftPort": "A",
    "rightPort": "D",
    "wheelDiameter": 62,
    "wheelWidth": 20,
    "axleTrack": 112
  },
  "lineFollow": {
    "sensorPort": "E",
    "kp": 1.5,
    "threshold": 35,
    "waitMs": 10,
    "lineColor": "#000000",
    "bgColor": "#ffffff",
    "sensorSide": "left"
  }
}
```

### 字段说明

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `id` | string | ✅ | 车辆唯一标识，格式 `v_` + 9位随机字符 |
| `name` | string | ✅ | 车辆名称，用户自定义 |
| `hub` | string | ✅ | Hub 类型，当前支持 `"PrimeHub"` |
| `ports` | object | ✅ | 端口配置，key 为 `A`/`B`/`C`/`D`/`E`/`F` |
| `wheelGroup` | object | — | 轮组配置，无则 `null` |
| `lineFollow` | object | — | 单光巡线配置，无则 `null` |

---

## 端口配置 (Port)

### 已连接设备

```json
{
  "className": "MotorLarge",
  "states": [
    { "name": "状态A", "angle": 0, "enabled": false },
    { "name": "状态B", "angle": -300, "enabled": false }
  ]
}
```

| 字段 | 类型 | 说明 |
|------|------|------|
| `className` | string | 设备类名（见设备类名表） |
| `states` | array | 爪子/叉子的状态定义（仅爪子类设备有） |

### 未连接端口

值为 `null`

---

## 设备类名表

| className | 中文名 | 类型 | 可用端口 |
|-----------|--------|------|---------|
| `MotorMedium` | 中型电机 | motor | A, B, C, D |
| `MotorLarge` | 大型电机 | motor | A, B, C, D |
| `ForceSensor` | 力传感器 | motor | A, B, C, D |
| `ColorSensor` | 颜色传感器 | sensor | E, F |
| `ColorDistanceSensor` | 颜色距离传感器 | sensor | E, F |
| `UltrasonicSensor` | 超声波传感器 | sensor | E, F |
| `InfraredSensor` | 红外传感器 | sensor | E, F |
| `TiltSensor` | 倾斜传感器 | sensor | E, F |

---

## 轮组配置 (WheelGroup)

```json
{
  "leftPort": "A",
  "rightPort": "D",
  "wheelDiameter": 62,
  "wheelWidth": 20,
  "axleTrack": 112
}
```

| 字段 | 类型 | 说明 |
|------|------|------|
| `leftPort` | string | 左电机端口 (`A`/`B`/`C`/`D`) |
| `rightPort` | string | 右电机端口 (`A`/`B`/`C`/`D`) |
| `wheelDiameter` | number | 轮胎直径，单位 mm |
| `wheelWidth` | number | 轮胎宽度，单位 mm |
| `axleTrack` | number | 左右轮轴心距，单位 mm（自动计算 ≈ wheelDiameter × 1.8） |

---

## 巡线配置 (LineFollow)

```json
{
  "sensorPort": "E",
  "kp": 1.5,
  "threshold": 35,
  "waitMs": 10,
  "lineColor": "#000000",
  "bgColor": "#ffffff",
  "sensorSide": "left"
}
```

| 字段 | 类型 | 说明 |
|------|------|------|
| `sensorPort` | string | 颜色传感器端口 (`E`/`F`) |
| `kp` | number | PID 比例系数，范围 0.3 ~ 4.0 |
| `threshold` | number | 反射率阈值，范围 0 ~ 100 |
| `waitMs` | number | 采样间隔，范围 5 ~ 50 ms |
| `lineColor` | string | 巡线颜色（hex） |
| `bgColor` | string | 背景颜色（hex） |
| `sensorSide` | string | 传感器位置：`"left"` 或 `"right"` |

---

## 导入说明

### 合并模式
- 新车辆追加到现有列表
- ID 重复时保留现有车辆（不覆盖）

### 覆盖模式
- 清空现有车辆列表
- 完全替换为导入的数据

### 验证规则
1. `id` 字段必填且唯一
2. `hub` 仅支持 `"PrimeHub"`
3. `ports` 必须包含 A~F 六个键
4. `className` 必须在设备类名表中
5. 端口类型必须匹配（电机只能接 A~D，传感器只能接 E~F）

---

## 示例文件

```json
{
  "version": "1.0",
  "exportedAt": "2025-04-28T12:00:00.000+08:00",
  "vehicles": [
    {
      "id": "v_abc12345",
      "name": "竞赛小车",
      "hub": "PrimeHub",
      "ports": {
        "A": { "className": "MotorLarge", "states": [] },
        "B": null,
        "C": { "className": "MotorMedium", "states": [
          { "name": "状态A", "angle": 0, "enabled": false },
          { "name": "状态B", "angle": -300, "enabled": false }
        ]},
        "D": { "className": "MotorLarge", "states": [] },
        "E": { "className": "ColorSensor", "states": [] },
        "F": null
      },
      "wheelGroup": {
        "leftPort": "A",
        "rightPort": "D",
        "wheelDiameter": 62,
        "wheelWidth": 20,
        "axleTrack": 112
      },
      "lineFollow": {
        "sensorPort": "E",
        "kp": 1.5,
        "threshold": 35,
        "waitMs": 10,
        "lineColor": "#000000",
        "bgColor": "#ffffff",
        "sensorSide": "left"
      }
    }
  ]
}
```