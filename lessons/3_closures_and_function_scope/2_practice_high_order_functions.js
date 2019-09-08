// What are the characteristics that define higher-order functions?
// A high order function is a function either
//   - accepts another function as argument
//   - returns a function
// Or both

var numbers = [1, 2, 3, 4];
function makeCheckEven() {
  // return function(num) {
  //   return num % 2 === 0;
  // }

  return num => num % 2 === 0;
}

var checkEven = makeCheckEven();

numbers.filter(checkEven); // [2, 4]

// -----------------------------------------------

function execute(func, operand) {
  return func(operand)
}

execute(function(number) {
  return number * 2;
}, 10); // 20

execute(function(string) {
  return string.toUpperCase();
}, 'hey there buddy'); // "HEY THERE BUDDY"

// -----------------------------------------------

function makeListTransformer(func) {
  return function(numbers) {
    return numbers.map(func);
  }
}

var timesTwo = makeListTransformer(function(number) {
  return number * 2;
});

timesTwo([1, 2, 3, 4]); // [2, 4, 6, 8]

// -----------------------------------------------
