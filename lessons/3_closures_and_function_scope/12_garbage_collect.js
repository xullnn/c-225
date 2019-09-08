function makeHello(name) {
  // implicitly does `var name = 'some string'`
  return function() {
    console.log("Hello, " + name + "!");
    // name is only accessible from inside `makeHello()`
    // when `var name = 'string'` passed to this anonymous function
    // `name` is no long used
  };
}

var helloSteve = makeHello("Steve");
// "Steve" will be GCed after the execution of `makeHello("Steve")`
