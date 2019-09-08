var ninja;
function Ninja() {
  this.swung = true;
}

ninja = new Ninja();

Ninja.prototype = { // prototype get reset
  // constructor's prototype get reset to another object
  // but the pervious instance is still using the old prototype object as its prototype
  swingSword: function() {
    return this.swung;
  },
};

console.log(ninja.swingSword());
