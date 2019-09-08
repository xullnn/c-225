// function extend(destination) {
//   let obj = {};
//
//   Array.from(arguments).forEach(source => {
//     Object.getOwnPropertyNames(source).forEach(prop => {
//       obj[prop] = source[prop];
//     });
//   });
//   return obj;
// }

function extend(destination) {
  for(let i = 1; i < arguments.length; i += 1) {
    Object.getOwnPropertyNames(arguments[i]).forEach(prop => {
      destination[prop] = arguments[i][prop];
    })
  }

  return destination;
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
