var RECTANGLE = {
  area: function() {
    return this.width * this.height;
  },
  perimeter: function() {
    return 2 * (this.width + this.height);
  },
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area();
  // the execution context object `this` is determined by how and where the function is invoked
  // here we are call `.area` method based on RECTANGLE object
    // RECTANGLE object doesn't have `width` and `height` set
    // so `undefined`s will be returned
  this.perimeter = RECTANGLE.perimeter(); // invocation
}

var rect1 = new Rectangle(2, 3);
// aninstance of `Rectangle` with `width` and `height` set
console.log(rect1.area);
// NaN

console.log(rect1.perimeter);
// NaN

// how to fix ------------------------------------------------------------------

var RECTANGLE = {
  area: function() {
    return this.width * this.height;
  },
  perimeter: function() {
    return 2 * (this.width + this.height);
  },
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area.call(this);
  // specify the executing context to the newly created instance
  this.perimeter = RECTANGLE.perimeter.call(this);
}

var rect1 = new Rectangle(2, 3);
// aninstance of `Rectangle` with `width` and `height` set
console.log(rect1.area);

console.log(rect1.perimeter);
