// ----------------------- implementation for Todo -----------------------

var Todo = function() {
  function validDescriptor(descriptor) {
    return validKeys(descriptor) &&
           validDataType(descriptor) &&
           validLength(descriptor) &&
           validMonth(descriptor) &&
           validYear(descriptor) &&
           validYearMonthCombination(descriptor);
  };

  function validKeys(descriptor) {
    let shouldHave = ['title', 'month', 'year', 'description'];

    if (Object.keys(descriptor).length !== 4) return false;

    for(let key in descriptor) {
      if (!shouldHave.includes(key)) return false;
    };

    return true;
  };

  function validDataType(descriptor) {
    for(let key in descriptor) {
      if (typeof descriptor[key] !== 'string') return false;
    };

    return true;
  };

  function validLength(descriptor) {
    return descriptor.title.trim().length >= 5 && descriptor.description.trim().length >= 5;
  };

  function validMonth(descriptor) {
    if (descriptor.month.trim() === '') return true;

    let validMonths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    return validMonths.includes(Number(descriptor.month));
  };

  function validYear(descriptor) {
    if (descriptor.year.trim() === '') return true;

    let currentYear = (new Date()).getFullYear();

    return Number(descriptor.year) >= currentYear;
  }

  function validYearMonthCombination(descriptor) {
    if (descriptor.year.trim() === '' || descriptor.month.trim() === '') return true;

    let year = Number(descriptor.year);
    let month = Number(descriptor.month);
    let currentYear = (new Date()).getFullYear();
    let currentMonth = (new Date()).getMonth() + 1;

    if (month < currentMonth) {
      return year > currentYear;
    } else {
      return year >= currentYear;
    };
  }

  function readjustYearMonth(descriptor) {
    let month = descriptor.month.trim();
    let year = descriptor.year.trim();
    let currentYear = (new Date()).getFullYear();
    let currentMonth = (new Date()).getMonth() + 1;

    if (month === '' && year === '') {
      descriptor.year = String(currentYear);
      descriptor.month = String(currentMonth);
    } else if (month === '') {
      descriptor.month = String(currentMonth);
    } else if (year === '') {
      descriptor.year = Number(month) < currentMonth ? String(currentYear + 1) : String(currentYear);
    }
  };

  var generateID = function() {
    var id = 0;

    return function() {
      return id += 1;
    }
  }();

  return function (descriptor) {
    if (this.constructor !== Todo) {
      return (new Todo(descriptor))
    } else {
      if (!validDescriptor(descriptor)) return { invalid: true };
      if (descriptor.year.trim() === '' || descriptor.month.trim() === '') readjustYearMonth(descriptor);

      this.id = String(generateID());
      this.completed = false;
      Object.assign(this, descriptor);
    }
  };
}();

// ----------------------- implementation for todoList -----------------------

var listMethods = {
  allTodos: function(todos) {
    if (todos.length === 0) return [];

    let shadowList = todos.map(todo => Object.assign({}, todo));

    return shadowList;
  },

  addTodo: function(todos, descriptor) {
    let newTodo = new Todo(descriptor);

    if (newTodo.invalid !== true) {
      todos.push(newTodo);
      return true;
    } else {
      return false;
    }
  },

  findById: function(todos, id) {
    return this.allTodos(todos).find(todo => todo.id === id);
  },

  deleteById: function(todos, id) {
    let target = todos.find(todo => todo.id === id);
    let index = todos.indexOf(target);

    if (index === -1) {
      return false;
    } else {
      todos.splice(index, 1);
      return true;
    }
  },

  updateById: function(todos, id, descriptor) {
    let target = todos.find(todo => todo.id === id);
    let tempTodo = Object.assign({}, target, descriptor)

    delete tempTodo.id;
    delete tempTodo.completed;

    let newTodo = new Todo(tempTodo);

    if (newTodo.invalid === true) {
      return false;
    } else {
      for(let key in tempTodo) {
        if (key === 'id') continue;
        target[key] = tempTodo[key];
      }
    }
  },

  completeById: function(todos, id) {
    let target = todos.find(todo => todo.id === id);
    target.completed = true;
  },
}

function TodoList(itemArray) {
  let todos = [];
  let newTodo;

  if (itemArray && itemArray.length >= 1) {
    itemArray.forEach(todo => {
      newTodo = new Todo(todo);
      if (newTodo.invalid === undefined) todos.push(newTodo);
    })
  };

  for(let method in listMethods) {
    this[method] = function() {
      return listMethods[method].call(this, todos, ...arguments);
    }
  };
};

// ---------------------- implementation for TodoManager ----------------------

function TodoManager(list) {
  this.list = list;
};

TodoManager.prototype.listAll = function() {
  return this.list.allTodos();
};

TodoManager.prototype.listCompleted = function() {
  return this.listAll().filter(todo => todo.completed);
};

TodoManager.prototype.listByYearMonth = function(year, month) {
  return this.listAll().filter(todo => todo.year === year && todo.month === month);
};

