function func() { // function "declared" at global scope
  return this;
}

var context = func(); // return global object

console.log(context); // log out the global object


// --------------------------------------------------------

var o = {
  func: function() {
    return this;
  },
};

var context = o.func();

console.log(context);

// since `func()` is invoked on object `o` so the returned this refers to object `o`

// --------------------------------------------------------

var message = 'Hello from the global scope!';

function deliverMessage() {
  console.log(this.message);
}

deliverMessage();
// function invoked implicity on global object
// so this.message refers to property of global object
  // which is 'Hello from the global scope!'

var foo = {
  message: 'Hello from the function scope!',
};

foo.deliverMessage = deliverMessage;
// object `foo` gets the function definition

foo.deliverMessage();
// invoke function on object `foo`
  // this time this.message refers to the `message` property of the caller `foo`
  // so logs out 'Hello from the function scope!'

// --------------------------------------------------------

var a = 10;
var b = 10;
var c = {
  a: -10,
  b: -10,
};

function add() {
  return this.a + b; // b is not defined in function so it's the global `b`
}

c.add = add;

console.log(add());
// invoke on global object
// gets a from global => 10
// gets b from global => 10
// so return 20

console.log(c.add());
// gets `a` from c which is `-10`
// gets `b` from global which is 10
// so returns 0

// --------------------------------------------------------

var foo = {
  a: 1,
  b: 2,
};

var bar = {
   a: 'abc',
   b: 'def',
   add: function() {
     return this.a + this.b;
   },
};

bar.add.call(foo);
// bar.add gets the structure of function `add`
// call(foo) specify the context it will use
// so the execution context is of `foo`
//   therefor this.a and this.b refer to 1 and 2
//   finally it returns 3
// --------------------------------------------------------

var fruitsObj = {
  list: ['Apple', 'Banana', 'Grapefruit', 'Pineapple', 'Orange'],
  title: 'A Collection of Fruit',
};


function outputList() {
  console.log(this.title + ':'); // this indicates the execution context should be fruitsObj

  var args = [].slice.call(arguments); // arguments need to be passed in

  args.forEach(function(elem) {
    console.log(elem);
  });
}

// invoke outputList here
// the execution context should be fruitsObj
  // and there are two ways to achieve this
    // - use apply/call to specify the execution context;
    // - assign the function as a property of fruitsObj;

// Let's try the first approach:
outputList.call(fruitsObj, fruitsObj.list); // seems work but not correct, fruitsObj.list is an array
// so we should try apply
outputList.apply(fruitsObj, fruitsObj.list); // This works.


// Let's try the second approach
fruitsObj.outputList = outputList; // assign the function to the same-name property of fruitsObj
fruitsObj.outputList(...fruitsObj.list) // how to pass in an array while converting it to an argument list?
// can't use `...this.list` to get and convert the array
// --------------------------------------------------------

var args = [].slice.call(arguments);
// `slice` is a method of Array.prototype so we have to first invoke it with an array
// but we want to slice all elements from the argument object which is an array-like object
// so we need to serve the argument object as the execution context of `slice`
