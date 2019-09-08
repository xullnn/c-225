function Person(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

Person.prototype.fullName = function() { return this.firstName + ' ' + this.lastName };
Person.prototype.communicate = function() { console.log('Communicating') };
Person.prototype.eat = function() { console.log('eating') };
Person.prototype.sleep = function() { console.log('sleeping') };

function Doctor(firstName, lastName, age, gender, specialization) {
  Person.call(this, firstName, lastName, age, gender); // super
  this.specialization = specialization;
};

Doctor.prototype = Object.create(Person.prototype);
Doctor.prototype.constructor = Doctor;
Doctor.prototype.diagnose = function() { console.log('diagnosing') };

function Professor(firstName, lastName, age, gender, subject) {
  Person.call(this, firstName, lastName, age, gender);
  this.subject = subject;
}

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.teach = function() { console.log('teaching') };

function Student(firstName, lastName, age, gender, degree) {
  Person.call(this, firstName, lastName, age, gender);
  this.degree = degree;
};

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.study = function() { console.log('studying') };

function GraduateStudent(firstName, lastName, age, gender, degree, gruadateDegree) {
  Student.call(this, firstName, lastName, age, gender, degree);
  this.gruadateDegree = gruadateDegree;
}

GraduateStudent.prototype = Object.create(Student.prototype);
GraduateStudent.prototype.constructor = GraduateStudent;
GraduateStudent.prototype.research = function() { console.log('researching') }

professional = {
  invoice: function() {
    console.log(this.fullName() + ' is Billing customer')
  },

  payTax: function() {
    console.log(this.fullName() + ' Paying taxes')
  },
};

function delegate(callingObject, mixinObject, methodName, ...args) {
  // closure created here holds all the references to the methods
  // so if methods in the mixinObject change(update)
    // these changes can be reflected to the extended object

  // when we pass in callingObject, mixinObject
  // something implicitly happend:
    // var callingObject = callingObject;
    // var mixinObject = mixinObject;
    // ...

  // the closure incorperate these variables(references) including the one pointing to mixinObject
    // they are objects which have the references to their methods

  // then we return this function along with all the stuff in the closure
  // since the returned function contains(and has access) the references in the closure
    // further more, since the closure contains references rather than values
    // so if the objects to which these references are pointing change
      // the changes can be reflected on this returned functions
        // even the function returned long ago
  return function() {
    return mixinObject[methodName].call(callingObject, args);
  };
};

function extend(instance, mixinObj) {
  for(method in mixinObj) {
    // instance[method] = delegate(instance, mixinObj, method)
    instance[method] = function delegate(callingObject, mixinObject, methodName, ...args) {
      return function() {
        return mixinObject[methodName].call(callingObject, args);
      };
    }(instance, mixinObj, method);
    // it's like we package the data references and the functionalities together
    // is there an alternative to solve this?

  };
  return instance;
};

var doctor = extend(new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics'), professional);
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'
doctor.diagnose();                         // logs 'Diagnosing'

var professor = extend(new Professor('foo', 'bar', 21, 'gender', 'Systems Engineering'), professional);
console.log(professor instanceof Person);     // logs true
console.log(professor instanceof Professor);  // logs true
professor.eat();                              // logs 'Eating'
professor.communicate();                      // logs 'Communicating'
professor.sleep();                            // logs 'Sleeping'
console.log(professor.fullName());            // logs 'foo bar'
professor.teach();                            // logs 'Teaching'

doctor.invoice();                          // logs 'foo bar is Billing customer'
doctor.payTax();                           // logs 'foo bar Paying taxes'

professional.invoice = function() {  // method changes should reflect on all minxed in objects below
  console.log(this.fullName() + ' is Asking customer to pay');
};

doctor.invoice();                          // logs 'foo bar is Asking customer to pay'
professor.invoice();                       // logs 'foo bar is Asking customer to pay'
professor.payTax();                        // logs 'foo bar Paying taxes'
