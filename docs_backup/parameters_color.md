# Color¶

parameters – Parameters and constants
      Color
      
      
  
  

          
           
             
  



        
            
                
                    
                        
        
        ✅
        
        
        
        ✅
        
        
        
        ✅
        
        
        
        ✅
        
        
        
        ✅
        
        
        
        ✅
        
        
                    
                
            
        
        

Color¶


class Color(h, s=100, v=100)¶
Light or surface color.

Parameters:

h (Number, deg) – Hue.
s (Number, %) – Saturation.
v (Number, %) – Brightness value.



Saturated colors
These colors have maximum saturation and brightness value.
They differ only in hue.


RED: Color = Color(h=0, s=100, v=100)¶
_



ORANGE: Color = Color(h=30, s=100, v=100)¶
_



YELLOW: Color = Color(h=60, s=100, v=100)¶
_



GREEN: Color = Color(h=120, s=100, v=100)¶
_



CYAN: Color = Color(h=180, s=100, v=100)¶
_



BLUE: Color = Color(h=240, s=100, v=100)¶
_



VIOLET: Color = Color(h=270, s=100, v=100)¶
_



MAGENTA: Color = Color(h=300, s=100, v=100)¶
_

Unsaturated colors
These colors have zero hue and saturation. They differ only in brightness
value.
When detecting these colors using sensors, their values depend a lot
on the distance to the object. If the distance between the sensor and the
object is not constant in your robot, it is better to use only one of these
colors in your programs.


WHITE: Color = Color(h=0, s=0, v=100)¶
_



GRAY: Color = Color(h=0, s=0, v=50)¶
_



BLACK: Color = Color(h=0, s=0, v=10)¶
This represents dark objects that still reflect
a very small amount of light.
_



NONE: Color = Color(h=0, s=0, v=0)¶
This is total darkness, with no reflection or light at all.
_



Making your own colors
This example shows the basics of color properties, and how to define new colors.
from pybricks.parameters import Color

# You can print colors. Colors may be obtained from the Color class, or
# from sensors that return color measurements.
print(Color.RED)

# You can read hue, saturation, and value properties.
print(Color.RED.h, Color.RED.s, Color.RED.v)

# You can make your own colors. Saturation and value are 100 by default.
my_green = Color(h=125)
my_dark_green = Color(h=125, s=80, v=30)

# When you print custom colors, you see exactly how they were defined.
print(my_dark_green)

# You can also add colors to the builtin colors.
Color.MY_DARK_BLUE = Color(h=235, s=80, v=30)

# When you add them like this, printing them only shows its name. But you can
# still read h, s, v by reading its attributes.
print(Color.MY_DARK_BLUE)
print(Color.MY_DARK_BLUE.h, Color.MY_DARK_BLUE.s, Color.MY_DARK_BLUE.v)


This example shows more advanced use cases of the Color class.
from pybricks.parameters import Color

# Two colors are equal if their h, s, and v attributes are equal.
if Color.BLUE == Color(240, 100, 100):
    print("Yes, these colors are the same.")

# You can scale colors to change their brightness value.
red_dark = Color.RED * 0.5

# You can shift colors to change their hue.
red_shifted = Color.RED >> 30

# Colors are immutable, so you can't change h, s, or v of an existing object.
try:
    Color.GREEN.h = 125
except AttributeError:
    print("Sorry, can't change the hue of an existing color object!")

# But you can override builtin colors by defining a whole new color.
Color.GREEN = Color(h=125)

# You can access and store colors as class attributes, or as a dictionary.
print(Color.BLUE)
print(Color["BLUE"])
print(Color["BLUE"] is Color.BLUE)
print(Color)
print([c for c in Color])

# This allows you to update existing colors in a loop.
for name in ("BLUE", "RED", "GREEN"):
    Color[name] = Color(1, 2, 3)