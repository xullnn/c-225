// When called with an argument that is not already on the list, it adds that argument to the list.
// When called with an argument that is already on the list, it removes the element from the list.
// When called without arguments, it logs all items on the list. If the list is empty, it logs an appropriate message.

// outer function only returns a `list()` function which takes an argument
  // when using outer function to create a `list()` function
    // it retains the closure, that's where we can put the real list([])
    // this list[] is only accessible for the returned function `list()`
  // then we can use conditonals to handle different input

function makeList() {
  var listArray = [];

  return function(item) {
    if (!item) {
      console.log(listArray.length === 0 ? 'This list is empty.' : listArray);
    } else if (listArray.includes(item)) {
      listArray.splice(listArray.indexOf(item), 1);
      console.log(`Todo ${item} is removed.`);
    } else {
      listArray.push(item);
      console.log(`Todo ${item} is added.`);
    }
  }
}

var list = makeList();
list();

list('make breakfast');
list('read book');
list();

list('make breakfast');
list()
