var me = {
  firstName: 'Jane',
  lastName: 'Doe',
};

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

function fullName(person) {
  console.log(person.firstName + ' ' + person.lastName);
}

var people = [];

people.push(me);
people.push(friend);
people.push(mother);
people.push(father);

// function rollCall(collection) {
//   for (let i = 0; i < collection.length; i += 1) {
//     fullName(collection[i])
//   }
// }

// function rollCall(collection) {
//   collection.forEach(fullName);
// }

var people = {
  collection: [me, friend, mother, father],

  fullName: person => console.log(person.firstName + ' ' + person.lastName),

  rollCall: () => this.collection.forEach(this.fullName),

  add: person => {
    if (isInvalidPerson(person)) return;
    this.collection.push(person);
  },

  getIndex: person => {
    let index = -1;
    this.collection.forEach((comparator,i) => {
      if (comparator.firstName === perosn.firstName && comparator.lastName === person.lastName) {
        index = 1;
      }
    });
    return index;
  },

  remove: person => {
    if (isInvalidPerson(person)) return;

    let index = this.getIndex(person);
    if (index === -1) return;

    this.collection.splice(index, 1);
  },

  isInvalidPerson: person => {
    return typeof person.firstName === 'string' && typeof person.lastName === 'string';
  },

  get: person => {
    if (isInvalidPerson(person)) return;
    return this.collection[this.getIndex(person)];
  },

  update: person => {
    if (isInvalidPerson(person)) return;

    var existingPersonId = this.getIndex(person);
    if (existingPersonId === -1) {
      this.add(person);
    } else {
      this.collection[existingPersonId] = person;
    }
  }
};

people.rollCall();
