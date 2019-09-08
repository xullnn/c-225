// Partial function
//   use function A to pre-encapsulate one argument to the implementation of the function
//     here a closure will be laid
//   then returns a function B which accepts the rest arguments
//     inside B there is a primary function P which contains the core algorithm we want to perform
//
// It's like we customize part of function B with the first argument
// Then invoke B while passing the rest arguments

// An advanced(more general) version of the one described above is
    // use function A to pre-encapsulate one function(the primary P function) and one argument
    // then returns a function B which takes the rest arguments and returns the invocation of P with the rest arguments

function myBind(f, obj, ...args) {
  return function() {
    return f.apply(obj, args.concat(Array.from(arguments)))
  };
}

function add(a, b) {
  console.log(a + b);
}

var add5 = myBind(add, null, 5);

add5(9);

function func() {
  console.log(this.name);
}

var context = {
  name: 'I am here.'
}

var newFunc = myBind(func, context); // provide context object(should be permanently bound)

newFunc(); // logs 'I am here.'

var anotherObj = {
  name: 'Wrong context.'
}
// try specifying anotherObj as context
newFunc.call(anotherObj); // should still log 'I am here.'
