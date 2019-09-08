function neww(constructor, args) {
  // return new constructor(...args)
  var obj = Object.create(constructor.prototype);
  var possible_return = constructor.apply(obj, args);
  // maybe the constructor has some return statement
  // this may break the `neww` function
    // so use a variable to capture the return value(whether or not it's an object)

  return obj;
  //or to make the intention clearer
  // return (typeof possible_return === 'object' ? possible_return : obj)
}

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function() {
  console.log('Hello, ' + this.firstName + ' ' + this.lastName);
};

var john = neww(Person, ['John', 'Doe']);
john.greeting();          // => Hello, John Doe
john.constructor;         // Person(firstName, lastName) {...}
