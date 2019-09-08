function NewArray() {};
NewArray.prototype = Object.create(Object.getPrototypeOf([]));
// notice NewArray.prototype is another new object created from Array.prototype
// so the behavior added to the NewArray.prototype will not affect the Array.prototype

NewArray.prototype.first = function() {
  return this[0];
}

var newArr = new NewArray();
var oldArr = new Array();

oldArr.push(5);
newArr.push(5);
oldArr.push(2);
newArr.push(2);

console.log(newArr.first());
console.log(oldArr.first);


// Object.defineProperties
// read-only property

var obj = {
  name: 'Obj',
};

Object.defineProperties(obj, {
  age: {
    value: 30,
    writable: false,
  },
});

console.log(obj.age);
obj.age = 32;
console.log(obj.age);

// ---

function newPerson(name) {
  this.name = name;
  Object.defineProperties(this, {
    log: {
      value: function() { console.log(name) },
      writable: false,
    },
  })
};

var me = new newPerson("Shane Riley");
me.log();
me.log = function() {console.log('Amanda Rose')};
me.log();


// Object.freeze

var frozen = {
  integer: 4,
  string: 'String',
  array: [1, 2, 3],
  object: {
    foo: 'bar',
  },
  func: function() {
    console.log("I am frozen");
  },
};

Object.freeze(frozen);
frozen.integer = 8;
frozen.string = 'Number';
frozen.array.pop();
frozen.object.foo = 'baz';
frozen.func = function() {
  console.log("I am not really frozen");
};

console.log(frozen.integer);      // => 4
console.log(frozen.string);       // => String
console.log(frozen.array);        // => [1, 2]
console.log(frozen.object.foo);   // => baz
frozen.func();                    // => I'm frozen
