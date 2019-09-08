var strings = {
  a: 'hello',
  b: 'world',
  foo: function() {
    return this.a + this.b;
  },
};

var numbers = {
  a: 1,
  b: 2,
};

strings.foo.call(numbers);
