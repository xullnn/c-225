function shallowCopy(object) {
  // ...
  // create new object from object's prototype
  // get objects' own property names
  // iterate through names and assign corresponding values to new object
  let newObj = Object.create(Object.getPrototypeOf(object));
  Object.getOwnPropertyNames(object).forEach(p => {
    newObj[p] = object[p]
  });

  return newObj;
}

var foo = {
  a: 1,
  b: 2,
};

var bar = Object.create(foo);
bar.c = 3;
bar.say = function() {
  console.log('c is ' + this.c);
};

var baz = shallowCopy(bar);
console.log(baz.a);       // => 1
baz.say();                // => c is 3
baz.hasOwnProperty('a');  // false
baz.hasOwnProperty('b');  // false
