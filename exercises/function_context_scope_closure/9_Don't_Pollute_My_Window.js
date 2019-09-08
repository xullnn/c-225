var name = 'Naveed';
var greeting = 'Hello';

var greeter = {
  message: greeting + ' ' + name + '!',
  sayGreetings: function() {
    console.log(this.message);
  }
};


// if we don't want `name` and `greeting` to be at global
// we can enclose them into a closure
// which means passing the values into a function declaration to keep the data private
// this is the concept of function as object factory?

function makeGreeter(name, greeting) {
  // closure created
  return {
    message: greeting + ' ' + name + '!',
    sayGreetings: function() {
      console.log(this.message);
    }
  };
}

var greeter = makeGreeter('Naveed', ' Hello');
greeter.sayGreetings();

// or use iife

var greeter = (function(name, greeting) {
  return {
    message: greeting + ' ' + name + '!',
    sayGreetings: function() {
      console.log(this.message);
    }
  };
})('Naveed', ' Hello')

greeter.sayGreetings();
