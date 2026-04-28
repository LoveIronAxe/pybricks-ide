# Pybricks MicroPython 标准库模块索引

> 来源：https://docs.pybricks.com/en/stable/micropython/  
> 版本：pybricks v3.6.1  
> 说明：Pybricks 基于 MicroPython，模块名以 `u` 前缀区分于标准 Python（如 `ujson` vs `json`）。

---

## 模块总览

| 模块 | 文件 | 作用 |
|------|------|------|
| builtins | builtins.txt | 内置类与函数，无需 import 即可使用 |
| micropython | micropython.txt | MicroPython 内部 API（常量、堆管理、中断） |
| umath | umath.txt | 数学函数（三角、对数、幂、常量） |
| uerrno | uerrno.txt | 错误码常量（OSError 的 errno 属性） |
| ujson | ujson.txt | JSON 编码/解码 |
| urandom | urandom.txt | 伪随机数生成 |
| uselect | uselect.txt | 多路复用 I/O 轮询 |
| ustruct | ustruct.txt | C 风格二进制数据打包/解包 |
| usys | usys.txt | 系统信息与标准流（stdin/stdout/stderr） |
| uio | uio.txt | 内存流对象（BytesIO、StringIO、FileIO） |

---

## 1. builtins — 内置类与函数

**作用**：不需要任何 import，直接可用的核心函数和类。涵盖 I/O、基本类型、对象操作等。

**核心内容**：

### 输入/输出
- `input(prompt)` → `str` — 从终端窗口读取用户输入
- `print(*objects, sep, end, file)` — 打印到终端或文件

### 基本类型
- `bool(x)` — 布尔值
- `complex(a, b)` — 复数
- `dict(**kwargs)` — 字典
- `float(x)` — 浮点数
- `int(x)` — 整数；含 `to_bytes()`、`from_bytes()` 方法
- `list`、`tuple`、`set`、`str` — 标准集合/字符串类型
- `bytes`、`bytearray` — 字节类型

### 对象操作
- `type(object)` — 类型查询
- `dir()`、`vars()` — 属性列表
- `getattr()`、`setattr()` — 属性访问
- `hasattr()` — 属性检测
- `isinstance()` — 类型判断
- `id(object)` — 对象标识
- `hash(object)` — 哈希值
- `repr(object)` — 字符串表示

### 迭代与运算
- `enumerate(iterable)` — 带索引迭代
- `filter(function, iterable)` — 过滤
- `map(function, *iterables)` — 映射
- `reversed(sequence)` — 逆序
- `sorted(iterable, key, reverse)` — 排序
- `zip(*iterables)` — 并行迭代
- `any(iterable)`、`all(iterable)` — 逻辑判断
- `len(object)` — 长度
- `iter(object)`、`next(iterator)` — 迭代器
- `range()`、`slice()` — 序列切片

### 数学相关内置函数
- `abs(x)` — 绝对值
- `divmod(a, b)` — 商和余数
- `hex(x)`、`oct(x)`、`bin(x)` — 进制转换
- `pow(x, y)`、`pow(x, y, z)` — 幂运算
- `round(x, n)` — 四舍五入
- `sum(iterable)` — 求和
- `min()`、`max()` — 最值

### 其他
- `callable(object)` — 是否可调用
- `chr(i)`、`ord(c)` — 字符/码点转换
- `format(value, format_spec)` — 格式化
- `help()` — 帮助信息
- `open(name, mode)` — 打开文件（部分平台支持）
- `breakpoint()` — 调试断点

---

## 2. micropython — MicroPython 内部 API

**作用**：访问和控制 MicroPython 解释器内部行为，用于编写高效或需要底层控制的代码。

**核心函数**：

- `const(value)` → `Any` — 将字面量声明为常量，编译时内联，显著降低内存占用
- `heap_lock()` — 锁定堆，锁定后禁止任何内存分配（`MemoryError` 阻止）
- `heap_unlock()` → `int` — 解锁堆，返回解锁后的锁深度
- `kbd_intr(chr)` — 设置触发 `KeyboardInterrupt` 的字符（默认 Ctrl+C 即字符 3）

---

## 3. umath — 数学函数

