// Object literal
 var pointA = {
   x: 30,
   y: 40,

   onXAxis: function() {
     return this.y === 0;
   },

   onYAxis: function() {
     return this.x === 0;
   },

   distanceToOrigin: function() {
     return Math.sqrt((this.x * this.x) + (this.y * this.y));
   },
 };

 pointA.distanceToOrigin();
 pointA.onXAxis();
 pointA.onYAxis();

// Pseudo-classical Pattern

var Point = function(x ,y) { // initialization states
  this.x = x || 0;
  this.y = y || 0;
}

Point.prototype.onXAxis = function() {
  return this.x === 0;
};

Point.prototype.onYAxis = function() {
  return this.y === 0;
};

Point.prototype.distanceToOrigin = function() {
  return Math.sqrt((this.x * this.x) + (this.y * this.y))
};

var pointA = new Point(30, 40);
var pointB = new pointB(20);

pointA instanceof Point; // the create object is treated as the 'instance' of the constructor function
pointB instanceof Point;

pointA.distanceToOrigin();
pointB.onXAxis();

// OLOO pattern: Object Linking to Other Objects

// the first step is very likely to the literal one
// but with an optional `init` function to set states
var Point = {
  x: 0,            // note the difference
  y: 0,

  onXAxis: function() {
    return this.y === 0;
  },

  onYAxis: function() {
    return this.x === 0;
  },

  distanceToOrigin: function() {
    return Math.sqrt((this.x * this.x) + (this.y * this.y));
  },

  init: function(x, y) {
    this.x = x;
    this.y = y;
    return this;
  },
};

var pointA = Object.create(Point)init(30, 40);
var pointB = Object.create(Point);

Point.isPrototypeOf(pointA);
Point.isPrototypeOf(pointB);
