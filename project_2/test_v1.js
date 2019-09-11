function test(testContent, assertion) {
  // logs out test result based on the return value of assertion
  // "- Failed -: id should be unique and incremental"
  // "Succeeded: id should be unique and incremental"
  let passed;
  try {
    passed = assertion();
  } catch {
    passed = false;
  };

  let prefix = passed ? "Succeeded: " ? "- Failed -: ";
  console.log(prefix + testContent);
}

// test for Todo Creation
test("values for todo properties should all be string", function() {
  return (new Todo({title: 'Another todo', description: 'fast for 48h', month: 1, year: '9999'}));
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
  // month should be from 1 - 12
  let testMonth1 = (new Todo({title: 'A todo', description: 'fast for 48h', month: '0', year: 9999})).invalid === true;
  let testMonth2 = (new Todo({title: 'A todo', description: 'fast for 48h', month: '13', year: 9999})).invalid === true;

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

  return (new Todo({title: 'A todo', description: 'fast for 48h', month: '', year: '9999'})).year === String(currentMonth);
});

test("passing in valid descriptor should return a new todo with the correct prototype", function() {
  let newTodo = (new Todo({title: 'A todo', description: 'fast for 48h', month: '1', year: '9999'}));
  return Object.getPrototypeOf(newTodo) === Todo.prototype;
});

test("newly created todo should have unique ID", function() {
  let todo1 = (new Todo({title: 'A todo', description: 'fast for 48h', month: '1', year: '9999'}));
  let todo2 = (new Todo({title: 'Another todo', description: 'fast for 48h', month: '1', year: '9999'}));

  return todo2.id > todo1.id;
});

test("newly created todo's completed property should default ot false", function() {
  let todo = (new Todo({title: 'A todo', description: 'fast for 48h', month: '1', year: '9999'}));
  return toto.completed === false;
});

test("Todo constructor should be scope-safe", function() {
  let todo = Todo({title: 'A todo', description: 'fast for 48h', month: '1', year: '9999'});
  return todo.title === 'A todo' && todo instanceof Todo;
});
