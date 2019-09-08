var contacts = {
  list: [],
  add: function(name, gender) {
    var contact = new Contact(name, gender);
    this.list.push(contact);
  },
  males: function() {
    return this.list.filter(function(contact) {
      return contact.gender === 'male';
    });
  },
  females: function() {
    return this.list.filter(function(contact) {
      return contact.gender === 'female';
    });
  },
  filterByName: function(name) {
    return this.list.filter(function(contact) {
      return contact.hasName(name)
    });
  },
};

function Contact(name, gender) {
  this.name = name;
  this.gender = gender;
};

Contact.prototype.hasName = function(name) {
  return this.name === name;
}

contacts.add('Lily','female')
contacts.add('Bob', 'male')
contacts.add('Bob', 'female')
contacts.add('Joe', 'male')
contacts.add('Loty', 'female')

contacts.list;
contacts.males();
contacts.females();
contacts.filterByName('Bob')
