Object.create(Account);

// How Object.create works

Object.create = function(sourceObj) {
  function F() {};
  F.prototype = sourceObj; // as prototype
  return new F()
};

// experiment

function Account() {}


- closure to hold private data set for each instance
- a way to share behaviors

// The given way

let Account = function() {
    // private data
  return {
    // behaviors
  }
}();

- shared behaviors access the same set of private data
--> shared behaviors access independent data set for each newly created instance
    - every time an instance created, a new closure should be carried with it
