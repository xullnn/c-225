var a = 'goodbye';

var object = {
  a: 'hello',
  b: 'world',
  foo: function() {
    return this.a + ' ' + this.b;
  },
};

var bar = object.foo; // gets the function structure

bar(); // invoke on global object
// `a` can be found in global level which is 'goodbye'
// `b` can't be found there, so it refers to `undefined`
// then it return `'goodbye undefined'`

var baz = object.foo.bind(object); // permanently bind the execution context to `object`
baz();
// wherever we invoke(no matter what the implicit context) `baz` it use the bound Object `object`
// as the execution context
// so this time it returns 'hello world'

var object2 = {
  a: 'hi',
  b: 'there',
};

baz.call(object2);
// even we try to specify the execution context
// it still use Object `object` as the context