**作用**：MicroPython 版 `math` 模块，提供高级数学运算。（基础运算如 `abs`、`round`、`pow` 在 `builtins` 中无需导入。）

**核心函数**：

### 取整与符号
- `ceil(x)` → `int` — 向上取整
- `floor(x)` → `int` — 向下取整
- `trunc(x)` → `int` — 向零取整（截断小数）
- `fmod(x, y)` → `float` — 取余（与 `%` 不同）
- `fabs(x)` → `float` — 绝对值
- `copysign(x, y)` → `float` — 取 x 的值、y 的符号

### 幂与对数
- `e` — 数学常数 e ≈ 2.718282
- `pi` — 数学常数 π ≈ 3.141593
- `exp(x)` → `float` — e^x
- `log(x)`、`log(x, base)` → `float` — 对数
- `log10(x)` → `float` — 常用对数
- `sqrt(x)` → `float` — 平方根
- `pow(x, y)` → `float` — 幂运算

### 三角函数
- `sin(x)`、`cos(x)`、`tan(x)` — 标准三角（弧度）
- `asin(x)`、`acos(x)`、`atan(x)` — 反三角
- `atan2(y, x)` → `float` — 四象限反正切
- `degrees(x)`、`radians(x)` — 角度/弧度转换
- `hypot(x, y)` → `float` — √(x²+y²)

### 双曲函数
- `sinh(x)`、`cosh(x)`、`tanh(x)` — 双曲正弦/余弦/正切
- `asinh(x)`、`acosh(x)`、`atanh(x)` — 反双曲

### 其他
- `isfinite(x)`、`isinf(x)`、`isnan(x)` — 数值类型判断
- `modf(x)` → `tuple` — 返回小数部分和整数部分

---

## 4. uerrno — 错误码常量

**作用**：将数值错误码映射为可读符号，供 `OSError` 的 `errno` 属性使用。

**常量列表**：

| 常量 | 含义 |
|------|------|
| `EAGAIN` | 操作未完成，应尽快重试 |
| `EBUSY` | 设备或资源忙，暂不可用 |
| `ECANCELED` | 操作已取消 |
| `EINVAL` | 参数无效（通常用 `ValueError`） |
| `EIO` | 未指定的 I/O 错误 |
| `ENODEV` | 设备未找到（如传感器/电机未正确接入） |
| `EOPNOTSUPP` | 当前 hub 或设备不支持该操作 |
| `EPERM` | 当前状态下无法执行该操作 |
| `ETIMEDOUT` | 操作超时 |
| `errorcode` | `Dict[int, str]`，数值码→符号名的映射字典 |

---

## 5. ujson — JSON 编码与解码

**作用**：在 Python 对象和 JSON 数据格式之间相互转换。

**核心函数**：

- `dump(obj, stream, separators)` — 序列化对象为 JSON 并写入流
- `dumps(obj, separators)` → `str` — 序列化对象为 JSON 字符串
- `load(stream)` — 从流读取并反序列化为 MicroPython 对象（读至 EOF）
- `loads(string)` — 从字符串反序列化

> **MicroPython 差异**：`separators` 参数行为与 CPython 一致，但 MicroPython 环境下 JSON 性能受限于嵌入式硬件。

---

## 6. urandom — 伪随机数

**作用**：伪随机数生成器。注意：**所有函数必须使用位置参数**，不支持关键字参数。

**核心函数**：

### 基础随机数
- `randint(a, b)` → `int` — 返回 `a ≤ N ≤ b` 的随机整数
- `random()` → `float` — 返回 `0 ≤ x < 1` 的随机浮点数

### 位操作与范围
- `getrandbits(k)` → `int` — 返回 `< 2^k` 的随机整数
- `randrange(stop)` / `randrange(start, stop)` / `randrange(start, stop, step)` → `int` — 从 `range()` 中随机选取

---

## 7. uselect — I/O 多路复用轮询

**作用**：高效等待多个流上的事件（轮询模式），避免阻塞。

**核心**：

- `poll()` → `Poll` — 创建 Poll 实例

**Poll 类**：
- `register(object, eventmask)` — 注册要轮询的流对象
- `unregister(object)` — 取消注册
- `modify(object, eventmask)` — 修改事件掩码
- `poll(timeout)` → `List[Tuple[FileIO, int]]` — 等待事件发生，返回就绪的 (对象, 事件) 列表

