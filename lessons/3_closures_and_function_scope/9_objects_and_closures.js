function makeList() {
  var items = [];

  return function(item) {
    let index = items.indexOf(item);

    if (item === undefined) {
      if (items.length === 0) {
        console.log('This is an empty list.');
      } else {
        items.forEach(i => console.log(i));
      }
    } else if (index === -1) {
      items.push(item);
      console.log(`${item} added.`);
    } else {
      items.splice(index, 1);
      console.log(`${item} removed.`)
    }
  }
}

// rewrite

function makeList() {
  var items = [];
  return {
    add: function(item) {
      if (!items.includes(item)) {
        items.push(item);
        console.log(`${item} added.`);
      } else {
        console.log(`${item} is already in the list.`)
      }
    },
    remove: function(item) {
      let index = items.indexOf(item);

      if (index === -1) {
        console.log(`${item} not found.`);
      } else {
        items.splice(index, 1);
        console.log(`${item} removed.`);
      }
    },
    list: function() {
      if (items.length === 0) {
        console.log('This is an empty list.');
      } else {
        items.forEach(i => console.log(i));
      }
    }
  }
}
