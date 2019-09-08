// Write a function named later that takes two arguments: a function and an argument
// for that function. The return value should be a new function that calls the input
// function with the provided argument, like this:

function later(func, arg) {
  return func.bind(undefined, arg);
}

// or
function later(func, arg) {
  return function() {
    func(arg);
  }
}
