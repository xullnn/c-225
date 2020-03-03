// 1

var a = 1;
var foo;
var obj;

function Foo() {
  this.a = 2;
  this.bar = function() {
    console.log(this.a);
  };
  this.bar();
}

foo = new Foo(); // logs 2

foo.bar(); // 2
Foo(); // 2

obj = {};
Foo.call(obj); // 2
obj.bar(); // 2

console.log(this.a); // 2

// 2

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
  this.area = RECTANGLE.area(); // NaN
  this.perimeter = RECTANGLE.perimeter(); // NaN
}

// Fix 1

// this.area = RECTANGLE.area.call(this);
// this.perimeter = RECTANGLE.perimeter.call(this);

// Fix 2
// this.area = RECTANGLE.area; // NaN
// this.perimeter = RECTANGLE.perimeter; // NaN
//
// console.log(rect1.area());
// console.log(rect1.perimeter());

var rect1 = new Rectangle(2, 3);
console.log(rect1.area);
console.log(rect1.perimeter);
