# Xbox Controller

* [](https://docs.pybricks.com/en/stable/index.html)
* [iodevices – Custom devices](https://docs.pybricks.com/en/stable/iodevices/index.html)
* Xbox Controller

---

| ❌ | ❌ | ✅ | ✅ | ✅ | ✅ |
| - | - | - | - | - | - |

# Xbox Controller[¶](#xbox-controller "Permalink to this heading")

![../_images/xboxcontroller.png](https://docs.pybricks.com/en/stable/_images/xboxcontroller.png)

controller

_class_ XboxController[¶](#pybricks.iodevices.XboxController "Permalink to this definition")

Use the Microsoft® Xbox® controller as a sensor in your projects to control them remotely.

The hub will scan for the controller and connect to it. It will disconnect when the program ends.

For tips on connectivity and pairing, see [below](#xbox-controller-pairing).

controllerAis pressed

buttons.pressed() → Set\[[Button](https://docs.pybricks.com/en/stable/parameters/button.html#Button "Button")\][¶](#pybricks.iodevices.XboxController.buttons.pressed "Permalink to this definition")

Checks which buttons are currently pressed.

Returns:

Set of pressed buttons.

Buttons include:

> * `Button.A`, `Button.B`, `Button.X`, `Button.Y`.
> * `Button.UP`, `Button.DOWN`, `Button.LEFT`, `Button.RIGHT`(direction pad). At most two of these can be pressed at the same time.
> * `Button.LB` and `Button.RB` (bumpers).
> * `Button.LJ` and `Button.RJ` (pressing the joysticks).
> * `Button.VIEW`, `Button.MENU`, `Button.GUIDE` (the Xbox logo), and `Button.UPLOAD`.
> * `Button.P1`, `Button.P2`, `Button.P3`, and `Button.P4` (Elite Series 2 only). Pressing the paddles may also be detected as other button presses, depending on the currently active profile.

controllerleft joystick horizontal

controllerleft joystick vertical

joystick\_left() → Tuple[¶](#pybricks.iodevices.XboxController.joystick%5Fleft "Permalink to this definition")

Gets the left joystick position as percentages between -100% and 100%. The center position is (0, 0).

Returns:

Tuple of X (horizontal) and Y (vertical) position.

controllerright joystick horizontal

controllerright joystick vertical

joystick\_right() → Tuple[¶](#pybricks.iodevices.XboxController.joystick%5Fright "Permalink to this definition")

Gets the right joystick position as percentages between -100% and 100%. The center position is (0, 0).

Returns:

Tuple of X (horizontal) and Y (vertical) position.

controllerleft trigger

controllerright trigger

triggers() → Tuple[¶](#pybricks.iodevices.XboxController.triggers "Permalink to this definition")

Gets the left and right trigger positions as percentages between 0% and 100%.

Returns:

Tuple of left and right trigger positions.

controllerdirection pad

dpad() → [int](https://docs.pybricks.com/en/stable/micropython/builtins.html#ubuiltins.int "ubuiltins.int")[¶](#pybricks.iodevices.XboxController.dpad "Permalink to this definition")

Gets the direction-pad value. `1` is up, `2` is up-right, `3`is right, `4` is down-right, `5` is down, `6` is down-left,`7` is left, `8` is up-left, and `0` is not pressed.

This is essentially the same as reading the state of the`Button.UP`, `Button.RIGHT`, `Button.DOWN`, and `Button.LEFT`buttons, but this method conveniently returns a number that indicates a direction.

Returns:

Direction-pad position, indicating a direction.

controllerprofile

profile() → [int](https://docs.pybricks.com/en/stable/micropython/builtins.html#ubuiltins.int "ubuiltins.int")[¶](#pybricks.iodevices.XboxController.profile "Permalink to this definition")

Gets the current profile of the controller. Only available on the Xbox Elite Controller Series 2.

Returns:

Profile number.

controller100%200msrumble atfor

controller5001000list with200msrumble atfor

controller100%200msrumble atfor1times with pause100ms

_[await](https://docs.pybricks.com/en/stable/tools/index.html#pybricks.tools.await "pybricks.tools.await")_rumble(_power\=100_, _duration\=200_, _count\=1_, _delay\=100_)[¶](#pybricks.iodevices.XboxController.rumble "Permalink to this definition")

Makes the builtin actuators rumble, creating force feedback.

If you give a single `power` value, the left and right main actuators will both rumble with that power. For more fine-grained control, set`power` as a tuple of four values, which control the left main actuator, right main actuator, left trigger actuator, and the right trigger actuator, respectively. For example, `power=(0, 0, 100, 0)`makes the left trigger rumble at full power.

The rumble runs in the background while your program continues. To make your program wait, just pause the program for a matching duration. For one rumble, this equals `duration`. For multiple rumbles, this equals `count * (duration + delay)`.

Parameters:

* **power** ([_Number_](https://docs.pybricks.com/en/stable/signaltypes.html#numbers)_,_ _%_ _or_ [_tuple_](https://docs.pybricks.com/en/stable/micropython/builtins.html#ubuiltins.tuple "ubuiltins.tuple")) – Rumble power.
* **duration** ([_Number_](https://docs.pybricks.com/en/stable/signaltypes.html#numbers)_,_ _ms_) – Rumble duration.
* **count** ([_int_](https://docs.pybricks.com/en/stable/micropython/builtins.html#ubuiltins.int "ubuiltins.int")) – Rumble count.
* **delay** ([_Number_](https://docs.pybricks.com/en/stable/signaltypes.html#numbers)_,_ _ms_) – Delay before each rumble. Only if `count > 1`.

# Xbox Controller Pairing Instructions[¶](#xbox-controller-pairing-instructions "Permalink to this heading")

The first time you use a controller with a hub, you will need to pair them: Turn the controller on and then press and hold the pairing button on the back of the controller for a few seconds. When you release it, the Xbox button starts flashing more rapidly. Then start your program.

When pairing and the connection is succesful, the Xbox button will stop flashing and stay on for as long as the program is running.

## Repeat Connections[¶](#repeat-connections "Permalink to this heading")

If you keep using the same controller with the same hub, you can simply turn the controller on the next time and the hub will connect to it automatically when your program with this class runs.

The Xbox controller only accepts this simpler connection with the most recently connected device. So if you connect to your Xbox console again, or connect to another hub, you will need to pair them again as described above.

## Compatible Controllers[¶](#compatible-controllers "Permalink to this heading")

All Xbox controllers released since 2016 are compatible. This includes the controller from the One S (`1708` from 2016), the Elite Series 2 (`1797`from 2019), and the Series X/S (`1914` from 2020), which is the latest model as of this writing.

See also [this overview](https://en.wikipedia.org/wiki/Xbox%5FWireless%5FController#Summary) of model numbers including pictures of each controller.

## Updating the Xbox Controller[¶](#updating-the-xbox-controller "Permalink to this heading")

If you frequently use the Xbox Controller with your console, your controller is probably already up to date. If you have not used it for a while or if you bought one recently, you may need to update it.

To update the controller without a console, you can use the Xbox Accessories app on a Windows computer. You can download it from the Microsoft Store. Connect the controller via USB to the computer and follow the instructions in the app to click on "Update now".

## Technic Hub Limitations[¶](#technic-hub-limitations "Permalink to this heading")

Due to limitations of the Technic Hub, the hub will disconnect from the computer when searching for the Xbox controller. This means you will not be able to see output from the `print` command. Also, you'll have to connect to the computer again if you want to change your program.
