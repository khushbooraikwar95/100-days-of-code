'use strict';

const Indigo = {
  airline: 'Indigo',
  iatacode: 'EH',
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name}  booked the seat on ${this.airline} flight ${this.iatacode}${flightNum}`
    );
  },
};

Indigo.book('453', 'Khushboo');
Indigo.book('4644', 'Jit');

//================= IIFE =============

const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

//IIFE
(function () {
  console.log('This will never run again');
})();

(() => console.log('This will ALSO never run again'))();
