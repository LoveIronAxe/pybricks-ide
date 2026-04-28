# Move Hub — pybricks v3.6.1 documentation


           
             
  



        
            | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| --- | --- | --- | --- | --- | --- |


        
        

# Move Hub¶



![../_images/movehub.png](../_images/movehub.png)



move hub

move hubtop side axiszfront side axisxchannel0channels12

**class MoveHub(top_side=Axis.Z, front_side=Axis.X, broadcast_channel=None, observe_channels=[])¶**

LEGO® BOOST Move Hub.

Parameters:

top_side (Axis) – The axis that passes through the top side of
the hub.
front_side (Axis) – The axis that passes through the front side of
the hub.
broadcast_channel – Channel number (0 to 255) used to broadcast data.
Choose None when not using broadcasting.
observe_channels – A list of channels to listen to when hub.ble.observe() is
called. Listening to more channels requires more memory.
Default is an empty list (no channels).




Changed in version 3.3: Added broadcast_channel and observe_channels arguments.

Using the hub status light

redmove hublighton


light.on(color)¶
Turns on the light at the specified color.

Parameters:
color (Color) – Color of the light.





move hublightoff


light.off()¶
Turns off the light.




light.blink(color, durations)¶
Blinks the light at a given color by turning it on and off for given
durations.
The light keeps blinking indefinitely while the rest of your
program keeps running.
This method provides a simple way to make basic but useful patterns.
For more generic and multi-color patterns, use animate()
instead.

Parameters:

color (Color) – Color of the light.
durations (list) – Sequence of time values of the
form [on_1, off_1, on_2, off_2, ...].







light.animate(colors, interval)¶
Animates the light with a sequence of colors, shown one by
one for the given interval.
The animation runs in the background while the rest of your program
keeps running. When the animation completes, it repeats.

Parameters:

colors (list) – Sequence of Color
values.
interval (Number, ms) – Time between color updates.





Using the IMU

move hubtop sideis up

imu.up() → Side¶
Checks which side of the hub currently faces upward.

Returns:
Side.TOP, Side.BOTTOM, Side.LEFT, Side.RIGHT,
Side.FRONT or Side.BACK.





move hubgetpitch

move hubgetroll


imu.tilt() → Tuple[int, int]¶
Gets the pitch and roll angles. This is relative to the
user-specified neutral orientation.
The order of rotation is pitch-then-roll. This is equivalent to a
positive rotation along the robot y-axis and then a positive rotation
along the x-axis.

Returns:
Tuple of pitch and roll angles in degrees.





move hubxacceleration along


imu.acceleration() → Tuple[int, int, int]: mm/s²¶
Gets the acceleration of the device.

Returns:
Acceleration along all three axes.



Changed in version 3.2: Changed acceleration units from m/s² to mm/s².



Using connectionless Bluetooth messaging

prime hub000list withbroadcast


awaitPrimeHub.ble.broadcast(data)¶
Starts broadcasting the given data on
the broadcast_channel you selected when initializing the hub.
Data may be of type int, float, str, bytes,
True, or False. It can also be a list or tuple of these.
Choose None to stop broadcasting. This helps improve performance
when you don’t need the broadcast feature, especially when observing
at the same time.
The total data size is quite limited (26 bytes). True and
False take 1 byte each. float takes 5 bytes. int takes 2 to
5 bytes depending on how big the number is. str and bytes take
the number of bytes in the object plus one extra byte.
When multitasking, only one task can broadcast at a time. To broadcast
information from multiple tasks (or block stacks), you could use a
dedicated separate task that broadcast new values when one or more
variables change.

Parameters:
data – The value or values to be broadcast.



New in version 3.3.




prime hubobserve0


PrimeHub.ble.observe(channel) → bool | int | float | str | bytes | tuple | None¶
Retrieves the last observed data for a given channel.
Receiving data is more reliable when the hub is not connected
to a computer or other devices at the same time.

Parameters:
channel (int) – The channel to observe (0 to 255).

Returns:
The received data in the same format as it was sent, or None
if no recent data is available.



New in version 3.3.





ble.signal_strength(channel) → int: dBm¶
Gets the average signal strength in dBm for the given channel.
This indicates how near the broadcasting device is. Nearby devices
may have a signal strength around -40 dBm, while far away devices
might have a signal strength around -70 dBm.

