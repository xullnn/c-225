// Write a function named makeMultipleLister that, when invoked and passed a number,
// returns a function that logs every positive integer multiple of that number less
// than 100. Usage looks like this:

// an outer funcation that
  // - accepts an argument
  // - returns a function which
  //   will log out all the multiples of the argument less than 100

function makeMultipleLister(factor) {
  return function() {
    for(let multiple = factor; multiple < 100; multiple += factor) {
      console.log(multiple);
    }
  }
}

var lister = makeMultipleLister(12);
lister();