**事件常量**：
- `POLLIN` — 可读
- `POLLOUT` — 可写
- `POLLHUP` — 挂起（hang up）
- `POLLERR` — 错误

---

## 8. ustruct — 二进制数据打包/解包

**作用**：在 Python 值和 C 风格二进制结构体之间转换，适用于协议通信、硬件寄存器等场景。

**核心函数**：

- `calcsize(format)` → `int` — 获取格式字符串对应的数据大小（字节数）
- `pack(format, *values)` → `bytes` — 将值打包为二进制
- `pack_into(format, buffer, offset, *values)` — 打包到指定缓冲区的偏移位置
- `unpack(format, data)` → `tuple` — 从二进制解包为元组
- `unpack_from(format, data, offset)` → `tuple` — 从缓冲区的指定偏移解包

**格式字符**：`@`<`>`（字节序）、`b`/`B`/`h`/`H`/`i`/`I`/`l`/`L`/`q`/`Q`/`f`/`d`/`s`/`P` 等（与 Python `struct` 模块一致）。

---

## 9. usys — 系统信息与标准流

**作用**：MicroPython 版 `sys` 模块，提供版本信息和标准 I/O 流。

**核心内容**：

### 标准流（stdin/stdout/stderr）
- `stdin` — `FileIO` 流，从连接的终端接收输入
- `stdout` — `FileIO` 流，向连接的终端发送输出
- `stderr` — `stdout` 的别名

### 版本信息
- `implementation` → `tuple` — MicroPython 版本元组，含平台、构建信息
- `version` → `str` — 完整版本字符串（如 `'3.4.0; Pybricks MicroPython v3.2.0b5 on 2022-11-11'`）
- `version_info` → `tuple` — Python 兼容性版本元组（如 `(3, 4, 0)`）

---

## 10. uio — 输入/输出流

**作用**：提供类文件流接口的内存缓冲区对象。

**核心类**：

- `BytesIO(data)` / `BytesIO(alloc_size)` — 内存二进制流，含 `getvalue()` → `bytes`
- `StringIO(string)` / `StringIO(alloc_size)` — 内存字符串流，含 `getvalue()` → `str`
- `FileIO` — 文件类型（通过 `open(name, 'rb')` 获得，不建议直接实例化）

> `alloc_size` 参数为 MicroPython 特有，不推荐在用户代码中使用。

---

## MicroPython 与标准 Python 的主要差异

### 1. 模块命名
- MicroPython 使用 `u` 前缀版模块（`umath`、`ujson`、`ustruct` 等）
- 标准 Python 使用无前缀版本（`math`、`json`、`struct`）
- Pybricks 中可通过 `from pybricks.utils import *` 使用部分模块

### 2. urandom 限制
- 所有函数**必须使用位置参数**，**不支持关键字参数**
- 标准 `random` 模块支持更丰富的分布函数（如 `gauss()`、`uniform()`），`urandom` 不支持

### 3. umath 与 math
- `builtins` 中已有 `abs`、`pow`、`round`、`divmod` 等基础数学函数，无需导入
- `umath` 提供更高级的三角、对数、特殊常量（`e`、`pi`）

### 4. 浮点精度与性能
- 嵌入式硬件浮点性能有限，`float` 类型为 IEEE 754 单精度（部分平台）
- `ustruct` 中 `d`（double）格式可能受限

### 5. uselect 平台差异
- `poll()` 的 `timeout` 参数：`-1` = 无限等待，`0` = 非阻塞，正数 = 毫秒级超时
- 并非所有平台都支持所有事件类型（`POLLHUP` 在某些嵌入式平台可能无效）

### 6. ujson
- 行为与 CPython 基本兼容，但大型 JSON 文档可能受内存限制

### 7. micropython 独有 API
- `const()` — CPython 无此功能，用于编译期常量优化
- `heap_lock()`/`heap_unlock()` — 嵌入式特有的确定性内存管理

### 8. stdin/stdout/stderr
- 在 Pybricks 中通过 `usys.stdin`/`usys.stdout` 访问
- 可重定向到文件或内存流（`uio.BytesIO`）

---

*最后更新：基于 pybricks v3.6.1 文档*
