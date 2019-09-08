function makeEvenCounter() {
  var index = 0; // function scope
  return function() {
    return index += 2; // reference from outer function
}

var evenCounter = makeEvenCounter(); // create a closure which inclues `index`

// is 0 eligible for GC here?
  // no

// more code

// Is 0 eligible for garbage collection on line 10?
