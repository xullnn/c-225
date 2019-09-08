var Account = {
  randChars: function(charAmount) {
    const allChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRTSUVWXYZ1234567890';
    let chars = '';

    for(let i = 1; i <= charAmount; i += 1) {
      chars += allChars[Math.floor(Math.random() * 62)];
    }

    return chars;
  },

  init: function(email, password, firstName, lastName) {

    this.invalidPassoword = function(inputPassword) {
      if (inputPassword !== password) {
        console.log('Invalid password');
        return true;
      }

      return false;
    }

    this.email = function(inputPassword) {
      if (this.invalidPassoword(inputPassword)) return;
      return email;
    },

    this.firstName = function(inputPassword) {
      if (this.invalidPassoword(inputPassword)) return;
      return firstName;
    },

    this.lastName = function(inputPassword) {
      if (this.invalidPassoword(inputPassword)) return;
      return email;
    },

    this.displayName = this.randChars(16);

    return this;
  },

  resetPassword: function(old, newPossword) {
    if (this.invalidPassoword(old)) return false;
    email = this.email(old);
    firstName = this.firstName(old);
    lastName = this.lastName(old);
    this.init(email, newPossword, firstName, lastName);
    return true;
  },

  reanonymize: function(inputPassword) {
    if (this.invalidPassoword(inputPassword)) return;
    this.displayName = this.randChars(16);
    return true;
  },
};


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

// -------------- further exploration

var bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(fooBar.firstName('abc'));              // logs 'baz' but should log foo.
console.log(fooBar.email('abc'));                  // 'baz@qux.com' but should 'foo@bar.com'
