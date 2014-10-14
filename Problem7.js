/*
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 *
 * What is the 10 001st prime number?
 */

var prime = [2];
    

for(j = 3; j < 110000; j++) {
  var currentNum = j,
      teilbar = false;
  for(var i = 0; i < prime.length; i++) {
      var moduloRest = currentNum % prime[i];
      if (moduloRest === 0) {
        teilbar = true;
      }
  }
  if(teilbar === false) {
    prime[prime.length] = currentNum;
  };
  teilbar = false;
}

console.log(prime[10000]);