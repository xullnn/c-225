var foo = {name: 'foo'};
var bar = Object.create(foo);
bar.name = 'bar';
var baz = Object.create(bar);
baz.name = 'baz';
var qux = Object.create(baz);
qux.name = 'qux';

Object.prototype.ancestors = function() {
  var chain = [];
  var ancestor = Object.getPrototypeOf(this);

  while (ancestor !== Object.prototype) {
    chain.push(ancestor.name);
    ancestor = Object.getPrototypeOf(ancestor);
  }

  chain.push('Object.prototype');

  return chain;
}

qux.ancestors();  // returns ['baz', 'bar', 'foo', 'Object.prototype']
baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
bar.ancestors();  // returns ['foo', 'Object.prototype']
foo.ancestors();  // returns ['Object.prototype']
