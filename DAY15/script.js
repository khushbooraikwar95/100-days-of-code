'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, adress }) {
    console.log(
      `Orcer Recieved at ${time} on my adress ${adress} from ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} `
    );
  },
};

restaurant.orderDelivery({
  time: '22:30',
  adress: 'CoralCasa',
  mainIndex: 2,
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

//

const [first, , , second] = restaurant.categories;
// console.log(first, second);

const [starter, mainCOurse] = restaurant.order(2, 0);
// console.log(starter, mainCOurse);

// Array Destructuring
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// const Khushboo = ['React', 'Redux', 'JavaScript', 'HTML', 'CSS'];

// const [a1, b1, c1, d1, e1] = Khushboo;
// console.log(a1, b1, c1, d1, e1);

const Obj = {
  Name: 'khushboo',
  SName: 'Raikwar',
  Age: 25,
  Location: 'Bangalore',
};

const { Name, SName, Age, Location } = Obj;
// console.log(Name, SName, Age, Location);

const nested = [2, 3, [4, 5]];
const [i, , [j, k]] = nested;
// console.log(i, j, k);

//default values
const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

//Mutating valiables

let a = 10;
let b = 20;
const obj = { a: 2, b: 3, c: 4 };

({ a, b } = obj);
// console.log(a, b);

//Nested Object

const Khushboo = {
  Name1: 'khushboo',
  SName1: 'Raikwar',
  Age1: 25,
  Location1: 'Bangalore',
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const {
  fri: { open: o, close: c },
} = openingHours;
// console.log(o, c);
