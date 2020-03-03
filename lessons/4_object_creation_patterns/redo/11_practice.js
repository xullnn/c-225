// 4

Object.prototype.begetObject = function() {
  function T() {};
  T.prototype = this;
  return new T();
}

var foo = {
  a: 1,
};

var bar = foo.begetObject();
foo.isPrototypeOf(bar);         // true


// 5

function neww(constructor, args) {
  let obj = Object.create(constructor.prototype);
  let explictReturned = constructor.apply(obj, args); // mutating obj
  return (typeof explictReturned === 'object' ? explictReturned : obj);
}

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function() {
  console.log('Hello, ' + this.firstName + ' ' + this.lastName);
};

var john = neww(Person, ['John', 'Doe']);
john.greeting();          // => Hello, John Doe
john.constructor;         // Person(firstName, lastName) {...}
