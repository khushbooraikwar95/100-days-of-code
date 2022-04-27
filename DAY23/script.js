'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const movements = [200, -200, 340, -300, -20, 50, 400, -460];

/////////// Map ////////////////

const updatedmovements = movements.map(move => move * 2);
console.log(updatedmovements);

//using for of
const movement = [];
for (const move of movements) {
  movement.push(move * 2);
}
console.log(movement);

////// Filter ///////////////
const deposite = movements.filter(mov => {
  return mov > 0;
});
console.log(movements);
console.log(deposite);
console.log(movements);

//using for of
const depositeFor = [];
for (const move of movements) {
  if (move > 0) {
    depositeFor.push(move);
  }
}
console.log(depositeFor);

const withdrawal = movements.filter(move => {
  return move < 0;
});
console.log(withdrawal);

const withdrwalFor = [];

//using for of
for (const move of movements) {
  if (move < 0) {
    withdrwalFor.push(move);
  }
}
console.log(withdrwalFor);

/////////////// reduce ////////////

console.log(movements);

// accumulator is like a snowball
// reduce methods accepts two parameters :
//  first the accumulator function and second is the initial value of the accumulator
const balance = movements.reduce((accumulator, current, currentIndex, arr) => {
  //   console.log(`iteration : ${currentIndex} : ${accumulator}`);
  return accumulator + current;
}, 0);

console.log(balance);

//using for of

let balance2 = 0;

for (const move of movements) {
  balance2 = balance2 + move;
}
console.log(balance2);
