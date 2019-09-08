var a = 1;
var b = -1;
var obj = {
  a: 2,
  b: 3,
};

function foo() {
  return this.a + this.b;
}

var bar = foo.bind(obj); // bar now is a funtion permanently binds to `obj`

console.log(foo()); // 0
console.log(bar()); // 5

// --------------------------------------------------------

var positiveMentality = {
  message: 'JavaScript makes sense!',
};

var negativeMentality = {
  message: 'JavaScript makes no sense!',
};

function foo() {
  console.log(this.message);
}

var bar = foo.bind(positiveMentality); // bar now is a function binds to `positiveMentality` object

negativeMentality.logMessage = bar;
// assign a property with function which `bar` is referencing to
// bar (Function) is hard bound to 'positive'
negativeMentality.logMessage();
// so wherever we invoke the hard bound function, `this` always use 'positive' context
// therefore it logs out: 'JavaScript makes sense!'

// --------------------------------------------------------

var obj = {
  a: 'Amazebulous!',
};
var otherObj = {
  a: "That's not a real word!",
};

function foo() {
  console.log(this.a);
}

var bar = foo.bind(obj);
// foo is permanently bound to Object `obj` (a: 'Amazebulous!')

bar.call(otherObj);
// will ignore specified context otherObj
// logs out 'Amazebulous!'

// --------------------------------------------------------

function introduceMe() {
  console.log(this);
  function nestedMe() {
    console.log(this);
  }

  nestedMe();
}
