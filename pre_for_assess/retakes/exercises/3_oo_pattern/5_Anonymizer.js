// OLOO refers to Object Link to Other Object
  // literally write an object as prototype object
    // then use Object.create(prototypeObj) to create instances
    // write an optional `init` method to serve as the interface to initialize an instance

var Account = {
  init: function(email, password, firstName, lastName) {
    var name = generateName();

    this.displayName = name;

    this.email = function(userInput) {
      if (validPassword(userInput)) {
        return email;
      } else {
        console.log('Invalid Password.')
      }
    };

    this.firstName = function(userInput) {
      if (validPassword(userInput)) {
        return firstName;
      } else {
        console.log('Invalid Password.')
      }
    };

    this.lastName = function(userInput) {
      if (validPassword(userInput)) {
        return lastName;
      } else {
        console.log('Invalid Password.')
      }
    };

    this.reanonymize = function(userInput) {
      if (validPassword(userInput)) {
        this.displayName = generateName();
        return true;
      } else {
        console.log('Invalid Password.');
        return false;
      }
    };

    this.resetPassword = function(userInput, newPass) {
      if (validPassword(userInput)) {
        password = newPass;
        return true;
      } else {
        console.log('Invalid Password.');
        return false;
      }
    }

    function validPassword(userInput) {
      return userInput === password ? true : false;
    };

    function generateName() {
      var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
      var chosen = [];
      for(let i = 1; i <= 16; i += 1) {
        chosen.push(alphabet[Math.floor(26 * Math.random())]);
      }

      return chosen.join('')
    }

    return this;
  },
}

var fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

var displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false
