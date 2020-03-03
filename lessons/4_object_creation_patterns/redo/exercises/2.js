function delegate() {
  let source = arguments[0],
      funcName = arguments[1],
      args = Array.from(arguments).slice(2);

  return function() {
    return source[funcName].apply(source, args)
  }
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


function delegate(context, funcName) {
  // closure contains references to `context` and `funcName` that can be accessed
  // by the returned function
  let args = Array.from(arguments).slice(2);

  return function() {
    return context[funcName].apply(context, args)
  }
};
