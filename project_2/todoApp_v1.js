// interfaces without implementation
var Toddo = function() {
  function validateTitle(title) {};
  var generateID = function() {
    var id = 0;
    return function() {
      return id += 1;
    }
  }()

  return function (descriptor) {
      // validate descriptor?
        // validate functions should be private
        // return { invalid: true }

      // this.id = generateID();
      // this.completed = false;
      // Object.assign(this, descriptor);
    };
}();


Todo.prototype.constructor = Todo;

//

var Todo = function() {
  // validate functions

  return {
    isWithinMonthYear: function(){};
    init: function(descriptor) {
      // access private methods
    }
  }
}();

//

var TodoList = function() {
  // todoItems should be private
  // return values should be copy not reference to private data

  // map through todoItems
    // use `Todo` constructor to validate and create single object
    // omit any invalid item
    // return an array of validItems

  // var todos = validItems

  return {
    // init: function(todoItems): return this
    // other methods
      // add: (todo)
      // delete:  (id)
      // update: (id, descriptor)
      // find: (id)
  }
}();

var list = Object.create(TodoList).init([item1, item2])

todoManager = {
  // return a copy, array

  // allTodos: function
  // completedTodos:
  // todosWithinTime:
  // completedTodosWithinTime:
}
