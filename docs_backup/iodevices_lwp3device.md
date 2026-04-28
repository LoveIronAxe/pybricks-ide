# LEGO Wireless Protocol v3 device

* [](https://docs.pybricks.com/en/stable/index.html)
* [iodevices – Custom devices](https://docs.pybricks.com/en/stable/iodevices/index.html)
* LEGO Wireless Protocol v3 device

---

| ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
| - | - | - | - | - | - |

# LEGO Wireless Protocol v3 device[¶](#lego-wireless-protocol-v3-device "Permalink to this heading")

Warning

This is an experimental class. It has not been well tested and may be changed in future.

![../_images/hub-lwp3.png](https://docs.pybricks.com/en/stable/_images/hub-lwp3.png)

_class_ LWP3Device(_hub\_kind_, _name\=None_, _timeout\=10000_)[¶](#pybricks.iodevices.LWP3Device "Permalink to this definition")

Connects to a hub running official LEGO firmware using the[LEGO Wireless Protocol v3](https://lego.github.io/lego-ble-wireless-protocol-docs/)

Parameters:

* **hub\_kind** ([_int_](https://docs.pybricks.com/en/stable/micropython/builtins.html#ubuiltins.int "ubuiltins.int")) – The [hub type identifier](https://github.com/pybricks/technical-info/blob/master/assigned-numbers.md#hub-type-ids) of the hub to connect to.
* **name** ([_str_](https://docs.pybricks.com/en/stable/micropython/builtins.html#ubuiltins.str "ubuiltins.str")) – The name of the hub to connect to or `None` to connect to any hub.
* **timeout** ([_int_](https://docs.pybricks.com/en/stable/micropython/builtins.html#ubuiltins.int "ubuiltins.int")) – The time, in milliseconds, to wait for a connection before raising an exception.

name(_name_)[¶](#pybricks.iodevices.LWP3Device.name "Permalink to this definition")

name() → [str](https://docs.pybricks.com/en/stable/micropython/builtins.html#ubuiltins.str "ubuiltins.str")

Sets or gets the Bluetooth name of the device.

Parameters:

**name** ([_str_](https://docs.pybricks.com/en/stable/micropython/builtins.html#ubuiltins.str "ubuiltins.str")) – New Bluetooth name of the device. If no name is given, this method returns the current name.

_[await](https://docs.pybricks.com/en/stable/tools/index.html#pybricks.tools.await "pybricks.tools.await")_write(_buf_)[¶](#pybricks.iodevices.LWP3Device.write "Permalink to this definition")

Sends a message to the remote hub.

Parameters:

**buf** ([_bytes_](https://docs.pybricks.com/en/stable/micropython/builtins.html#ubuiltins.bytes "ubuiltins.bytes")) – The raw binary message to send.

read() → [bytes](https://docs.pybricks.com/en/stable/micropython/builtins.html#ubuiltins.bytes "ubuiltins.bytes")[¶](#pybricks.iodevices.LWP3Device.read "Permalink to this definition")

Retrieves the most recent message received from the remote hub.

If a message has not been received since the last read, the method will block until a message is received.

Returns:

The raw binary message.

_[await](https://docs.pybricks.com/en/stable/tools/index.html#pybricks.tools.await "pybricks.tools.await")_disconnect()[¶](#pybricks.iodevices.LWP3Device.disconnect "Permalink to this definition")

Disconnects the remote LWP3Device from the hub.
