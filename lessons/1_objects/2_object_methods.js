var me = {
  firstName: 'Jane',
  lastName: 'Doe',
};

function fullName(person) {
  console.log(person.firstName + ' ' + person.lastName);
}

var friend = {
  firstName: 'John',
  lastName: 'Smith',
};

var mother = {
  firstName: 'Amber',
  lastName: 'Doe',
};

var father = {
  firstName: 'Shane',
  lastName: 'Doe',
};

var people = {
  collection: [],
  fullName: function(person) {
    console.log(person.firstName + ' ' + person.lastName);
  },

  rollCall: function() {
    this.collection.forEach(this.fullName);
  },
}

var newPerson = {
  firstName: 'Caven',
  lastName: 'Xu',
};

people.getIndex = function(person) {
  var index = -1;
  this.collection.forEach(function(comparator, i) {
    if (comparator.firstName === person.firstName && comparator.lastName === person.lastName) {
      index = i
    }
  })

  return index;
}

people.isInValidPerson = function(person) {
  return typeof person.firstName !== 'string' || typeof person.lastName !== 'string';
}

people.remove = function(person) {
  var index = this.getIndex(person);

  if (this.isInValidPerson(person)) {
    return;
  }

  if (index === -1) {
    return;
  }

  this.collection.splice(index, 1);
}

people.add = function(person) {
  if (this.isInValidPerson(person)) {
    return;
  }

  var newId = this.collection.length + 1;
  person.id = newId;

  this.collection.push(person);
}

people.get = function(person) {
  if (this.isInValidPerson(person)) {
    return;
  }

  return this.collection[this.getIndex(person)];
}

people.update = function(person) {
  if (this.isInValidPerson(person)) {
    return;
  }

  var existedPersonId = this.getIndex(person);
  if (existedPersonId === -1) {
    this.add(person);
  } else {
    this.collection[existedPersonId] = person;
  }
}

people.add(newPerson);
people.add(me);
people.add(friend);
people.add(mother);
people.add(father);
