// -> Define tres objetos: 'machine', 'robot' y 'vehicle'
//    En la definición de `machine` añade la propiedad `motors` y asígnale null.
__
 
// OJO CON PONER ; DESPUES DE UNA PROPIEDAD
// SI HAY MÁS DE UNA, SE SEPARAN CON ,
let machine = {
	motors : null
};

let vehicle = {};
let robot = {};

// -> Hacemos que `machine` sea el prototipo de `robot` y `vehicle`
vehicle.__proto__ = machine;
robot.__proto__ = machine;

// -> Qué son `machine.motors`, `robot.motors` y `vehicle.motors`?
claim(machine.motors, null);
claim(robot.motors, null);
claim(vehicle.motors, null);

// -> Asigna `4` a `robot.motors`.
__

robot.motors = 4;

// -> Qué son `machine.motors`, `robot.motors` y `vehicle.motors` ahora?
claim(machine.motors, null);
claim(robot.motors, 4);
claim(vehicle.motors, null);


// ------------------------------------------------
// Exports de Common JS para verificación, no modificar
module.exports = {
  machine:  machine,
  vehicle:  vehicle,
  robot:    robot
}
