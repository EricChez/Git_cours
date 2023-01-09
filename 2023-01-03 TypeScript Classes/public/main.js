import { Bird } from './Bird.js';
import { Robot } from './Robot.js';
import { Segment } from './Segment.js';
let ostrich = new Bird('Ostrich', 80, ['white', 'grey', 'black'], 2, false);
console.log(ostrich);
// ostrich.setWeight(90); // the old fashioned way
ostrich.weight = 14; // identified as setter
console.log(ostrich);
console.log(ostrich.weight); // identified as getter
//console.log(ostrich.canFly); // no access to private properties, and we should use setters and getters, but the console.log() will still print it
let segment = new Segment;
console.log(segment);
let segment2 = new Segment(45);
console.log(segment2);
let segment3 = new Segment(20, 64);
console.log(segment3);
let robotOne = new Robot('DFTGH555GT55');
console.log("Le robot un s'appelle " + robotOne.start());
console.log(robotOne.getName());
console.log(robotOne.getSerialNum());
console.log(robotOne.reset());
console.log(robotOne.getName());
console.log("Le robot un s'appelle désormais " + robotOne.start());
let robotTwo = new Robot(123456);
console.log("Le robot deux s'appelle " + robotTwo.start());
console.log(robotTwo.getName());
console.log(robotTwo.getSerialNum());
console.log(robotTwo.start());
