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

foo = createStudent('Foo', '1st');
foo.info();
// 'Foo is a 1st year student'
foo.listCourses();
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
// "Math: Fun Course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// "Math: Fun Course; Remember to study for algebra"
// "Advance Math: Difficult Subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
// "Math: Fun Course"
// "Advance Math: Difficult Subject"
