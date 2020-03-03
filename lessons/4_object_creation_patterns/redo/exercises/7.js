var Account = (function() {
  var userEmail;
  var userPassword;
  var userFirstName;
  var userLastName;

  function isValidPassword(testPassword) {
    return userPassword === testPassword;
  }

  function getRandomLetterNumber() {
    var randomIndex = Math.floor(Math.random() * 62);
    return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRTSUVWXYZ1234567890'[randomIndex];
  }

  function anonymize() {
    var result = '';
    var i;

    for (i = 0; i < 16; i += 1) {
      result += getRandomLetterNumber();
    }

    return result;
  }

  return {
    init: function(email, password, firstName, lastName) {
      let self = this;
      return function() {
        let userEmail = email;
        let userPassword = password;
        let userFirstName = firstName;
        let userLastName = lastName;
        self.displayName = anonymize();
        return self;
      }();
    },

    reanonymize: function(password) {
      if (userPassword === password) {
        this.displayName = anonymize();
        return true
      } else {
        return 'Invalid Password';
      }
    },

    resetPassword: function(currentPassword, newPassword) {
      if (currentPassword === userPassword) {
        userPassword = newPassword;
        return true;
      } else {
        return 'Invalid Password';
      }
    },

    firstName: function(password) {
      console.log(userPassword)
      if (userPassword === password) {
        return userFirstName;
      } else {
        return 'Invalid Password';
      }
    },

    lastName: function(password) {
      if (userPassword === password) {
        return userLastName;
      } else {
        return 'Invalid Password';
      }
    },

    email: function(password) {
      if (userPassword === password) {
        return userEmail;
      } else {
        return 'Invalid Password';
      }
    },
  };
})();


var fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

// var displayName = fooBar.displayName;
// fooBar.reanonymize('abc');                         // returns true
// console.log(displayName === fooBar.displayName);   // logs false
