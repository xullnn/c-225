var myNum = 1; // global level

function foo() {
  var myStr = 'A string';   // function scope
  // what is eligible for GC here?
    // nothing
}

foo();

// what is eligible for GC here?
  // - myStr
  // - foo

// Consider what are reachable here?

// more code

// Are either of the values 1 or "A string" eligible for garbage collection on line 5? What about on line 10?
