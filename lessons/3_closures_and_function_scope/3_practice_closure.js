// returns  a function which takes an ending number
  // when invoked count from the starting number accepts from outer function to the ending number

function makeCounterLogger(a) {
  // implicitly did start = n?
  return function(b) {
    if (a <= b) {
      for(let i = a; i <= b; i += 1) {
        console.log(i);
      }
    } else {
      for(let i = a; i >= b; i -= 1) {
        console.log(i);
      }
    }
  }
}

var accountant = makeCounterLogger(5);
accountant(8)

accountant(1)