Parameters:
channel (int) – The channel number (0 to 255).

Returns:
The signal strength or -128 if there is no recent observed data.



New in version 3.3.





ble.version() → str¶
Gets the firmware version from the Bluetooth chip.

New in version 3.3.



Using the battery

move hubbatteryvoltage


battery.voltage() → int: mV¶
Gets the voltage of the battery.

Returns:
Battery voltage.





move hubbatterycurrent


battery.current() → int: mA¶
Gets the current supplied by the battery.

Returns:
Battery current.




Button and system control

prime hubcenteris pressed


buttons.pressed() → Set[Button]¶
Checks which buttons are currently pressed.

Returns:
Set of pressed buttons.






system.info() → dict¶
Gets information about the hub as a dictionary with the following keys:


"name": The hub name. This is the name you see when connecting
via Bluetooth.
"reset_reason": Why the hub (re)booted. It is 0 if the hub
was previously powered off normally. It is 1 if the hub rebooted
automatically, like after a firmware update. It is 2 if the hub
previously crashed due to a watchdog timeout, which indicates a
firmware issue.
"host_connected_ble": True if the hub is connected to a
computer, tablet, or phone via Bluetooth, and False otherwise.
"program_start_type": It is 1 if the program started
automatically when the hub was powered on. It is 2 if the program
was started with the hub buttons. It is 3 if the program was
started from your connected computer.



Returns:
A dictionary with system info.



Changed in version 3.6: The name and reset reason where previously available as separate
methods. Now they are included in the info dictionary. The methods
are still available for backwards compatibility.




move hubcenterstop button is
move hubnonestop button is

system.set_stop_button(button)¶
Sets the button or button combination that stops a running script.
Normally, the center button is used to stop a running script. You can
change or disable this behavior in order to use the button for other
purposes.

Parameters:
button (Button) – A button such
as Button.CENTER,
or a tuple of multiple buttons. Choose None to disable the
stop button altogether. If you do, you can still turn the hub
off by holding the center button for three seconds.






system.storage(offset, write=)¶

system.storage(offset, read=) → bytes
Reads or writes binary data to persistent storage.
This lets you store data that can be used the next time you run the
program.
The data will be saved to flash memory when you turn the hub off
normally. It will not be saved if the batteries are removed while the
hub is still running.
Once saved, the data will remain available even after you remove the
batteries.

Parameters:

offset (int) – The offset from the start of the user storage memory, in bytes.
read (int) – The number of bytes to read. Omit this argument when writing.
write (bytes) – The bytes to write. Omit this argument when reading.


Returns:
The bytes read if reading, otherwise None.

Raises:
ValueError – If you try to read or write data outside of the allowed range.


You can store up to 128 bytes of data on this hub. The data is cleared
when you update the Pybricks firmware or if you restore the original
firmware.




system.reset_storage()¶
Resets all user settings to default values and erases user programs.



move hubshut down

system.shutdown()¶
Stops your program and shuts the hub down.



## Status light examples¶



### Turning the light on and off¶


```
from pybricks.hubs import MoveHub
from pybricks.parameters import Color
from pybricks.tools import wait

# Initialize the hub.
hub = MoveHub()

# Turn the light on and off 5 times.
for i in range(5):

    hub.light.on(Color.RED)
    wait(1000)

    hub.light.off()
    wait(500)
```




### Making the light blink¶


```
from pybricks.hubs import MoveHub
from pybricks.parameters import Color
from pybricks.tools import wait

# Initialize the hub
hub = MoveHub()

# Keep blinking red on and off.
hub.light.blink(Color.RED, [500, 500])

wait(10000)

# Keep blinking green slowly and then quickly.
hub.light.blink(Color.GREEN, [500, 500, 50, 900])

wait(10000)
```





## IMU examples¶



### Testing which way is up¶


```
from pybricks.hubs import MoveHub
from pybricks.parameters import Color, Side
from pybricks.tools import wait

# Initialize the hub.
hub = MoveHub()

# Define colors for each side in a dictionary.
SIDE_COLORS = {
    Side.TOP: Color.RED,
    Side.BOTTOM: Color.BLUE,
    Side.LEFT: Color.GREEN,
    Side.RIGHT: Color.YELLOW,
    Side.FRONT: Color.MAGENTA,
    Side.BACK: Color.BLACK,
}

# Keep updating the color based on detected up side.
while True:

    # Check which side of the hub is up.
    up_side = hub.imu.up()

    # Change the color based on the side.
    hub.light.on(SIDE_COLORS[up_side])

    # Also print the result.
    print(up_side)
    wait(50)
```




