/*
 * A palindromic number reads the same both ways.
 * The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 *
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */


var palindrom = 0;

for( var i = 100; i < 1000; i++) {

  for( var j = 100; j < 1000; j++) {

    var foo = i * j;
    var fooReverse = foo.toString().split("").reverse().join("");
    if( foo == fooReverse) {
      if ( foo > palindrom ) {
        palindrom = foo;
      }
    }

  }
}