// only closure can be carried with function obj
// returns new function which only access data from given obj when using `this`
  // maybe iife?


function myBind(func, contextObj) {
  return (function(...args) {
    return func.apply(contextObj, args);
  });
}

function func() {
  console.log(this.name);
}

var context = {
  name: 'I am here.'
}

var newFunc = myBind(func, context)

newFunc()

var anotherObj = {
  name: 'Wrong context.'
}

newFunc.call(anotherObj)
