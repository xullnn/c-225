// 1

var franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map(function(number) {
      return this.name + ' ' + number;
    });
  },
};

// fix

var franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    let self = this;
    return [1, 2, 3].map(function(number) {
      return self.name + ' ' + number;
    });
  },
};

var franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map(function(number) {
      return this.name + ' ' + number;
    }.bind(this));
  },
};

// customized hard binding

function myBind(fn, context) {
  // closure (fn, context)
  return function() {
    fn.apply(context, arguments);
  }
};

// supporting for parital function

function myBind(fn, context) {
  let partialArgs = Array.from(arguments).slice(2);
  return function() {
    let completeArgs = partialArgs.concat(Array.from(arguments));
    return fn.apply(context, completeArgs);
  };
};

let object = {
  a: 1,
  b: 2,
};

let a = 5,
    b = 6;

function addNM(n, m) {
  return (this.a + this.b + n + m);
}

let addab5 = myBind(addNM, object, 5);
addab5(2);

// customized filter with context being given

function myFilter(array, func, context) {
  var result = [];

  array.forEach(function(value) {
    if (func.bind(context)(value)) {
      result.push(value);
    }
  });

  return result;
}

var filter = {
  allowedValues: [5, 6, 9],
}

myFilter([2, 1, 3, 4, 5, 6, 9, 12], function(val) {
  return this.allowedValues.indexOf(val) >= 0;
}, filter); // returns [5, 6, 9]

// stack

function newStack() {
  let closArray = [];
  let lastIndex = function() { return closArray.length - 1 };

  return {
    push: function(item) { closArray[lastIndex() + 1] = item },
    pop: function() { closArray.splice(lastIndex(), 1) },
    print: function() { closArray.forEach(e => console.log(e)) },
  }
}

let stack = newStack();
stack.print(); // nothing logged out
stack.push(1);
stack.push(2);
stack.push(3);
stack.print(); // logs 1, 2, 3 respectively each line
stack.pop();
stack.print(); // logs 1, 2 but no 3

// protect scope

var name = 'Naveed';
var greeting = 'Hello';

var greeter = {
  message: greeting + ' ' + name + '!',
  sayGreetings: function() {
    console.log(this.message);
  }
};

// solution

let greeter = function() {
  let name = 'Naveed';
  let greeting = 'Hello';

  return {
    message: greeting + ' ' + name + '!',
    sayGreetings: function() {
      console.log(this.message);
    }
  };
}();

greeter.sayGreetings();
