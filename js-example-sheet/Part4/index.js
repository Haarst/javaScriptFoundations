// Guidelines on how to write effective and clean code 

// Consider the following, which of these examples are easier to read? 

//Example A:


const x = function (z) {
  let w = 0;z.forEach(
function (q) {
    w += q;
});return w;
};

x([2, 2, 2]);

//Example B:

const sumArray = function (array) {
  let sum = 0;
  array.forEach(function (number) {
    sum += number;
  });
  return sum;
};

sumArray([2, 2, 2]);

// Both functions produce the same result, however function B produces clean code

// It is much easier to guess what is happening because variables and functions are named
// clearly. It follow a consistent indentation and logical pattern. 

// -------------------------------

// Naming variables / functions, consider the following

/*
 // Good
 function getPlayerScore();
 function getPlayerName();
 function getPlayerTag();
 
 // Bad
 function getUserScore();
 function fetchPlayerName();
 function retrievePlayer1Tag();
 */

 // using consistent vocabulary following allong with good name descriptive such as camelCase

 