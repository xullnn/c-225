function makeList() {
  let array = [];

  function itemExisted(item) {
    let index = array.indexOf(item);
    return index !== -1;
  };

  return {
    add: function(item) {
      if (!itemExisted(item)) {
        array.push(item);
        console.log(item + ' added!');
      } else {
        console.log(item + ' is already in the list.')
      }
    },

    remove: function(item) {
      if (itemExisted(item)) {
        array.splice(array.indexOf(item), 1);
        console.log(item + ' removed!');
      } else {
        console.log('Item ' + item + ' is not in the list');
      }
    },

    list: function() {
      if (array.length === 0) {
        console.log('This list is empty.');
      } else {
        array.forEach(item => console.log(item));
      }
    },
  }
};

let list = makeList();
list.list();
list.add('one');
list.add('two');
list.remove('three');
list.list();
list.remove('two');
list.list();
