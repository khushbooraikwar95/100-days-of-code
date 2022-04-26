'use strict';

////////////////////////// ForEach loop //////////////////////

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// possitive values are deposite and negetive values are withdrwal in this movements array
console.log('================ForOf========================');

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}
// above activity with forEach loop
console.log('================ForEach========================');
movements.forEach(movement => {
  //same as above
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});

///////////// forEach with Maps and sets  //////////////
console.log(
  '================forEach with Maps and sets========================'
);
//Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

//Set

const currenciesUniqe = new Set(['USD', 'GBP', 'INR', 'EUR', 'EUR', 'INR']);
console.log(currenciesUniqe);

currenciesUniqe.forEach((value, _, map) => {
  console.log(`${value}: ${value}`);
});
