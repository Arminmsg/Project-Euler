/*
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * 
 * What is the largest prime factor of the number 600851475143 ?
*/

var num = 600851475143,
    sqrtNum = Math.floor(Math.sqrt(num)),
    prime = 0;

for ( var i = 1; i < sqrtNum; i++) {
  if ( num % i === 0) {
    for (var j = 2; j < i; j++){
      if (i % j === 0) {
        if ( prime < j) {
          prime = j;
        }
      }
    }
  };
};

console.log( prime );