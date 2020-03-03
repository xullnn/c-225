- constructor function is intended to be called with `new` operator
- the 4 things happen in a constructor:
  - a new object created
  - the new object is assigned to keyword `this`
  - execute code inside constructor
  - implicitly return the new object

- prototype object
  - `Object.getPrototypeOf()`
  - `obj.isPrototypeOf()` returns `true` if `obj` appears anywhere along the prototypal chain

- `Object.prototype` is at the top of the prototyp chain for all js objects, or say default one

- a property of method is searched through the whole inheritance chain
- up-bottom: property and behavior sharing
- bottom-up: request delegation

- downstream objects can override property and behavior

- `Object.getOwnPropertyNames()` no args
- `obj.hasOwnProperty()`

- methods on `Object.prototype` is globally available


//

let prot = {};
let foo = Object.create(prot);

console.log(Object.getPrototypeOf(foo) === prot);
console.log(prot.isPrototypeOf(foo));

//

var prot = {};

var foo = Object.create(prot);

prot.isPrototypeOf(foo);
Object.prototype.isPrototypeOf(foo);
// Object.prototype is the top one, and based on how `isPrototypeOf` works, this returns true

//
