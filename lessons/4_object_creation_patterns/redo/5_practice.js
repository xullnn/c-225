function shallowCopy(object) {
  let newObj = Object.create(Object.getPrototypeOf(object));
  Object.getOwnPropertyNames(object).forEach(p => {
    newObj[p] = object[p]
  });

  return newObj;
}

function extend(destination) {
  let target = Array.from(arguments)[0],
      sources = Array.from(arguments).slice(1);
  if (sources.length === 0) {
    return target;
  } else {
    sources.forEach(source => {
      Object.getOwnPropertyNames(source).forEach(p => {
        target[p] = source[p]
      })
    })
  };

  return target;
};

var foo = {
  a: 0,
  b: {
    x: 1,
    y: 2,
  },
};

var joe = {
  name: 'Joe'
};

var funcs = {
  sayHello: function() {
    console.log('Hello, ' + this.name);
  },

  sayGoodBye: function() {
    console.log('Goodbye, ' + this.name);
  },
};

var object = extend({}, foo, joe, funcs);

console.log(object.b.x);          // => 1
object.sayHello();

// ---------------------------------------------------------


if (typeof Object.assign !== 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, "assign", {
    value: function assign(target, varArgs) { // .length of function is 2
      'use strict';
      if (target === null || target === undefined) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target); // constructor call without `new`

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource !== null && nextSource !== undefined) {
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true
  });
}
