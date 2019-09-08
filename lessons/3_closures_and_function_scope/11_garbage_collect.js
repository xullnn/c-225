var a = 34;

function add(b) {
  a += b;
  // a is part of the function implementation
    // no, referencing `a` inside `add()` only tries to find a var named `a`
    // so after the execution of `add()`, `a` is eligible for GC
  // so a will exist as long as function `add` exists
}

function run() {
  var c = add(4);
  // add(4) create a function scope var b = 4
  // then it returns 38
  // then `b` is no longer used (GCed)
    // then var c = 38 is a function scope var
    // there's no way to reference it from outside the function
}

run();
// therefore after finishing the execution of `run()`
// `c` is also GCed
// `a` is GCed