TodoManager.prototype.listCompletedByYearMonth = function(year, month) {
  return this.listCompleted().filter(todo => todo.year === year && todo.month === month);
};


// ---------------------- sample data ----------------------
var todoData1 = {
  title: 'Buy Milk',
  month: '1',
  year: '9999',
  description: 'Milk for baby',
};

var todoData2 = {
  title: 'Buy Apples',
  month: '',
  year: '9999',
  description: 'An apple a day keeps the doctor away',
};

var todoData3 = {
  title: 'Buy chocolate',
  month: '1',
  year: '',
  description: 'For the cheat day',
};

var todoData4 = {
  title: 'Buy Veggies',
  month: '',
  year: '',
  description: 'For the daily fiber needs',
};

var invalidData1 = {
  title: 'Invalid Data',
  month: '',
  year: '',
  description: 'Just',
}

var todoSet = [todoData1, todoData2, todoData3, todoData4];

// -------------- test ----------------

function test(testContent, assertion) {
  let passed;

  try {
    passed = assertion();
  } catch {
    passed = false;
  };

  let prefix = passed ? "Succeeded: " : "- Failed -: ";

  console.log(prefix + testContent);
}

// ----------------------- tests for Todo -----------------------

test("values except for completed should all be string", function() {
  let todo = new Todo({title: 'Another todo', description: 'fast for 48h', month: '1', year: '9999'});
  return (typeof todo.id === 'string') && (typeof todo.completed === 'boolean')
});

test("title and description should have proper length", function() {
  let testForEmpty = (new Todo({})).invalid === true;
  let testForNeither = (new Todo({title: '', description: '', month: '1', year: '9999'})).invalid === true;
  let testForLength = (new Todo({title: '1234', description: '5678', month: '1', year: '9999'})).invalid === true;

  let testTitle1 = (new Todo({description: 'fast for 48h', month: '1', year: '9999'})).invalid === true;
  let testTitle2 = (new Todo({title: '', description: 'fast for 48h', month: '1', year: '9999'})).invalid === true;

  let testDescription1 = (new Todo({title: "A todo", month: '1', year: '9999'})).invalid === true;
  let testDescription2 = (new Todo({title: "A todo", description: '', month: '1', year: '9999'})).invalid === true;

  return testForEmpty && testForNeither && testForLength && testTitle1 && testTitle2 && testDescription1 && testDescription2;
});

test("month should range from 1 - 12", function() {
  let testMonth1 = (new Todo({title: 'A todo', description: 'fast for 48h', month: '0', year: '9999'})).invalid === true;
  let testMonth2 = (new Todo({title: 'A todo', description: 'fast for 48h', month: '13', year: '9999'})).invalid === true;

  return testMonth1 && testMonth2;
});

test("year and month combination should not be in the past", function() {
  let currentYear = (new Date()).getFullYear();
  let currentMonth = (new Date()).getMonth() + 1;

  let testTime1 = (new Todo({title: 'A todo', description: 'fast for 48h', month: String(currentMonth - 1), year: String(currentYear)})).invalid === true;
  let testTime2 = (new Todo({title: 'A todo', description: 'fast for 48h', month: String(currentMonth), year: String(currentYear - 1)})).invalid === true;

  return testTime1 && testTime2;
});

test("current month with empty year should be set to current year", function() {
  let currentYear = (new Date()).getFullYear();
  let currentMonth = (new Date()).getMonth() + 1;

  return (new Todo({title: 'A todo', description: 'fast for 48h', month: String(currentMonth), year: ''})).year === String(currentYear);
});

test("month less than current month with empty year should be set to next year", function() {
  let currentYear = (new Date()).getFullYear();
  let currentMonth = (new Date()).getMonth() + 1;

  return (new Todo({title: 'A todo', description: 'fast for 48h', month: String(currentMonth - 1), year: ''})).year === String(currentYear + 1);
});

test("missing month should be set to current month", function() {
  let currentYear = (new Date()).getFullYear();
  let currentMonth = (new Date()).getMonth() + 1;

  return (new Todo({title: 'A todo', description: 'fast for 48h', month: '', year: '9999'})).month === String(currentMonth);
});

test("passing in valid descriptor should return a new todo with the correct prototype", function() {
  let newTodo = (new Todo({title: 'A todo', description: 'fast for 48h', month: '1', year: '9999'}));

  return Object.getPrototypeOf(newTodo) === Todo.prototype;
});

test("newly created todo should have unique ID", function() {
  let todo1 = (new Todo({title: 'A todo', description: 'fast for 48h', month: '1', year: '9999'}));
  let todo2 = (new Todo({title: 'Another todo', description: 'fast for 48h', month: '1', year: '9999'}));

  return Number(todo2.id) > Number(todo1.id);
});

test("newly created todo's completed property should default ot false", function() {
  let todo = new Todo({title: 'A todo', description: 'fast for 48h', month: '1', year: '9999'});

  return todo.completed === false;
});

