function delegate(contextObj, methodName, ...args) {
  return function() { return contextObj[methodName].call(contextObj, args);};
}

var foo = {
  name: 'test',
  bar: function(greeting) {
    console.log(greeting + ' ' + this.name);
  },
};

var baz = {
  qux: delegate(foo, 'bar', 'hello'),
};

baz.qux();   // logs 'hello test';

foo.bar = function() { console.log('changed'); };

baz.qux();          // logs 'changed'

// qux: delegate(foo, 'bar', 'hello'),
  // find `bar` function in `foo` with context
  // pass in possible args
