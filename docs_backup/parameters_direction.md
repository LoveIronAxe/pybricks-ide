# Direction¶

parameters – Parameters and constants
      Direction
      
      
  
  

          
           
             
  



        
            
                
                    
                        
        
        ✅
        
        
        
        ✅
        
        
        
        ✅
        
        
        
        ✅
        
        
        
        ✅
        
        
        
        ✅
        
        
                    
                
            
        
        

Direction¶


class Direction¶
Rotational direction for positive speed or angle values.


CLOCKWISE¶
A positive speed value should make the motor move clockwise.




COUNTERCLOCKWISE¶
A positive speed value should make the motor move counterclockwise.




positive_direction =
Positive speed:
Negative speed:



Direction.CLOCKWISE
clockwise
counterclockwise

Direction.COUNTERCLOCKWISE
counterclockwise
clockwise



In general, clockwise is defined by looking at the motor shaft, just
like looking at a clock. Some motors have two shafts. If in doubt,
refer to the diagram in the Motor class documentation.