### Reading acceleration¶


```
from pybricks.hubs import MoveHub
from pybricks.tools import wait

# Initialize the hub.
hub = MoveHub()

# Get the acceleration tuple.
print(hub.imu.acceleration())

while True:
    # Get individual acceleration values.
    x, y, z = hub.imu.acceleration()
    print(x, y, z)

    # Wait so we can see what we printed.
    wait(100)
```





## Bluetooth examples¶



### Broadcasting data to other hubs¶


```
from pybricks.hubs import MoveHub
from pybricks.pupdevices import Motor
from pybricks.parameters import Port
from pybricks.tools import wait

# Initialize the hub.
hub = MoveHub(broadcast_channel=1)

# Initialize the motors.
left_motor = Motor(Port.A)
right_motor = Motor(Port.B)

while True:
    # Read the motor angles to be sent to the other hub.
    left_angle = left_motor.angle()
    right_angle = right_motor.angle()

    # Set the broadcast data and start broadcasting if not already doing so.
    data = (left_angle, right_angle)
    hub.ble.broadcast(data)

    # Broadcasts are only sent every 100 milliseconds, so there is no reason
    # to call the broadcast() method more often than that.
    wait(100)
```




### Observing data from other hubs¶


```
from pybricks.hubs import MoveHub
from pybricks.pupdevices import Motor
from pybricks.parameters import Color, Port
from pybricks.tools import wait

# Initialize the hub.
hub = MoveHub(observe_channels=[1])

# Initialize the motors.
left_motor = Motor(Port.A)
right_motor = Motor(Port.B)

while True:
    # Receive broadcast from the other hub.

    data = hub.ble.observe(1)

    if data is None:
        # No data has been received in the last 1 second.
        hub.light.on(Color.RED)
    else:
        # Data was received and is less that one second old.
        hub.light.on(Color.GREEN)

        # *data* contains the same values in the same order
        # that were passed to hub.ble.broadcast() on the
        # other hub.
        left_angle, right_angle = data

        # Make the motors on this hub mirror the position of the
        # motors on the other hub.
        left_motor.track_target(left_angle)
        right_motor.track_target(right_angle)

    # Broadcasts are only sent every 100 milliseconds, so there is
    # no reason to call the observe() method more often than that.
    wait(100)
```





## Button and system examples¶



### Using the stop button during your program¶


```
from pybricks.hubs import MoveHub
from pybricks.parameters import Color, Button
from pybricks.tools import wait, StopWatch

# Initialize the hub.
hub = MoveHub()

# Disable the stop button.
hub.system.set_stop_button(None)

# Check the button for 5 seconds.
watch = StopWatch()
while watch.time() < 5000:

    # Set light to green if pressed, else red.
    if hub.buttons.pressed():
        hub.light.on(Color.GREEN)
    else:
        hub.light.on(Color.RED)

# Enable the stop button again.
hub.system.set_stop_button(Button.CENTER)

# Now you can press the stop button as usual.
wait(5000)
```




### Turning the hub off¶


```
from pybricks.hubs import MoveHub
from pybricks.tools import wait

# Initialize the hub.
hub = MoveHub()

# Say goodbye and give some time to send it.
print("Goodbye!")
wait(100)

# Shut the hub down.
hub.system.shutdown()
```




### Making random numbers¶


The Move Hub does not include the urandom module. If you need random
numbers in your application, you can try a variation of the following example.


To make it work better, change the initial value of _rand to something
that is truly random in your application. You could use the IMU acceleration
or a sensor value, for example.


```
from pybricks.hubs import MoveHub

# Initialize the hub.
hub = MoveHub()

# Initialize "random" seed.
_rand = hub.battery.voltage() + hub.battery.current()


# Return a random integer N such that a <= N <= b.
def randint(a, b):
    global _rand
    _rand = 75 * _rand % 65537  # Lehmer
    return _rand * (b - a + 1) // 65537 + a


# Generate a few example numbers.
for i in range(5):
    print(randint(0, 1000))
```







           
          