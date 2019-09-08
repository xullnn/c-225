function Animal(type) {
  this.type = type;
};

Animal.prototype.move = function() {
  console.log('Animal is moving.');
};

var Dog = function() {};
// Dog.prototype = new Animal('land'); // method 1
// new Animal('land'); returns an instance of Animal with variable `type` initialized
Dog.prototype = Object.create(Animal.prototype); // method 2
// Animal.prototype doesn't have `type` property, as well as its new instances
// only the newly created instances will have properties set to `this` insdie the constructor function
// on the other hand, behaviors in Animal.prototype are inherited

Dog.prototype.say = function() {
  console.log(this.name + ' say Woof!');
};

Dog.prototype.run = function() {
  console.log(this.name + ' runs away.');
};

var fido = new Dog();
fido.move()
