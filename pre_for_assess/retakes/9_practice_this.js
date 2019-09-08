var myObject = {
  count: 1,
  myChildObject: {
    myMethod: function() {
      return this.count;
    },
  },
};

// myObject.myChildObject.myMethod();

myObject.myChildObject.myMethod.call(myObject);


// 2

var a = 1;
var obj = {
  a: 2,
  func: function() {
    console.log(this.a);
  },
};

obj.func();   // 2
obj.func.call(); // 1
obj.func.call(this); // 1
obj.func(obj); // 2

var obj2 = { a: 3 };
obj.func.call(obj2); // 3

// 3

var computer = {
  price: 30000,
  shipping: 2000,
  total: function() {
    var tax = 3000;
    function specialDiscount() { // nested function
      if (this.price > 20000) { // returns false
        return 1000;
      } else {
        return 0;  // so always 0
      }
    }

    return this.price + this.shipping + tax - specialDiscount();
    // 30000 + 2000 + 3000 - 0 = 35000
  }
};

console.log(computer.total());

// fix

var computer = {
  price: 30000,
  shipping: 2000,
  total: function() {
    var tax = 3000;
    let self = this
    function specialDiscount() { // nested function
      if (self.price > 20000) { // returns false
        return 1000;
      } else {
        return 0;  // so always 0
      }
    }

    return this.price + this.shipping + tax - specialDiscount();
    // 30000 + 2000 + 3000 - 0 = 35000
  }
};

console.log(computer.total());