test("Todo constructor should be scope-safe", function() {
  let todo = Todo({title: 'A todo', description: 'fast for 48h', month: '1', year: '9999'});

  return todo.title === 'A todo' && todo instanceof Todo;
});

//----------------------- tests for todoList -----------------------

test("creating list without arguments should return a list with an empty array", function(){
  let list = new TodoList();

  return Array.isArray(list.allTodos()) && list.allTodos().length === 0;
});

test("invalid todos should not be added to list", function() {
  let list = new TodoList(todoSet.concat(invalidData1));

  return list.allTodos().length === 4;
});

test("todos in list should be private", function() {
  let list = new TodoList(todoSet);

  return list.todos === undefined;
});

test("only valid single todo can be added to list", function() {
  let list = new TodoList();

  list.addTodo(todoData1);
  list.addTodo(invalidData1);

  return list.allTodos().length === 1 && list.allTodos()[0].title === 'Buy Milk';
});

test("todo can be found by passing ID", function() {
  let list = new TodoList(todoSet);
  let id = list.allTodos()[0].id;
  let todo = list.findById(id);

  return todo.id === id;
});

test("object found by ID is a copy of the original todo object", function() {
  let list = new TodoList(todoSet);
  let id = list.allTodos()[0].id;
  let todo = list.findById(id);

  todo.title = 'Change title';

  return list.findById(id).title === 'Buy Milk';
});

test("delete todo from list based on todo ID", function() {
  let list = new TodoList(todoSet);
  let id = list.allTodos()[0].id;

  list.deleteById(id);

  return list.allTodos().length === 3 && !(list.allTodos().map(todo => todo.id).includes(id));
});

test("update todo with an ID and descriptor passed in", function() {
  let list = new TodoList(todoSet);
  let id = list.allTodos()[0].id;

  list.updateById(id, { title: 'Updated title' });

  return list.findById(id).title === 'Updated title';
});

test("invalid descriptor can't update list", function() {
  let list = new TodoList(todoSet);
  let id = list.allTodos()[0].id;

  list.updateById(id, { title: '1234' });

  return list.findById(id).title === 'Buy Milk';
});

test("todo id can't be changed", function() {
  let list = new TodoList(todoSet);
  let id = list.allTodos()[0].id;

  list.updateById(id, { id: '9876', title: 'Updated title' });

  return list.allTodos()[0].id === id;
});

test("todo can be marked as completed", function() {
  let list = new TodoList(todoSet);
  let id = list.allTodos()[0].id;

  list.completeById(id);

  return list.allTodos()[0].completed === true;
});

// ----------------------- tests for todoManager -----------------------

var todoData5 = {
  title: 'Buy flowers',
  month: '12',
  year: '2099',
  description: 'For the daily fiber needs',
};

var todoData6 = {
  title: 'Buy coffee',
  month: '12',
  year: '2100',
  description: 'Coffee makes people high',
};

var newTodoSet = todoSet.concat([todoData5, todoData6]);

test("todoManager lists the whole list", function() {
  let list = new TodoList(newTodoSet);
  let manager = new TodoManager(list);

  return manager.listAll().length === 6;
});

test("todoManager lists completed todos", function() {
  let list = new TodoList(newTodoSet);
  let id = list.allTodos()[0].id;

  list.completeById(id);
  list.completeById(String(Number(id) + 1));

  let manager = new TodoManager(list);

  return manager.listCompleted().every(todo => todo.completed);
});

test("todoManager list todos by year and month combination", function() {
  let list = new TodoList(newTodoSet);
  let manager = new TodoManager(list);

  return manager.listByYearMonth('2100', '12')[0].description === 'Coffee makes people high';
});

test("todoManager list completed todos by year and month combination", function() {
  let list = new TodoList(newTodoSet);
  let id = list.allTodos()[list.allTodos().length - 1].id;
  let manager = new TodoManager(list);

  let test1 = manager.listCompletedByYearMonth('2100', '12').length === 0;

  list.completeById(id);
  list.completeById(String(Number(id) - 1));

  let test2 = manager.listCompletedByYearMonth('2100', '12').length === 1;

  return test1 && test2;
});

// revision update -------------------------------------------------------

Todo.prototype.isWithinMonthYear = function(month, year) {
  return this.month === month && this.year === year;
};

test("isWithinMonthYear returns true only both year and month are matched", function() {
  let todo1 = new Todo({title: 'Another todo', description: 'fast for 48h', month: '1', year: '9999'});
  let todo2 = new Todo({title: 'Another todo', description: 'fast for 48h', month: '', year: ''});
  let currentYear = (new Date()).getFullYear();
  let currentMonth = (new Date()).getMonth() + 1;

  let testFalse1 = todo1.isWithinMonthYear('2', '9999') === false;
  let testFalse2 = todo2.isWithinMonthYear('2', '9999') === false;
  let testTrue1 = todo1.isWithinMonthYear('1', '9999') === true;
  let testTrue2 = todo2.isWithinMonthYear(String(currentMonth), String(currentYear)) === true;

  return testFalse1 && testFalse2 && testTrue1 && testTrue2;
});
