function greet(words, name) {
  words = words[0].toUpperCase() + words.slice(1);
  console.log(words + ', ' + name + '!');
}

greet('howdy', 'Joe');

greet('good morning', 'Sue');

function partial(primaryFunc, words) {
  return function(name) {
    return primaryFunc(words, name);
  }
}

var sayHello = partial(greet, 'Hello');
var sayHi = partial(greet, 'Hi');

sayHello('Brandon');
sayHi('Sarah');
