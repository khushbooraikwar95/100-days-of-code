'use strict';

const movements = [200, 450, -450, 3000, -650, 800, 722];

console.log(movements);
//Equality
console.log(movements.includes(3000));

//Condition  SOME

const anyDeposite = movements.some(move => move > 0); //some: returns boolean value
console.log(anyDeposite);

//EVERY : it returns true if all the elements in the array satisfied the condition that we passed in
console.log(movements.every(move => move > 0));
