// // the given solution is
//
// - use an iife to return the prototype object
//   - iife creates closure
//     - first declare private variable names that you want to keep in closure
//     - initialize them with passed in arguments when invoking `init`
//     - write all private methods in closure(means outside the object but inside iife)
//   - define public interfaces(methods) as properties of returned object
//     - due to the existence of closure, we can access private data and methods inside these public methods
// - use `Object.create(prototypeObject)` to create instance

// lexical
// closure
// iife

var publicInterfaces = {
  email: function(userInput) {
    if (validPassword(userInput)) { // how to access private methods
      return email;
    } else {
      console.log('Invalid Password.')
    }
  }
}

var Account =
function() {
  // private methods

  return {
    init: function (email) {
      var privateTable = {
        email: email,
      };

    delegate(this, privateTable, publicInterfaces)
    return this;
    }
  };
}()


function delegate(target, privateTable, source) {
  for(let name in source) {
    target[name] = function() {
      return source[name].call(privateData, ...arguments)
    }
  }
}

var obj = Object.create(Account).init('xxx@gmail.com')
