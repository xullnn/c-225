function createStudent(name, grade) {
  return {
    name: name,
    grade: grade,
    info: function() {
      console.log(`${this.name} is a ${this.grade} student.`)
    },
    courses: [],
    listCourses: function() {
      return this.courses;
    },
    addCourse: function(course) {
      this.courses.push(course);
    },
    notes: {},
    addNote: function(code, note) {
      let course;
      if (course = this.courses.find(course => course.code === code)) {
        this.notes[course.name] = note;
      }
    },
    viewNotes: function() {
      for(subject in this.notes) {
        console.log(`${subject}: ${this.notes[subject]}`);
      }
    },
    updateNote: function(code, note) {
      this.addNote(code, note);
    },
  }
}

var school = (function() {
  var students = [];
  var validGrades = ['1st', '2nd', '3rd', '4th','5th'];

  return {
    students: [], // make it private
    validGrades: ['1st', '2nd', '3rd', '4th','5th'], // make it private
    addStudent: function(studentObj, grade) {
      if (!validGrades.includes(grade)) {
        console.log('Invalid Year');
      } else {
        students.push(studentObj);
      }
    },

    enrollStudent: function(studentObj, courseObj) {
      studentObj.addCourse(courseObj);
    },

    addGrade: function(studentObj, courseCode, grade) {
      let course;
      if (course = studentObj.courses.find(course => course.code === courseCode)) {
        course['grade'] = grade;
      }
    },

    getReportCard: function(studentObj) {
      studentObj.courses.forEach(course => {
        console.log(`${course.name}: ${course.grade || 'In Progress'}`)
      })
    },
    courseReport: function(courseName) {
      let scores = [];
      let courseRecord;

      students.forEach(student => {
        if (courseRecord = student.courses.find(course => course.name === courseName && course['grade'])) {
          scores.push([student.name, courseRecord.grade]);
        }
      })

      if (scores.length === 0) return;

      let average = scores.reduce((acc, record) => {return acc + record[1]}, 0) / scores.length;

      console.log(`=${courseName}=`);
      scores.forEach(record => {console.log(`${record[0]}: ${record[1]}`)});
      console.log('---');
      console.log('Course Average: ' + average);
    },
  }
})()

var foo = createStudent('foo', '3rd')
school.addStudent(foo, '3rd')
school.enrollStudent(foo, { name: 'Math', code: 101, grade: 95, });
school.enrollStudent(foo, { name: 'Advanced Math', code: 102, grade: 90, });
school.enrollStudent(foo, { name: 'Physics', code: 202, });

school.getReportCard(foo);

var bar = createStudent('bar', '1st');

school.addStudent(bar, '1st');

school.enrollStudent(bar, { name: 'Math', code: 101, grade: 91, })

school.getReportCard(bar);

var qux = createStudent('qux', '2nd');
school.addStudent(qux, '2nd');
school.enrollStudent(qux, { name: 'Math', code: 101, grade: 93, });
school.enrollStudent(qux, { name: 'Advanced Math', code: 102, grade: 90, });

school.courseReport('Math');

school.courseReport('Advanced Math');

school.courseReport('Physics');
