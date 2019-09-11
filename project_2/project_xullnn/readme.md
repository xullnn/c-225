## Test format

I use `console.log()` to log test content with test result prepended to the content:

```
Succeeded: year and month combination should not be in the past

- Failed -: year and month combination should not be in the past
```

## General thoughts

**`Todo` is a constructor function:**

- it is returned by an IIFE.
- Doing this allows the constructor to access several private validation methods, which are only used during the creation of todo object.
- generating of unique id also use an IIFE to return a function

Basic idea:

```js
var Todo = function() {
  // private methods declared here

  return function(descriptor) { // the real constructor
    // perform validations by accessing private methods
    // set properties
  }
}
```

**`TodoList` is a constructor:**

- The key point here is every `TodoList` instance should keep a private list(array) of todo objects, which should not be able to be accessed directly. In other words, the internal data can only be accessed by given public interfaces.
- IIFE seemed not suitable for constructing the constructor function or prototype object here, because it creates a common closure, which is used commonly by all instances.
- My solutions is
  - use a normal constructor
  - declare and initialize a `todos` array locally
  - then mix in methods while passing `todos` as fixed argument
  - thus each instance gets a reference to the provided methods while with a fixed `todos` passed in

Basic idea:

```js
var listMethods = {
  addTodo: function(todos, descriptor) {
    //
  },

  findById: function(todos, id) {
    //
  },
};

function TodoList(itemArray) {
  let todos = [];

  // process itemArray then initialize list

  // mix in methods while passing todos
  for(let method in listMethods) {
    this[method] = function() {
      return listMethods[method].call(this, todos, ...arguments);
    }
  };
};
```

**`TodoManager` is implemented by Pseudo-classical Pattern**

Basic idea:

```js
function TodoManager(list) {
  this.list = list;
};

TodoManager.prototype.listAll = function() {
  // code
};
```

---

## Some added requirements

Todo:
- title and description >= 5 chars
- month should be between 1-12
- year and month should be greater than or equal to current date
  - means should not create a 'todo' in the past
- if year is missed
  - if given month is less than current month, set year to next year
  - if given month is greater than or equal to current month, set year to current year
- if month is missed, set it to current month

TodoList:
- the search of a specific `todo` object in `TodoList` requires a string `id` argument
- updating a specific `todo` object should not change its `id`
