function timed(func) {
  return function() {
    var start = new Date();
    func();
    var stop = new Date();
    console.log((stop - start).toString() + ' ms have elapsed');
  };
}

function counting() {
  let t = 0;

  while (t < 100000001) {
    t += 1
  }

  return t;
}


// the use of high-order function `timed`
// is more like a partial function use case
var timeCounting = timed(counting);
timeCounting();

// 2

var numbers = [1, 2, 3, 4];
function makeCheckEven() {
  return function(n) {
    return n % 2 === 0
  }
}

var checkEven = makeCheckEven();

numbers.filter(checkEven); // [2, 4]

// 3

function execute(func, operand) {
  return func(operand);
}

execute(function(number) {
  return number * 2;
}, 10); // 20

execute(function(string) {
  return string.toUpperCase();
}, 'hey there buddy'); // "HEY THERE BUDDY"

// 4

function makeListTransformer(func) {
  return function(list) {
    return list.map(func)
  }
}

var timesTwo = makeListTransformer(function(number) {
  return number * 2;
});

timesTwo([1, 2, 3, 4]); // [2, 4, 6, 8]
