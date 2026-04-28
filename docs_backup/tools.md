# tools – General purpose tools — pybricks v3.6.1 documentation

v3.6
PYBRICKS MODULES

- hubs – Built-in hub functions
- pupdevices – Motors, sensors, lights
- iodevices – Custom devices
- parameters – Parameters and constants
- tools – General purpose tools
Timing tools
Input tools
Linear algebra tools
Multitasking
- robotics – Robotics and drive bases
- Signals and Units
CODE WITH BLOCKS

- Other blocks
MICROPYTHON MODULES

- Built-in classes and functions
- Exceptions and errors
- micropython – MicroPython internals
- uerrno – Error codes
- uio – Input/output streams
- ujson – JSON encoding and decoding
- umath – Math functions
- urandom – Pseudo-random numbers
- uselect – Wait for events
- ustruct – Pack and unpack binary data
- usys – System specific functions
pybricks
- tools – General purpose tools
| ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

## tools – General purpose tools¶

Common tools for timing, data logging, and linear algebra.


## Timing tools¶

await
wait
(
time
)
¶
Pauses the user program for a specified amount of time.

Parameters
:
time (Number, ms) – How long to wait.

class
StopWatch
¶
A stopwatch to measure time intervals. Similar to the stopwatch feature on your phone.

time
(
)
→
int:
ms
¶
Gets the current time of the stopwatch.

Returns
:
Elapsed time.

pause
(
)
¶
Pauses the stopwatch.

resume
(
)
¶
Resumes the stopwatch.

reset
(
)
¶
Resets the stopwatch time to 0.

The run state is unaffected:

- If it was paused, it stays paused (but now at 0).
- If it was running, it stays running (but starting again from 0).

## Input tools¶

read_input_byte
(
)
→
int
|
str
|
None
¶
Reads one byte from standard input without blocking and removes it from the input buffer.

Parameters
:
- last (bool) – Choose True to read the last (most recent) byte in the buffer and discard the rest. Choose False to read only the first (oldest) byte.
- chr (bool) – Choose True to convert the result to a one-character string.
Returns
:
The byte that was read, as a numeric value (0 to 255) or string (e.g. "B"). Returns None if no data is available. If chr=True, it also return None if the byte that was read is not printable as a character.

Changed in version 3.3: Added last and chr options.

| ❌ | ❌ | ❌ | ✅ | ✅ | ❌ |
hub_menu
(
symbol1
,
symbol2
,
...
)
→
int
|
str
¶
Shows a menu on the hub display and waits for the user to select an item using the buttons. Can be used in your own menu-program that lets you choose which of your other programs to run.

Note that this is just a convenience function that combines the display, buttons, and waits to make a simple menu. This means that it can be used anywhere in a program, not just at the start.

Parameters
:
- symbol1 (int or str) – The first symbol to show in the menu.
- symbol2 (int or str) – The second symbol, and so on…
Returns
:
The selected symbol.


```
from pybricks.tools import hub_menu

# This example assumes that you have three other programs in Pybricks Code,
# called "fly_mission", "drive_mission", and "zigzag". This example creates a
# menu that lets you pick which one to run.

# Choose a letter.
selected = hub_menu("F", "D", "Z")

# Based on the selection, run a program.
if selected == "F":
    import fly_mission
elif selected == "D":
    import drive_mission
elif selected == "Z":
    import zigzag

```


## Linear algebra tools¶

Changed in version 3.3: These tools were previously located in the pybricks.geometry module.

| ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
class
Matrix
(
rows
)
¶
Mathematical representation of a matrix. It supports addition (A + B), subtraction (A - B), and matrix multiplication (A * B) for matrices of compatible size.

It also supports scalar multiplication (c * A or A * c) and scalar division (A / c).

A Matrix object is immutable.

Parameters
:
rows (list) – List of rows. Each row is itself a list of numbers.

T
¶
Returns a new Matrix that is the transpose of the original.

shape
¶
Returns a tuple (m, n), where m is the number of rows and n is the number of columns.

| ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
vector
(
x
,
y
)
→
Matrix
¶
vector
(
x
,
y
,
z
)
→
Matrix
Convenience function to create a Matrix with the shape (2, 1) or (3, 1).

Parameters
:
- x (float) – x-coordinate of the vector.
- y (float) – y-coordinate of the vector.
- z (float) – z-coordinate of the vector (optional).
Returns
:
A matrix with the shape of a column vector.

cross
(
a
,
b
)
→
Matrix
¶
Gets the cross product a × b of two vectors.

Parameters
:
- a (Matrix) – A three-dimensional vector.
- b (Matrix) – A three-dimensional vector.
Returns
:
The cross product, also a three-dimensional vector.


## Multitasking¶

New in version 3.3.

Pybricks supports cooperative multitasking using the async and await keywords. This allows operations that normally take some time to complete to run in parallel with other operations.

await
multitask
(
coroutine1
,
coroutine2
,
...
)
→
Tuple
¶
Runs multiple coroutines concurrently. This creates a new coroutine that can be used like any other, including in another multitask statement.

Parameters
:
- coroutines (coroutine, coroutine, ...) – One or more coroutines to run in parallel.
- race (bool) – Choose False to wait for all coroutines to finish. Choose True to wait for one coroutine to finish and then cancel the others, as if it’s a “race”.
Returns
:
Tuple of the return values of each coroutine. Unfinished coroutines will have None as their return value.

run_task
(
coroutine
)
→
bool
|
None
¶
Runs a coroutine from start to finish while blocking the rest of the program. This is used primarily to run the main coroutine of a program.

Calls to this function are not allowed to be nested.

Parameters
:
coroutine (coroutine) – The main coroutine to run.

Returns
:
If no coroutine is given, this function returns whether the run loop is currently active (True) or not (False).

The following example shows how to use multitasking to make a robot drive forward, then turn and move a gripper at the same time, and then drive backward.


```
from pybricks.pupdevices import Motor
from pybricks.parameters import Direction, Port
from pybricks.robotics import DriveBase
from pybricks.tools import multitask, run_task

# Set up all devices.
left = Motor(Port.A, Direction.COUNTERCLOCKWISE)
right = Motor(Port.B)
gripper = Motor(Port.C)
drive_base = DriveBase(left, right, 56, 114)


# Move the gripper up and down.
async def move_gripper():
    await gripper.run_angle(500, -90)
    await gripper.run_angle(500, 90)


# Drive forward, turn move gripper at the same time, and drive backward.
async def main():
    await drive_base.straight(250)
    await multitask(drive_base.turn(90), move_gripper())
    await drive_base.straight(-250)


# Runs the main program from start to finish.
run_task(main())

```

class
coroutine
¶
class
await
¶
Whenever you see a function or method prefixed by await, this means that it supports multitasking. When running a coroutine with run_task, all methods and functions prefixed by await will act as coroutines.

If you don’t use multitasking, you can ignore the await keyword and write programs as usual. Specifically, when run_task is not used, functions prefixed by await will act as normal functions.

Previous
Next
© Copyright 2018-2023 The Pybricks Authors.

Built with
Sphinx
using a
theme
provided by
Read the Docs
.
LEGO, the LEGO logo, MINDSTORMS and the MINDSTORMS EV3 logo are               trademarks and/or copyrights of the LEGO Group of companies                which does not sponsor, authorize or endorse this site.
jQuery(function () {
          SphinxRtdTheme.Navigation.enable(true);
      });