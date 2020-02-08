function makeCounterLogger(start) {
  return function(ending) {
    if (start >= ending) {
      for(let i = start; i >= ending; i -= 1) {
        console.log(i);
      }
    } else {
      for(let i = start; i <= ending; i += 1) {
        console.log(i);
      }
    }
  };
};

let counter = makeCounterLogger(5);
counter(8);
counter(2);

//

function makeList() {
  let list = [],
      msg;
  return function(item) {
    if (list.length === 0 && item === undefined) {
      console.log('The list is empty.');
    } else if (item === undefined) {
      list.forEach(item => console.log(item));
    } else if (list.includes(item)) {
      let index = list.indexOf(item);
      list.splice(index, 1);
      console.log(item + ' removed!');
    } else {
      list.push(item);
      console.log(item + ' added!');
    }
  };
};
