// 1

function capitalize(word) {
  return word.substr(0,1).toUpperCase() + word.substr(1);
}

function greet(words, name) {
  console.log(capitalize(words) + ', ' + capitalize(name) + '!');
}

greet('howdy', 'Joe');

// 2

function sayHello(name) {
  return greet("Hello", name);
}

var sayHello2 = greet.bind(null, 'Hello');

//

function partial(primaryFunc, arg1) {
  return function(arg2) {
    return primaryFunc(arg1, arg2)
  };
}
