'use strict';

const arr = [2, 3, 4];

const newArr = [...arr, 5];

// console.log(newArr);

// //Iterables: arrays,string, maps,sets,Not Objects
// const str = 'Khushboo';
// const letters = [...str, ' ', 'K.'];
// console.log(letters);
// console.log(...str);

//&& and || operators
// They can use any data type, they can return any data type,
// they do short cirutting : means if first value is truthy value they will immediatly return that value

// ie:

console.log(3 || 'khushboo'); // 3
console.log('' || 'khushboo'); // khushboo : because first value is falsy value so second operator will be evalued
console.log(true || 0); // true: first value is truthy
console.log(undefined || null); // null : undefined is the falsy value

console.log(undefined || '' || 0 || 'Hello' || 23 || null); //Hello: because Hello is first truthy value in the chain of OR operator

console.log('--------AND------');

console.log(0 && 'khushboo');
console.log(7 && 'khushboo');
console.log('hello' && 23 && null && 'khushboo');

console.log('------Nullish Coadliesing Operator ??');
//nullish: works on null or undefined NOT (0 or '')  " symbol - ??"
res.guest = 0;
const guestCorrect = res.guest ?? 10;
console.log(guestCorrect);
