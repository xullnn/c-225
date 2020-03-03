function A() {
  this.attrA = 'a';
}

A.prototype.method1 = function() {};

function B() {
  this.attrB = 'b'
}

let b1 = new B(); // Object.getPrototypeOf(b1) is `Object.prototype`

B.prototype = Object.create(A.prototype); // methods got
// prototype changed from `Object.prototype` to a only-method-shared object created
// from A's prototype object
// A's prototype is an object created from `Object.prototype`

A.prototype instanceof Object // true: `Object` is the top constructor to create a new object
