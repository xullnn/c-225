function createObject(obj) {
  var child = {};
  child.__proto__ = obj;
  return child;
}

var foo = {
  a: 1
};

var bar = createObject(foo);
foo.isPrototypeOf(bar);         // true


// alternative
function createObject(obj) {
  function temConstructor() {};
  temConstructor.prototype = obj;
  return new temConstructor;
}

var foo = {
  a: 1
};

var bar = createObject(foo);
foo.isPrototypeOf(bar);         // true
