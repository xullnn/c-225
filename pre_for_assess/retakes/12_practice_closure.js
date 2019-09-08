// - `makeList` function returns function
// - for the returned function
//   - when 1 arg is passed
//     - if a same item is already in the 'list', delete it from the list
//     - if it is a new item push it into the 'list'
//   - when no arg passed in, logs out all items
//
// - the arguments are string, so comparisons are string based not on the object level

function makeList() {
  var list = [];

  return function(item) {
    if (item === undefined) {
      list.forEach(i => console.log(i));
    } else if (list.includes(item)) {
      let itemIndex = list.indexOf(item);
      return list.splice(itemIndex, 1)[0];
    } else if (!list.includes(item)) {
      list.push(item);
      return list;
    }
  }

}
