/*
 *The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 *
 *Find the sum of all the primes below two million.
 */

var allNum = [];
var primes = [];
//Creates numbers
for (var i = 2; i < 2000000; i++) {
    allNum.push(i);
};

//It doesn't run the whole primes array again
var i = 0;

while(allNum.length > 0) {
    for( i; i < primes.length; i++) {
        for(var j = 0; j < allNum.length; j++) {
            allNum[j] % primes[i] === 0 ? allNum.splice(j, 1) : "" ;
        }
    }
    primes[primes.length] = allNum.shift();

}

var primeSum = primes.reduce(function(current, prev) {
    return current + prev;
});
