var shape = {
  getType: function() {
    return this.type;
  },
};

function Triangle(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.type = 'triangle';
}

Triangle.prototype = shape;
Triangle.prototype.constructor = Triangle;
shape.getPerimeter = function() {
  return this.a + this.b + this.c;
};

var t = new Triangle(3, 4, 5);
t.constructor;                 // Triangle(a, b, c)
shape.isPrototypeOf(t);        // true
t.getPerimeter();              // 12
t.getType();                   // "triangle"


// 2

function User(first, last) {
  if (!(this instanceof User)) {
    return (new User(first, last))
  }

  this.name = first + ' ' + last;
}

var name = 'Jane Doe';
var user1 = new User('John', 'Doe');
var user2 = User('John', 'Doe');

console.log(name);         // => Jane Doe
console.log(user1.name);   // => John Doe
console.log(user2.name);   // => John Doe

// 3

function createObject(obj) {
  function Temp() { };
  Temp.prototype = obj;
  return new Temp();
}

var foo = {
  a: 1
};

var bar = createObject(foo);
foo.isPrototypeOf(bar);         // true

// 4

var foo = {
  a: 1,
};

Object.prototype.begetObject = function() {
  function Temp() {};
  Temp.prototype = this;
  return new Temp();
}

var bar = foo.begetObject();
foo.isPrototypeOf(bar);         // true

// 5

function neww(constructor, args) {
  var obj = Object.create(constructor.prototype); // get behaviors
  constructor.call(obj, ...args); // get states
  return obj;
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

// 6

function newPerson(name) {
  if (!(this instanceof newPerson)) {
    return new newPerson(name);
  }
  this.name = name;
  Object.defineProperties(this,{
    log: {
      value: function() { console.log(this.name) },
      writable: false,
    }
  });
}

var me = newPerson('Shane Riley');
me.log();     // => Shane Riley
me.log = function() { console.log('Amanda Rose'); };
me.log();     // => Shane Riley
