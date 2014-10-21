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

var foo = primes.reduce(function(current, prev) {
    return current + prev;
});
