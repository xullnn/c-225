var a = 10;
var obj = {
  a: a,
}

var newObj = obj;
newObj.a += 10;  // property `a` has been changed

console.log(obj.a === a);   // false
console.log(newObj === obj);// true


var animal = {
  name: 'Pumbaa',
  species: 'Phacochoerus africanus',
};

var menagerie = {
  warthog: animal,    // get the reference old animal
};

animal = {            // reassign
  name: 'Timom',
  species: 'Suricata suricatta',
};

menagerie.meerkat = animal;  // assigned with new animal

menagerie.warthog === animal; // false
menagerie.meerkat === animal; // true
