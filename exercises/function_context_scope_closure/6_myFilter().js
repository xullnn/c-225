function myFilter(array, func) {
  var result = [];

  array.forEach(function(value) {
    if (func(value)) {
      result.push(value);
    }
  });

  return result;
}

var filter = {
  allowedValues: [5, 6, 9],
}

myFilter([2, 1, 3, 4, 5, 6, 9, 12], function(val) {
  return this.allowedValues.indexOf(val) >= 0;
}, filter); // returns [5, 6, 9]


function myFilter(collection, func, context = null) {
  var result = [];

  var newFunc = func.bind(context)

  collection.forEach(function(value) {
    if (newFunc(value)) {
      result.push(value);
    }
  });

  return result;
}

var filter = {
  allowedValues: [5, 6, 9],
}

myFilter([2, 1, 3, 4, 5, 6, 9, 12], function(val) {
  return this.allowedValues.indexOf(val) >= 0;
}, filter); // returns [5, 6, 9]

// or func.all(context, args)
