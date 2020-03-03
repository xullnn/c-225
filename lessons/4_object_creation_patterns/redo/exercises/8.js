

function one(a, b, c) {
  // a b c are accessible
  return function() {
    // a b c are accessible and in closure
    return function() {
      // a b c are accessible and in closure
      console.log('The numbers are ' + String(a) + ', ' + String(b) + ', ' + String(c));
    }
  }();
};

let f = one(1,2,3);

f();


//

function {
  closure L1

  return { // object accesses L1
    // methods access L1
  }

}() // IIFE


function log() {
  console.log(a);
}


let obj = function() {
  let a = 100;
  return {}
}

log.call(obj)

Thrown:
ReferenceError: a is not defined
it's not an object that can carray a closure
but the object's methods can
