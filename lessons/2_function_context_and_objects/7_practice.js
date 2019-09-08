var myObject = {
  count: 1,
  myChildObject: {
    myMethod: function() {
      return this.count;
    },
  },
};

myObject.myChildObject.myMethod.call(myObject);

// ------------------------------------------------------------------------

var a = 1;
var obj = {
  a: 2,
  func: function() {
    console.log(this.a);
  },
};

obj.func();         // 2
obj.func.call();    // ? 1
obj.func.call(this);// 1
obj.func(obj);      // it doesn't take arg, so the passed in obj will be ignored
                    // 2

var obj2 = { a: 3 };
obj.func.call(obj2); //3

// ------------------------------------------------------------------------

var computer = {
  price: 30000,
  shipping: 2000,
  total: function() {
    var tax = 3000;
    function specialDiscount() {
      if (this.price > 20000) {
        return 1000;
      } else {
        return 0;
      }
    }

    return this.price + this.shipping + tax - specialDiscount.call(computer);
  }
};

console.log(computer.total());

// ------------------------------------------------------------------------

var computer = {
  price: 30000,
  shipping: 2000,
  total: function() {
    var tax = 3000;
    var self = this;
    function specialDiscount() {
      if (self.price > 20000) {
        return 1000;
      } else {
        return 0;
      }
    }

    return this.price + this.shipping + tax - specialDiscount();
  }
};

console.log(computer.total());
