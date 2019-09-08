function getDefiningObject(object, propKey) {
  let currentObj = object;
  while (currentObj.__proto__) {
    if (currentObj.hasOwnProperty(propKey)) {
      return currentObj;
    }

    currentObj = currentObj.__proto__;
  }

  return null;
}

var foo = {
  a: 1,
  b: 2,
};

var bar = Object.create(foo);
var baz = Object.create(bar);
var qux = Object.create(baz);

bar.c = 3;

console.log(getDefiningObject(qux, 'c') === bar);     // => true
console.log(getDefiningObject(qux, 'e'));             // => null


// alternative
function getDefiningObject(object, propKey) {
  while (object && !object.hasOwnProperty(propKey)) {
    object = Object.getPrototypeOf(object);
  }

  return object;
}
