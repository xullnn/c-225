// a function `newStack` which returns a stack object which has 3 methods
//   - push
//   - pop
//   - printStack
//
// the real stack(implemented by array) can not be accessed directly from the returned object
// which means it should be privte data
//
// use function to create closure, then set private array(real stack)
// let that function return objet which can perform the specified tasks

function newStack() {
  var stack = [];

  return {
    push: function(e) {
      return stack[stack.length] = e;
    },
    pop: function() {
      return stack.splice(stack.length - 1, 1)[0];
    },
    printStack: function() {
      console.log(stack);
    },
  }
}

var stack = newStack();

stack.stack; // should return undefined
stack.push(1)
stack.push(2)
stack.printStack; // [1, 2]
stack.pop(); // 2
stack.printStack();
