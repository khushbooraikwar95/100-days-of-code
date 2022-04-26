'use strict';

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];

//Slice: Extract part of any array without changing the original array
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2)); // will take last two elements of an array
console.log(arr.slice()); // shallow copy
console.log(arr.slice([...arr]));

// Splice :Extract part of any array but changes the original array (Array mutating)
// console.log(arr.splice(2)); // it will print [c,d,e]
arr.splice(-1);
console.log(arr); // [a, b] becuase c d e got extracted in above line (changed the originalarray)

// Reverse : it reverse the array but mutates the array also

const arr1 = ['j', 'k', 'l'];
console.log(arr1.reverse());
console.log(arr1);

//////////////////////////////////////////////////////////////////////////
//getting the array first emelemt // both are same
const num = [11, 23, 22, 40, 32];
console.log(num[0]);
console.log(num.at(0)); // both are same

//getting the array last emelemt // all are same
console.log(num[num.length - 1]);
console.log(num.slice(-1)[0]);
console.log(num.at(-1));
