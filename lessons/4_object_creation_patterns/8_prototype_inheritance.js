// confusions

obj.__proto__ vs Object.getPrototypeOf(obj)
Object.prototype vs Object.getPrototypeOf(Object)

discuss in two scenarios
  - Object.create() pattern
  - constructor Function pattern

// use Object.create()
var a = new Object();
var b = Object.create(a);
console.log(b.__proto__ === Object.getPrototypeOf(b)); // 1 expect to return true
console.log(a.__proto__ === Object.prototype); // 2  expect to return true
console.log(Object.getPrototypeOf(a) === Object.prototype); // 3  expect to return true

// --- use constructor function
var F = function() {};
var x = new F(); // returns a new object which has F.prototype as its prototype
console.log(Object.getPrototypeOf(x) === F.prototype); // 4 expect to return true
console.log(Object.getPrototypeOf(F.prototype) === Object.prototype) // 5 expect to return true
console.log(x.constructor === F); // 6 expect to true
console.log(Object.getPrototypeOf(Object) === Object.prototyp)
console.log(Object.getPrototypeOf(Object) === Object.__proto__)
