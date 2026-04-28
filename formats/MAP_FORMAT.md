# Pybricks IDE 地图数据格式说明

## 文件结构

地图数据存储在 IndexedDB 中，可导出为 JSON 文件。

**文件名格式**: `pybricks_maps_YYYYMMDD.json`

---

## 顶层 JSON 结构

```json
{
  "version": "1.0",
  "exportedAt": "2025-04-28T12:00:00.000+08:00",
  "maps": [ ... ]
}
```

| 字段 | 类型 | 说明 |
|------|------|------|
| `version` | string | 格式版本，当前为 "1.0" |
| `exportedAt` | string | ISO 8601 导出时间 |
| `maps` | array | 地图数组 |

---

## 地图对象 (Map)

```json
{
  "id": "m_xyz98765",
  "name": "比赛地图A",
  "imageData": "data:image/png;base64,...",
  "thumbnailData": "data:image/jpeg;base64,...",
  "pixelToMm": 0.5,
  "obstacles": [ ... ],
  "movableItems": [ ... ],
  "paths": [ ... ],
  "rulers": [ ... ]
}
```

### 字段说明

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `id` | string | ✅ | 地图唯一标识，格式 `m_` + 时间戳 + 随机字符 |
| `name` | string | ✅ | 地图名称 |
| `imageData` | string | — | 底图（Base64 data URL），无底图为 `null` |
| `thumbnailData` | string | — | 64×64 缩略图（Base64 JPEG） |
| `pixelToMm` | number | — | 像素到毫米换算比例，默认为 `1` |
| `obstacles` | array | ✅ | 障碍物列表（可为空） |
| `movableItems` | array | ✅ | 搬运物列表（可为空） |
| `paths` | array | ✅ | 路径列表（可为空） |
| `rulers` | array | ✅ | 标尺列表（可为空） |

---

## 坐标系统

- **原点**: 画布左上角 `(0, 0)`
- **单位**: 像素 (px)
- **X轴**: 向右递增
- **Y轴**: 向下递增
- **比例尺**: `pixelToMm` 字段定义 1px 对应的实际毫米数

> 比例尺需要在编辑器中使用"测量工具"（两点距离/实际距离）来标定。

---

## 障碍物 (Obstacle)

```json
{
  "_id": "obs_abc123",
  "x": 100,
  "y": 150,
  "w": 80,
  "h": 40,
  "type": "blocked"
}
```

| 字段 | 类型 | 说明 |
|------|------|------|
| `_id` | string | 障碍物唯一标识 |
| `x` | number | 左上角 X 坐标（px） |
| `y` | number | 左上角 Y 坐标（px） |
| `w` | number | 宽度（px） |
| `h` | number | 高度（px） |
| `type` | string | 类型：`"blocked"`（不可通行）或 `"pushable"`（可推动） |

---

## 搬运物 (MovableItem)

```json
{
  "_id": "mov_xyz456",
  "x": 200,
  "y": 300,
  "size": 60,
  "color": "#3b82f6",
  "shape": "square"
}
```

| 字段 | 类型 | 说明 |
|------|------|------|
| `_id` | string | 搬运物唯一标识 |
| `x` | number | 左上角 X 坐标（px） |
| `y` | number | 左上角 Y 坐标（px） |
| `size` | number | 大小（px），圆形时为直径，正方形时为边长 |
| `color` | string | 显示颜色（hex），默认为 `#3b82f6`（蓝色） |
| `shape` | string | 形状：`"square"`（正方形）或 `"circle"`（圆形） |

---

## 路径 (Path)

```json
{
  "_id": "path_def789",
  "points": [[100, 200], [150, 250], [200, 200]],
  "color": "#0071e3"
}
```

| 字段 | 类型 | 说明 |
|------|------|------|
| `_id` | string | 路径唯一标识 |
| `points` | array | 路径点坐标数组，每个点是 `[x, y]` |
| `color` | string | 路径颜色（hex），默认为 `#0071e3` |

---

## 标尺 (Ruler)

```json
{
  "x": 50,
  "y": 100,
  "angle": 0,
  "length": 200
}
```

| 字段 | 类型 | 说明 |
|------|------|------|
| `x` | number | 标尺起点 X 坐标（px） |
| `y` | number | 标尺起点 Y 坐标（px） |
| `angle` | number | 旋转角度（度），支持倾斜标尺 |
| `length` | number | 标尺长度（px） |

---

## 导入说明

### 验证规则
1. `id` 字段必填且唯一
2. `obstacles`/`movableItems`/`paths`/`rulers` 数组元素必须有 `_id`
3. `obstacles` 中 `type` 必须为 `"blocked"` 或 `"pushable"`
4. `movableItems` 中 `shape` 必须为 `"square"` 或 `"circle"`
5. `paths` 中 `points` 至少包含 2 个点
6. `imageData` 如果存在必须是合法的 data URL 格式

### 合并行为
- 新地图追加到现有列表
- ID 重复时保留现有地图（不覆盖）

---

## 示例文件

```json
{
  "version": "1.0",
  "exportedAt": "2025-04-28T12:00:00.000+08:00",
  "maps": [
    {
      "id": "m_xyz98765",
      "name": "比赛地图A",
      "imageData": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAE...",
      "thumbnailData": "data:image/jpeg;base64,/9j/4AAQSkZJRg...",
      "pixelToMm": 0.5,
      "obstacles": [
        { "_id": "obs_001", "x": 100, "y": 150, "w": 80, "h": 40, "type": "blocked" },
        { "_id": "obs_002", "x": 300, "y": 200, "w": 60, "h": 60, "type": "pushable" }
      ],
      "movableItems": [
        { "_id": "mov_001", "x": 200, "y": 300, "size": 60, "color": "#3b82f6", "shape": "square" }
      ],
      "paths": [
        {
          "_id": "path_001",
          "points": [[50, 100], [150, 100], [150, 200]],
          "color": "#0071e3"
        }
      ],
      "rulers": [
        { "x": 50, "y": 100, "angle": 0, "length": 200 }
      ]
    }
  ]
}
```

---

## 图片导出（PNG）

地图编辑器支持将当前画布导出为 PNG 图片：
- 导出内容为当前可见的画布区域（含底图 + 障碍物 + 搬运物）
- 路径和标尺也会被绘制
- 导出分辨率为画布实际像素尺寸
- 文件名格式：`pybricks_map_[地图名]_YYYYMMDD.png`