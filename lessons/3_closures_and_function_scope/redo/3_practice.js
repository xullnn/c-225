function makeMultipleLister(factor) {
  return function() {
    for(let i = factor; i <= 100; i += factor) {
      console.log(i)
    }
  };
};

let lister = makeMultipleLister(20);
lister();

//

let number = 0;

function add(n) {
  number += n;
  console.log(number);
};

function subtract(n) {
  number -= n;
  console.log(number);
};

//

function later(callback, arg) {
  return function() {
    callback(arg);
  }
}

let logWarning = later(console.log, 'The system is shutting down!');
logWarning();

//

function startup() {
  var status = 'ready';
  return function() {
    console.log('The system is ready.');
  };
}

var ready = startup();
var systemStatus = // ?
