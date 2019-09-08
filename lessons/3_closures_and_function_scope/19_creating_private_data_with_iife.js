var studentId = 0;

function generateStudentId() {
  studentId += 1;
  return studentId;
}

var generateStudentId = (function() {
  var studentId = 0;

  return function() {
    studentId += 1;
    return studentId;
  };
})();


generateStudentId(); // 1
generateStudentId(); // 2
// ...
