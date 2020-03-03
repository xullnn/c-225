function getDefiningObject(object, propKey) {
  // search through the prototype chain where the `object` is at
  // return the object which originally defined `propKey`
  // if there's none, return `null`
  // stop point: after checking the Object.prototpye object
  if (object.hasOwnProperty(propKey)) {
    return object;
  } else if (object === Object.prototype) {
    return null;
  } else {
    object = Object.getPrototypeOf(object);
    return getDefiningObject(object, propKey);
  }

}

var foo = {
  a: 1,
  b: 2,
};

var bar = Object.create(foo);
var baz = Object.create(bar);
var qux = Object.create(baz);

// foo(a,b) <-- bar(c) <-- baz <-- qux

bar.c = 3;

console.log(getDefiningObject(qux, 'c') === bar);     // => true
console.log(getDefiningObject(qux, 'e'));             // => null

// ---

// Object.getPrototypeOf(Object.prototype) => null

function getDefiningObject(object, propKey) {
  while (object && !object.hasOwnProperty(propKey)) {
    object = Object.getPrototypeOf(object);
  }

  return object
};

//
