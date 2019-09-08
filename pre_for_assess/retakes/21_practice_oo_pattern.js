// 1
function getDefiningObject(object, propKey) {
  for(let protoNode = object; Object.getPrototypeOf(protoNode); protoNode = Object.getPrototypeOf(protoNode)) {
    if (protoNode.hasOwnProperty(propKey)) return protoNode;
  };

  return null;
};

// function getDefiningObject(object, propKey) {
//   while (object && !object.hasOwnProperty(propKey)) {
//     object = Object.getPrototypeOf(object); // update object
//   }
//
//   return object;
// }

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

//2

// function shallowCopy(object) {
//   var newObj = Object.create(Object.getPrototypeOf(object));
//
//   for(let key in object) {
//     if (object.hasOwnProperty(key)) {
//       newObj[key] = object[key];
//     }
//   }
//
//   return newObj;
// }

function shallowCopy(object) {
  var newObj = Object.create(Object.getPrototypeOf(object));

  Object.getOwnPropertyNames(object).forEach(key => newObj[key] = object[key]);

  return newObj;
}

var foo = {
  a: 1,
  b: 2,
};

var bar = Object.create(foo);
bar.c = 3;
bar.say = function() {
  console.log('c is ' + this.c);
};

var baz = shallowCopy(bar);
console.log(baz.a);       // => 1
baz.say();                // => c is 3
baz.hasOwnProperty('a');  // false
baz.hasOwnProperty('b');  // false

// 3
function extend() {
  var args = Array.prototype.slice.call(arguments);
  var target = args[0];
  var sources = args.slice(1);

  sources.forEach(source => Object.getOwnPropertyNames(source).forEach(key => target[key] = source[key]))
  return target;
}

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
object.sayHello();                // => Hello, Joe
