function createPerson(firstName, lastName) {
  var person = {};
  person.firstName = firstName;
  person.lastName = lastName || '';
  person.fullName = function() {
    return (this.firstName + ' ' + this.lastName).trim();
  };

  return person;
}

var john = createPerson('John', 'Doe');
var jane = createPerson('Jane');

john.fullName();
jane.fullName();
