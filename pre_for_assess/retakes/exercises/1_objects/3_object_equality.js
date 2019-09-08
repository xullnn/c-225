// amount of key/value pairs are the same
function objectsEqual(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
  for (let key in obj1) {
    if (!Object.keys(obj2).includes(key) || obj1[key] !== obj2[key]) return false;
  };

  return true;
}

// test

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false
