# Infrared Sensor

* [](https://docs.pybricks.com/en/stable/index.html)
* [pupdevices – Motors, sensors, lights](https://docs.pybricks.com/en/stable/pupdevices/index.html)
* Infrared Sensor

---

# Infrared Sensor

A infrared sensor on

`class` InfraredSensor(_port_)

LEGO® Powered Up Infrared Sensor.

Parameters:

**port** ([Port](https://docs.pybricks.com/en/stable/parameters/port.html#Port "Port")) – Port to which the sensor is connected.

`await` distance() → int: %

Measures the relative distance between the sensor and an object using infrared light.

Returns:

Distance ranging from 0% (closest) to 100% (farthest).

`await` reflection() → int: %

Measures the reflection of a surface using an infrared light.

Returns:

Measured reflection, ranging from 0% (no reflection) to 100% (high reflection).

`await` count() → int

Counts the number of objects that have passed by the sensor.

Returns:

Number of objects counted.

## Examples

### Measuring distance, object count, and reflection

```python
from pybricks.pupdevices import InfraredSensor
from pybricks.parameters import Port
from pybricks.tools import wait

# Initialize the sensor.
ir = InfraredSensor(Port.A)

while True:
    # Read all the information we can get from this sensor.
    dist = ir.distance()
    count = ir.count()
    ref = ir.reflection()

    # Print the values
    print("Distance:", dist, "Count:", count, "Reflection:", ref)

    # Move the sensor around and move your hands in front
    # of it to see what happens to the values.

    # Wait some time so we can read what is printed.
    wait(200)
```
