// Write a program that uses two functions, add and subtract, to manipulate a
// running total value. When you invoke either function with a number, it should
// add or subtract that number from the running total and log the new total to the
// console. Usage looks like this:

var total = 0;

function add(num) {
  return total += num;
}

function subtract(num) {
  return total -= num;
}
