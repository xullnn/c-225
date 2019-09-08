var a = 1;
var foo;
var obj;

function Foo() {
  this.a = 2;
  this.bar = function() {
    console.log(this.a);
  };
  this.bar(); // invoke function just defined
}

foo = new Foo(); // an instance of Foo

foo.bar(); // the instance `foo` invoke `bar` function
Foo();
// invoke `Foo` directly
// since it's invoked at the global level and without `new`
// so `this` refers to global object
// global.a = 2
// then this.bar() ==> global.a ==> logs 2

obj = {};
Foo.call(obj);
// call Foo with set object {}
// so now `this` refers to `obj`
// logs 2 too

obj.bar(); // 2

console.log(this.a); //  2
