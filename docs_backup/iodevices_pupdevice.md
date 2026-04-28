# Powered Up Device

* [](https://docs.pybricks.com/en/stable/index.html)
* [iodevices – Custom devices](https://docs.pybricks.com/en/stable/iodevices/index.html)
* Powered Up Device

---

| ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
| - | - | - | - | - | - |

# Powered Up Device[¶](#powered-up-device "Permalink to this heading")

![../_images/iodevice-pupdevice1.png](https://docs.pybricks.com/en/stable/_images/iodevice-pupdevice1.png)

_class_ PUPDevice(_port_)[¶](#pybricks.iodevices.PUPDevice "Permalink to this definition")

Powered Up motor or sensor.

Parameters:

**port** ([_Port_](https://docs.pybricks.com/en/stable/parameters/port.html#Port "Port")) – Port to which the device is connected.

info() → Dict[¶](#pybricks.iodevices.PUPDevice.info "Permalink to this definition")

Gets information about the device.

Returns:

Dictionary with information, such as the device `id`.

_[await](https://docs.pybricks.com/en/stable/tools/index.html#pybricks.tools.await "pybricks.tools.await")_read(_mode_) → Tuple[¶](#pybricks.iodevices.PUPDevice.read "Permalink to this definition")

Reads values from a given mode.

Parameters:

**mode** ([_int_](https://docs.pybricks.com/en/stable/micropython/builtins.html#ubuiltins.int "ubuiltins.int")) – Device mode.

Returns:

Values read from the sensor.

_[await](https://docs.pybricks.com/en/stable/tools/index.html#pybricks.tools.await "pybricks.tools.await")_write(_mode_, _data_)[¶](#pybricks.iodevices.PUPDevice.write "Permalink to this definition")

Writes values to the sensor. Only selected sensors and modes support this.

Parameters:

* **mode** ([_int_](https://docs.pybricks.com/en/stable/micropython/builtins.html#ubuiltins.int "ubuiltins.int")) – Device mode.
* **data** ([_tuple_](https://docs.pybricks.com/en/stable/micropython/builtins.html#ubuiltins.tuple "ubuiltins.tuple")) – Values to be written.

## Examples[¶](#examples "Permalink to this heading")

### Detecting devices[¶](#detecting-devices "Permalink to this heading")

```python
from pybricks.iodevices import PUPDevice
from pybricks.parameters import Port
from uerrno import ENODEV

# Dictionary of device identifiers along with their name.
device_names = {
    # pybricks.pupdevices.DCMotor
    1: "Wedo 2.0 Medium Motor",
    2: "Powered Up Train Motor",
    # pybricks.pupdevices.Light
    8: "Powered Up Light",
    # pybricks.pupdevices.Motor
    38: "BOOST Interactive Motor",
    46: "Technic Large Motor",
    47: "Technic Extra Large Motor",
    48: "SPIKE Medium Angular Motor",
    49: "SPIKE Large Angular Motor",
    65: "SPIKE Small Angular Motor",
    75: "Technic Medium Angular Motor",
    76: "Technic Large Angular Motor",
    # pybricks.pupdevices.TiltSensor
    34: "Wedo 2.0 Tilt Sensor",
    # pybricks.pupdevices.InfraredSensor
    35: "Wedo 2.0 Infrared Motion Sensor",
    # pybricks.pupdevices.ColorDistanceSensor
    37: "BOOST Color Distance Sensor",
    # pybricks.pupdevices.ColorSensor
    61: "SPIKE Color Sensor",
    # pybricks.pupdevices.UltrasonicSensor
    62: "SPIKE Ultrasonic Sensor",
    # pybricks.pupdevices.ForceSensor
    63: "SPIKE Force Sensor",
    # pybricks.pupdevices.ColorLightMatrix
    64: "SPIKE 3x3 Color Light Matrix",
}

# Make a list of known ports.
ports = [Port.A, Port.B]

# On hubs that support it, add more ports.
try:
    ports.append(Port.C)
    ports.append(Port.D)
except AttributeError:
    pass

# On hubs that support it, add more ports.
try:
    ports.append(Port.E)
    ports.append(Port.F)
except AttributeError:
    pass

# Go through all available ports.
for port in ports:

    # Try to get the device, if it is attached.
    try:
        device = PUPDevice(port)
    except OSError as ex:
        if ex.args[0] == ENODEV:
            # No device found on this port.
            print(port, ": ---")
            continue
        else:
            raise

    # Get the device id
    id = device.info()["id"]

    # Look up the name.
    try:
        print(port, ":", device_names[id])
    except KeyError:
        print(port, ":", "Unknown device with ID", id)
```
