// Read the following code carefully. What do you think is logged on line 7. Try to answer the question before you run the code.

var person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName);

// `this` at top level references to global object
// call console.log(person.fullName); is equal to
// call console.log(this.firstName + this.lastName);
// is equal to call `undefined + undefined`
// returns NaN
