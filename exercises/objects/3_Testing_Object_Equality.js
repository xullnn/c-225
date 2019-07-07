// For an object
//   the keys are always String
//   the values can be any type
//     if the value is object, we fall into a cyclic logic
//       if Array compare elements one by one
//       if Object recursively call
//
// iterate through keys of one of the object
//   return false if (Object.keys(object2).includes(key) && object1[key] !== object2[key])
// return true

// function objectsEqual(object1, object2) {
//   for(key in object1) {
//     if (Object.keys(object1).length !== Object.keys(object2).length || // if keys amount is not equal
//         !Object.keys(object2).includes(key) ||  // if any key in object2 is not existed in object1
//         object1[key] !== object2[key]) {        // if same key doesn't have the same value
//           return false;
//         }
//   }
//
//   return true;
// }


function arraysEqual(arr1, arr2) {
  let a = arr1.slice().sort();
  let b = arr2.slice().sort();

  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for(let i = 0; i < a.length; i += 1) {
      if (a[i] !== b[i]) return false;
    }
  }

  return true;
}

function objectsEqual(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  for(key in object1) {
    if (!Object.keys(object2).includes(key)) { // check keys
      return false;
    } else if (typeof object1[key] === 'object' && Array.isArray(object1[key])) { // if values are Array
      if (!arraysEqual(object1[key], object2[key])) return false;
    } else if (typeof object1[key] === 'object' && !objectsEqual(object1[key], object2[key])) { // if values are Object
      return false;
    } else if (object1[key] !== object2[key]) {  // values are non-object type, just simply compare them by `===`
      return false;
    }
  }

  return true;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo'}, {a: 'foo', b: 'bar'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false
console.log(objectsEqual({a: [1, 2], b: 1}, {a: [2, 1], b: 1}));        // true
console.log(objectsEqual({a: {x: 'a'}, b: 1}, {a: {x: 'a'}, b: 1}));    // true
console.log(objectsEqual({a: {x: [1, 3, 2]}, b: 1}, {a: {x: [1, 2, 3]}, c: 1}));    // false
console.log(objectsEqual({c: 1, a: {x: [1, 3, 2]}}, {a: {x: [1, 2, 3]}, c: 1}));    // true
