function subtract(a, b) {
  return a - b;
}

function sub5(a) {
  // implement this function using partial function application
  return subtract(a, 5)
}

sub5(10); // 5
sub5(20); // 15

// ------------------------------------------------------------------

function subtract(a, b) {
  return a - b;
}

function makeSubN(n) {
  // implement this function...
  return function(first) {
    return subtract(first, n)
  }
}

var sub5 = makeSubN(5);
sub5(10); // 5

// ------------------------------------------------------------------

function makePartialFunc(func, b) {
  // implement this function...
  return function(a) {
    return func(a, b);
  }
}

function multiply(a, b) {
  return a * b;
}

var multiplyBy5 = makePartialFunc(multiply, 5);

multiplyBy5(100); // 500

// ------------------------------------------------------------------

var subjects = {
  English: ['Bob', 'Tyrone', 'Lizzy'],
  Math: ['Fatima', 'Gary', 'Susan'],
  Biology: ['Jack', 'Sarah', 'Tanya'],
};

function rollCall(subject, students) {
  console.log(subject + ':');
  students.forEach(function(student) {
    console.log(student);
  });
}

function makeMathRollCall() {
  // implement this function...
  return function(students) {
    return rollCall('Math', students)
  }
}

var mathRollCall = makeMathRollCall();
mathRollCall(subjects['Math']);
// => Math:
// => Fatima
// => Gary
// => Susan
