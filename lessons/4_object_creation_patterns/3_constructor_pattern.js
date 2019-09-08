function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function() {
    return (this.firstName + ' ' + this.lastName).trim();
  };
}

var john = new Person('John', 'Doe');
var jane = new Person('Jane');
