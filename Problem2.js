/*
 *Each new term in the Fibonacci sequence is generated by adding the previous two terms. 
 *By starting with 1 and 2, the first 10 terms will be:
 *
 *1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 *
 *By considering the terms in the Fibonacci sequence whose values do not exceed four million, 
 *find the sum of the even-valued terms.
 */


var num1 = 1;
    num2 = 2,
    maxValue = 4e6,
    fNumbers = num2;

do {
  num1 += num2;
  if (num1 > maxValue) {
    break;
  } else {
    if (num1 % 2 === 0) {
      console.log(num1);
      fNumbers += num1;
    };
  };
  num2 += num1;
  if (num2 > maxValue) {
    break;
  } else {
    if (num2 % 2 === 0){
    console.log(num2);
    fNumbers += num2;
    };
  };
} while ( num1 < maxValue || num2 < maxValue);


console.log(fNumbers);