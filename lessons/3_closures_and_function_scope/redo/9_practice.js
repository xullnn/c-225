var sum = 0;
var numbers;

sum += 10;
sum += 31;

numbers = [1, 7, -3, 3];

function sum(arr) { // function name collides variable name
  return arr.reduce(function(sum, number) {
    sum += number;
    return sum;
  }, 0);
}

sum += sum(numbers);  // ?

//

var sum = 0;
var numbers;

sum += 10;
sum += 31;

numbers = [1, 7, -3, 3];

let result = (function(arr) { // function name collides variable name
  return arr.reduce(function(sum, number) {
    sum += number;
    return sum;
  }, 0);
})(numbers)

sum += result;  // ?

//

function countdown(start) {
  (function() {
    for(let i = start; i >= 0; i -= 1) {
      console.log(i);
    }
    console.log('Done!')
  })()
};

//

function countdown(start) {
  (function logger() {
    console.log(start);
    if (start === 0) {
      console.log('Done!');
    } else {
      start -= 1
      logger(start);
    }
  })()
}
