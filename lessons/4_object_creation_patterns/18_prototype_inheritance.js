var foo = {
  a: 1,
};

Object.prototype.begetObject = function() {
  function TempConstructor() {};
  TempConstructor.prototype = this;
  return new TempConstructor;
}

var bar = foo.begetObject();
foo.isPrototypeOf(bar);         // true
