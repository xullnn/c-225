function newStack() {
  var stack = [];
  return {
    push: function(e) { stack.push(e) },
    pop: function() { stack.pop() },
    printStack: function() {
      stack.forEach(e => console.log(e));
    },
  }
}
