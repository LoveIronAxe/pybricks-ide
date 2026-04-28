# Stop¶

parameters – Parameters and constants
      Stop
      
      
  
  

          
           
             
  



        
            
                
                    
                        
        
        ✅
        
        
        
        ✅
        
        
        
        ✅
        
        
        
        ✅
        
        
        
        ✅
        
        
        
        ✅
        
        
                    
                
            
        
        

Stop¶


class Stop¶
Action after the motor stops.


COAST¶
Let the motor move freely.




COAST_SMART¶
Let the motor move freely. For the next relative angle maneuver,
take the last target angle (instead of the current angle) as the new
starting point. This reduces cumulative errors. This will apply only if the
current angle is less than twice the configured position tolerance.




BRAKE¶
Passively resist small external forces.




HOLD¶
Keep controlling the motor to hold it at the commanded angle.




NONE¶
Do not decelerate when approaching the target position. This can be used
to concatenate multiple motor or drive base maneuvers without stopping. If
no further commands are given, the motor will proceed to run indefinitely
at the given speed.


The following table shows how each of the basic stop types add an extra
level of resistance to motion. In these examples, m is a
Motor and
and d is a DriveBase. The
examples also show how running at zero speed compares to these stop types.



Type



Friction



Back
EMF



Speed
kept at 0



Angle kept
at target



Examples





Coast








m.stop()
m.run_target(500, 90, Stop.COAST)



Brake











m.brake()
m.run_target(500, 90, Stop.BRAKE)


















m.run(0)
d.drive(0, 0)



Hold

















m.hold()
m.run_target(500, 90, Stop.HOLD)
d.straight(0)
d.straight(100)