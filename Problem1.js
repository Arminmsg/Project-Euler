/* 
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
 * The sum of these multiples is 23.
 * 
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */
 
var i = 0;
var maxNumber = null;
do {
  i += 1
  if ( i % 3 === 0 || i % 5 === 0 || i % 15 === 0) {
    maxNumber += i
    if ( i == 999 ) {
      console.log(maxNumber)
    };
  };
} while ( i < 999);