// pseudo-classical approach

// - states/attributes defined in constructor function
// - behaviors defined in prototype object
//
// requirements:
//   - subclass inherits all states and behaviors from superclasses
//   - upstream constructors should be reused
//

professional = {
  invoice: function() {
    console.log(this.fullName() + ' is Billing customer.')
  },

  payTax: function() {
    console.log(this.fullName() + ' is Paying taxes.')
  },

  logNumber: function(a, b, c) {
    console.log('The numbers are ' + String(a) + ', ' + String(b) + ', ' + String(c));
  }
}

// function extend(instance, sourceObj) { // function definition creates closure already
//   // copy names from module into instance
//     // every name should be a function carrying with a closure which has a reference to the original object
//   Object.getOwnPropertyNames(sourceObj).forEach(name => {
//     instance[name] = function() { // notice the closure here can also reference 'outer outer' variable references
//       return function() {
//         sourceObj[name].apply(this, arguments)
//       }
//     }();
//   })
//
//   return instance;
// };

function extend(target, sourceObj) {
  Object.getOwnPropertyNames(sourceObj).forEach(name => {
    target[name] = function() { // notice the closure here can also reference 'outer outer' variable references
      return function() {
        sourceObj[name].apply(this, arguments)
      }
    }();
  })

  return target;
};

function Person(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
};

Person.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName;
};

Person.prototype.communicate = function() {
  console.log('Communicating!');
};

Person.prototype.eat = function() {
  console.log('Eating!');
};

Person.prototype.sleep = function() {
  console.log('Sleeping!');
};

function Doctor(firstName, lastName, age, gender, specialization) {
  Person.call(this,firstName, lastName, age, gender); // borrow the code, apply the context
  this.specialization = specialization
}

Doctor.prototype = Object.create(Person.prototype);
Doctor.prototype.constructor = Doctor;
Doctor.prototype.diagnose = function() {
  console.log('diagnosing!');
};

function Professor(firstName, lastName, age, gender, subject) {
  Person.call(this,firstName, lastName, age, gender); // borrow the code, apply the context
  this.subject = subject;
};

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.teach = function() {
  console.log('teaching');
};

function Student(firstName, lastName, age, gender, degree) {
  Person.call(this,firstName, lastName, age, gender); // borrow the code, apply the context
  this.degree = subject;
};

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.study = function() {
  console.log('studying');
};

function GraduateStudent(firstName, lastName, age, gender, degree, graduateDegree) {
  Student.call(this, firstName, lastName, age, gender, degree);
  this.graduateDegree = graduateDegree;
}

GraduateStudent.prototype = Object.create(Student.prototype);
GraduateStudent.prototype.research = function() {
  console.log('researching');
}
GraduateStudent.prototype.constructor = GraduateStudent;


var person = new Person('foo', 'bar', 21, 'gender');
console.log(person instanceof Person);     // logs true
person.eat();                              // logs 'Eating'
person.communicate();                      // logs 'Communicating'
person.sleep();                            // logs 'Sleeping'
console.log(person.fullName());            // logs 'foo bar'

var doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'
doctor.diagnose();                         // logs 'Diagnosing'

//------------------------------------------------------------------------

var doctor = extend(new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics'), professional);
var professor = extend(new Professor('foo', 'bar', 21, 'gender', 'Systems Engineering'), professional);

doctor.invoice();                          // logs 'foo bar is Billing customer'
doctor.payTax();
doctor.logNumber(3,7,9)                    // logs 'foo bar Paying taxes'

professional.invoice = function() {
  console.log(this.fullName() + ' is Asking customer to pay');
};

doctor.invoice();                          // logs 'foo bar is Asking customer to pay'
professor.invoice();                       // logs 'foo bar is Asking customer to pay'
professor.pay
