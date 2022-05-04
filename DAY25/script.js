'use strict';

//////////////// Coding chanllange

const accounts = [
  -100, -400, 230, 650, 4000, -550, 670, 9000, -344, -899, 200, 300,
];
console.log(accounts);

const banckDepositeSUm = accounts
  .flatMap(accu => accu.accounts)
  .filter(move => move > 0)
  .reduce((sum, acc) => sum + acc, 0);
console.log(banckDepositeSUm);

////////////// Convert string ////////////

// this is a nice place --> This Is a Nice Place

const converTitleCase = function (title) {
  const exceptions = ['a', 'an', 'but', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(' ');
  return titleCase;
};
console.log(converTitleCase('this is a nice place'));
console.log(converTitleCase('this is an ANOTHER place'));
console.log(converTitleCase('and here is the another but with BETTER WEater'));
