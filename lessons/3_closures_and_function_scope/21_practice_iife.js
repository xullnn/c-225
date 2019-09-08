// 1
function() {
  console.log("Sometimes, syntax isn't intuitive!")
}();

// no. the return value of a function declaration is `undefined` so `undefined()`?

// 2

(function() {
  console.log("Sometimes, syntax isn't intuitive!")
})();

// 3

var sum = 0; // global scope vars
var numbers;

sum += 10;
sum += 31; // 41

numbers = [1, 7, -3, 3]; // also global

function sum(arr) {
  return arr.reduce(function(sum, number) {
    sum += number;
    return sum;
  }, 0);
}

sum += sum(numbers);  // ?

// correction
// function declaration will be hoisted first in a js file
// but a function expression will not

var sum = 0; // global scope vars
var numbers;

sum += 10;
sum += 31; // 41

numbers = [1, 7, -3, 3]; // also global

sum + (function sum(arr) {
  return arr.reduce(function(sum, number) {
    sum += number;
    return sum;
  }, 0);
})(numbers)

// sum += sum(numbers);  // ?

// 4
// iife

var countdown = function () {
  return function(max) {
    for(let i = max; i >=0; i -= 1) console.log(i);
  }
}()
countdown(7);

// 5

// 6

function countdown(n) {
  return (function logNum(n) {
    if (n < 0) {
      return;
    } else {
      console.log(n);
      logNum(n - 1);
    }
  })(n);
}



countdown(7)
