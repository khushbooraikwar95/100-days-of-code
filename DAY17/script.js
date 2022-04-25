'use strict';

// String Methods

const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(plane[0]);
console.log('B737'[0]);
console.log(airline.length);
console.log('B737'.length);
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));
console.log(airline.slice(4)); // 4 is begin parameter here
console.log(airline.slice(4, 7)); // 4 is begin parameter here and 7 is ending parameter also end value is not included
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //B and E are middle seat
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat!');
  else console.log('You got lucky');
};
checkMiddleSeat('11B');
checkMiddleSeat('11C');
checkMiddleSeat('3E');

console.log(new String('Khushboo'));
console.log(typeof new String('Khushboo'));
console.log(typeof new String('Khushboo').slice(1));

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fix capatalization in name
const passenger = 'kHuShbOO';
const passengerLower = passenger.toLowerCase();
console.log(passengerLower);
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); //Khushboo

// replacing
const priceIN = '2,88,97₹';
const priceUS = priceIN.replace('₹', '$').replace(',', '').replace(',', '');
console.log(priceUS);

// Boolean methods
const planeIN = 'A320neo';
console.log(planeIN.includes('A')); // true

const planeIND = 'A320neo';
console.log(planeIND.startsWith('a')); //false

const planeINDIA = 'A320neo';
console.log(planeINDIA.endsWith('o')); //true

//Split method: works as devider string
console.log('a+very+nice+String'.split('+'));
console.log('Khushboo Raikwar'.split(' '));

const [firstName, lastName] = 'Khushboo Raikwar'.split(' ');

const newname = ['Miss', firstName, lastName.toUpperCase()].join(' ');
console.log(newname);

const capitalizeName = function (name) {
  const names = name.split(' ');
  console.log(names);
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1)); // First way of achieving this
    namesUpper.push(n.replace(n[0], n[0].toUpperCase())); // Second way of doing this
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('khushboo and raikwar gupta');
capitalizeName('khushboo gupta');

//Padding a String : Means to add a number of characters to the string untill the string has a certain desire length
const message = 'Go to gate 23';
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('Khush'.padStart(25, '+').padEnd(20, '+'));

//Real world example of padding : creditcard number is masked with some symbol

const maskedCreditCard = function (number) {
  //convert number to string
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskedCreditCard(82696202581304));
console.log(maskedCreditCard('82691212121304'));

//Repeat method
const message1 = 'Bad Weather.... All Departures Delayed';
console.log(message1.repeat(5));

const planeInLine = function (n) {
  console.log(`Threr are ${n} planes in line ${'✈️'.repeat(n)}`);
};
planeInLine(5);
planeInLine(3);
planeInLine(12);
