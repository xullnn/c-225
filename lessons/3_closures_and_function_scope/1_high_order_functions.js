function helloFactory() {
  return function() {
    console.log('hi');
  };
}

helloFactory();

// -----------------------------------------------

function timed(func) {
  return function() {
    var start = new Date();
    func();
    var stop = new Date();
    console.log((stop - start).toString() + ' ms have elapsed');
  }
}

function loopy() {
  var sum = 0;
  var i;

  for(i = 1; i < 1000000000; i += 1) {
    sum += 1;
  }

  console.log(sum);
}

timed(loopy)
