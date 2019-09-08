function myBind(func, context) {
  var formerArgs = Array.from(arguments).slice(2); // all arguments want to bind
  return function() {
    var completeArgs = formerArgs.concat(Array.from(arguments));
    return func.apply(context, completeArgs);
  }
}

function A(a, b, c, d) {
  console.log([a, b, c, d]);
}

var b = myBind(A, null, 1, 2);
b(3,4)
