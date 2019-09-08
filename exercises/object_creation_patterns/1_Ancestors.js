// continuously get the name of the next prototype's `name` property
  // and push name to the array
  // until there's no `name` property for next prototype object
// push 'Object.prototype'
// return array

// since this is a method can be called on any object
// so it should be defined in `Object.protoype`

Object.prototype.ancestors = function() {
  let ancestors = ['Object.prototype'];

  for(let self = this; self.__proto__.name; self = self.__proto__) {
    ancestors.unshift(self.__proto__.name);
  };

  return ancestors;
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
