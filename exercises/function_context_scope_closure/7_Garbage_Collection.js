function makeCounter() {
  var count = 1;          // closure created

  return function() {     // has access to the closure
    console.log(count++)  // count++ is short for count = count + 1
  };
}

var counter = makeCounter();
counter();
// if we call counter() again, the `count` variable will continue to be incremented
// so the closure persists
