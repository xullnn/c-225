// 3

function Circle(r) {
  this.radius = r;
};

Circle.prototype.area = function() {
  return (Math.PI * this.radius * this.radius);
}

var a = new Circle(3);
var b = new Circle(4);

console.log(a.area().toFixed(2)); // => 28.27
console.log(b.area().toFixed(2)); // => 50.27

// 4
var ninja;

function Ninja() {
  this.swung = true;
}

ninja = new Ninja();

Ninja.prototype.swingSword = function() {
  return this.swung;
};

console.log(ninja.swingSword());

// 5

var ninja;

function Ninja() {
  this.swung = true;
}

ninja = new Ninja();

Ninja.prototype = { // prototype is substituded by a new object
  swingSword: function() {
    return this.swung;
  },
};

console.log(ninja.swingSword());
