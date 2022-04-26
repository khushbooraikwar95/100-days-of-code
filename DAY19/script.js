'use strict';
// ============== Default Parameter in Function =====================================
const bookings = [];
const createBooking = function (flightNum, numPassenger = 1, price = 3000) {
  //ES5 : we used to pass below now we can pass in function parameter only like above
  //   numPassenger = numPassenger || 1;
  //   price = price || 3000;
  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  //   console.log(booking);
  bookings.push(booking);
};
createBooking('6E23');
createBooking('2A99', 2, 800);
createBooking('2A99', undefined, 800);

// ============= How passing Argument works: Value vs.Reference ==================

const flight = '6E326';
const khushboo = {
  name: 'Khushboo Raikwar',
  passport: 232323232,
};

const checkIn = function (flightNum, passenger) {
  //
  flightNum = 'LH99';
  passenger.name = 'Miss' + passenger.name;

  if (passenger.passport === 232323232) {
    alert('Check In!');
  } else {
    alert('Wrong passport!');
  }
};
// checkIn(flight, khushboo);
// console.log(flight);
// console.log(khushboo);

//==================================================
//
//========== First class and Higher order functions =========

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [frist, ...others] = str.split(' ');
  return [frist.toUpperCase(), ...others].join(' ');
};

//higher order function
const transformer = function (str, fn) {
  console.log(`original String : ${str}`);
  console.log(`transformed the string:  ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};
transformer('JavaScript is the best', upperFirstWord);

// Js uses callback all the time
const high5 = function () {
  console.log('😁');
};

document.body.addEventListener('click', high5); // high5 is call back function and AddEvenetListener is HOC
