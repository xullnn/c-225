// OLOO

// the disadvantage of this approach is that it creates new copies of each function
// for every newly created object
// the advantage is that it keeps a set of private data(email, password, firstName, lastName) for
// every single object

let Account = {
  init: function(email, password, firstName, lastName) { // closure for every new object

    this.resetPassword = function() {
      return function(inputPassword, newPassword) {
        if (inputPassword === password) {
          password = newPassword;
          return true;
        } else {
          console.log('Invalid Password.')
        }
      }
    }();

    this.firstName = function() {
      return function(inputPassword) {
        if (inputPassword === password) {
          console.log(firstName);
        } else {
          console.log('Invalid Password.')
        }
      }
    }();

    this.email = function() {
      return function(inputPassword) {
        if (inputPassword === password) {
          console.log(email);
        } else {
          console.log('Invalid Password.')
        }
      }
    }();

    this.reanonymize = function(inputPassword) {
      let chars = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890';
      function generateSequence() {
        let s = [];
        for(let i = 1; i <= 16; i += 1) {
          s.push(chars[ Math.floor(Math.random() * 62)])
        };

        return s.join('');
      };

      if (inputPassword === password) {
        this.displayName = generateSequence();
        return true;
      } else {
        console.log('Invalid Password.')
      }
    };

    this.reanonymize(password);

    return this;
  }
};


var fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true
//
var displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false

// further exploration

var second = Object.create(Account).init('foo@bar.com', '123456', 'Dave', 'Lee');
console.log(fooBar.firstName('abc'));

// //
//
//
// // How Object.create works
//
// Object.create = function(sourceObj) {
//   function F() {};
//   F.prototype = sourceObj;
//   return new F()
// };
