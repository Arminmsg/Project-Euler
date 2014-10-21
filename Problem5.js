/*
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 *
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

var numbers = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

var smallestNum = 0;

var i = 1;

while(smallestNum === 0) {
    var currentNum = 20 * i;
    
    //Changes if the current Nummber is not divisible by every number in numbers array
    var moduloZero = true;

    for(var j = 0; j < numbers.length; j++) {
        if(currentNum % numbers[j] > 0) {
            moduloZero = false;
        }
    }
    if(moduloZero) {
        smallestNum = currentNum;
    }
    i++;
}
