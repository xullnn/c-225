Object.prototype.ancestors = function() {
  let array = [];
  let ancestor = Object.getPrototypeOf(this);

  while(ancestor.name) {
    array.unshift(ancestor.name);
    ancestor = Object.getPrototypeOf(ancestor);
  }

  array.push('Object.prototype')
  return array;
}

// name property added to make objects easier to identify
var foo = {name: 'foo'};
var bar = Object.create(foo);
bar.name = 'bar';
var baz = Object.create(bar);
baz.name = 'baz';
var qux = Object.create(baz);
qux.name = 'qux';

qux.ancestors();  // returns ['baz', 'bar', 'foo', 'Object.prototype']
baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
bar.ancestors();  // returns ['foo', 'Object.prototype']
foo.ancestors();  // returns ['Object.prototype']
