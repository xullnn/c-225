function mixin(receiver, supplier) {
  for (var property in supplier) {
    if (supplier.hasOwnProperty(property)) {
      receiver[property] = supplier[property];
    };
  };
};

function EventTarget() {

};

EventTarget.prototype = {
  constructor: EventTarget,

  addListener: function(type, listener) {
    // create an empty array if it doesn't exist
    if (!this.hasOwnProperty("_listeners")) {
      this._listeners = [];
    };

    if (typeof this._listeners[type] === 'undefined') {
      this._listeners[type] = []; // each `type` has an array?
    };

    this._listeners[type].push(listener);
  },

  fire: function(event) { // `event` is an object
    if (!event.target) {
      event.target = this;
    };

    if (!event.type) {
      throw new Error('Event object missing \'type\' property.');
    };

    if (this._listeners && this._listeners[event.type] instanceof Array) {
      var listeners = this._listeners[event.type]; // returns array of listener objects
      for (var i = 0, l = listeners.length; i < l; i += 1) {
        listeners[i].call(this, event);
      }
    };
  },

  removeListener: function(type, listener) {
    if (this._listeners && this._listeners[type] instanceof Array) {
      var listener = this._listeners[type];
      for (var i = 0, l = listeners.length; i < l; i += 1) {
        if (listeners[i] === listener) {
          listeners.splice(i, 1);
          break;
        };
      };
    };
  },
};

var target = new EventTarget();

target.addListener('message', function(event) {
  console.log('Message is ' + event.data);
});

target.fire({
  type: 'message',
  data: "Hello World",
});

// ------------------------

var person = new EventTarget();
person.name = 'Nicholas';
person.sayName = function() {
  console.log(this.name);
  this.fire({ type: 'namesaid', name: this.name });
};

// ------------------------
// pseudoclassical inheritance

function Person(name) {
  this.name = name;
};

Person.prototype = Object.create(EventTarget.prototype);
Person.prototype.constructor = Person;
Person.prototype.sayName = function() {
  console.log(this.name);
  this.fire({ type: 'namesaid', name: this.name });
};

var person = new Person('Nicholas');

console.log(person instanceof Person);
console.log(person instanceof EventTarget);

// ------------------------
// refactor

function Person(name) {
  this.name = name;
};

mixin(Person.prototype, new EventTarget());

mixin(Person.prototype, {
  constructor: Person,

  sayName: function() {
    console.log(this.name);
    this.fire({ type: 'namesaid', name: this.name });
  },
});

var person = new Person('Nicholas');
console.log(person instanceof Person);
console.log(person instanceof EventTarget);
