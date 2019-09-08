function Person(age, name) {
  this.age = age;
  this.name = name;
}

Person.prototype.act = function act() {
  let behavior = this.name + " is " + this.age.toString() + " years old and he is walking.";
  console.log(behavior);
}

var p = new Person(18, "Bob");
p.act();
