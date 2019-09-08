// function makeList() {
  // object holds that array in closure?
  // object has an array as property?
// }

// approach 1

function makeList() {
  var container = []; // no interface on the returned object

  return {
    add: function(item) {
      if (!container.includes(item)) {
        container.push(item);
        console.log(`Item '${item}' added.`)
      } else {
        console.log(`${item} is already in the list`);
      }
    },

    remove: function(item) {
      if (container.includes(item)) {
        let index = container.indexOf(item);
        container.splice(index, 1);
        console.log(`${item} removed.`)
      } else {
        console.log(`Item '${item}' not found.`)
      }
    },

    list: function() {
      if (container.length === 0) {
        console.log('The list is empty.');
      } else {
        container.forEach(i => console.log(i));
      }
    },
  }
}

// test approach 1

var list = makeList();
list.add('peas');
list.list();

list.add('corn');
list.list();

list.remove('peas');
list.list();

// approach 2

function makeList() {
  return {
    container: [],  // interface is exposed to user
    add: function(item) {
      if (!this.container.includes(item)) {
        this.container.push(item);
        console.log(`Item '${item}' added.`)
      } else {
        console.log(`${item} is already in the list`);
      }
    },

    remove: function(item) {
      if (this.container.includes(item)) {
        let index = this.container.indexOf(item);
        this.container.splice(index, 1);
        console.log(`${item} removed.`)
      } else {
        console.log(`Item '${item}' not found.`)
      }
    },

    list: function() {
      if (this.container.length === 0) {
        console.log('The list is empty.');
      } else {
        this.container.forEach(i => console.log(i));
      }
    },
  }
}

// test approach 2

var list = makeList();
list.add('peas');
list.list();

list.add('corn');
list.list();

list.remove('peas');
list.list();
