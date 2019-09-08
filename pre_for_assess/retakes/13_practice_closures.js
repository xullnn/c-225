// 1
function makeMultipleLister(factor) {
  return function() {
    for(let i = factor; i < 100; i += factor) {
      console.log(i);
    }
  }
}

var lister = makeMultipleLister(12);
lister();

// 2

var runningTotal = 0;

function add(operand) {
  return runningTotal += operand;
}

function subtract(operand) {
  return runningTotal -= operand;
}

// 3

function later(func, arg) {
  return function() {
    func(arg);
  }
}

var logWarning = later(console.log, 'The system is shutting down!');
logWarning();
