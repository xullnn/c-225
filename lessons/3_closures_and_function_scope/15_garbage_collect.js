var outerFoo;

function bar() {
  var innerFoo = 0;
  outerFoo = innerFoo;
}

bar();

// can outerFoo's 0 be garbage collected here?
  // no. 0 is assigned to outerFoo which is at the global level

// more code

// In the code below, is the value referenced by outerFoo eligible for garbage
// collection on line 10?
