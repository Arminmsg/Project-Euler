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