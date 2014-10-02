/*
 * The sum of the squares of the first ten natural numbers is,
 * 
 * 12 + 22 + ... + 102 = 385
 * The square of the sum of the first ten natural numbers is,
 * 
 * (1 + 2 + ... + 10)2 = 552 = 3025
 * Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
 * 
 * Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

var x = [];

for(var i = 0; i < 100; i++) {
  x[i] = x.length + 1;
};

var y = x.reduce(function(prev, next) {
  return prev + next * next;
});

var z = x.reduce(function(prev, next){
  return prev + next;
}, 0);

function getDifference() {
  return z*z - y;
};