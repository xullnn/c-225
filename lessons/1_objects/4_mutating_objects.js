function change(a) {
  a = 2;
  console.log(a);
}

var b = 1;
change(b);
console.log(b);

function increment(thing) {
  thing.count += 1;
  console.log(thing.count);
}
