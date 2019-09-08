var prot = {};

var foo = Object.create(prot);

Object.getPrototypeOf(foo) === prot;

prot.isPrototypeOf(foo);

//

var dog = { // prototype object
  say: function() {
    console.log(this.name + ' say Woof!')
  },

  run: function() {
    console.log(this.name + ' runs away!');
  },
};

var fido = Object.create(dog);
fido.name = 'Fido';
fido.say();
fido.run();

//

var boo = {};
boo.myProp = 1;

var far = Object.create(boo);

// lots of code

far.myProp;


Object.getOwnPropertyNames(far).includes('myProp');
far.hasOwnProperty('myProp');
