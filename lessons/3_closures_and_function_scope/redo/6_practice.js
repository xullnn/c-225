// 1
function greet(word, name) {
  word = word[0].toUpperCase() + word.slice(1);
  console.log(word + ', ' + name)
};


// 2

function partial(primary, word) {
  return function(name) {
    primary(word, name);
  };
};

let sayHello = partial(greet, 'hello');
sayHello('Brandon');

let sayHi = partial(greet, 'Hi');
sayHi('Sarah');
