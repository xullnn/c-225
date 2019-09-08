var ninja;
function Ninja() {
  this.swung = true; // instance property default to true
}

ninja = new Ninja();

Ninja.prototype.swingSword = function() {
  return this.swung;
};

console.log(ninja.swingSword());
// true
