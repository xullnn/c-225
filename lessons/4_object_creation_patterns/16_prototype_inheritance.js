function User(first, last) {
  // ...
  var proto = User.prototype;

  var instance = Object.create(proto);
  instance.name = first + ' '+ last;
  return instance;
}

var name = 'Jane Doe';
var user1 = new User('John', 'Doe');
var user2 = User('John', 'Doe');

console.log(name);         // => Jane Doe
console.log(user1.name);   // => John Doe
console.log(user2.name);   // => John Doe


// alternative

function User(first, last){
  if (!(this instanceof User)) {
    return new User(first, last); // notice this is a recursive call
  }

  this.name = first + ' ' + last;
}

var name = 'Jane Doe';
var user = User('John', 'Doe');

console.log(name);        // => Jane Doe
console.log(user.name);   // => John Doe
