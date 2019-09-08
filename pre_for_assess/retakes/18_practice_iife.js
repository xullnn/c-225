(function() {
  console.log("Sometimes, syntax isn't intuitive!")
})();


//

var sum = 0;
var numbers;

sum += 10;
sum += 31;

numbers = [1, 7, -3, 3];

function sumation(arr) {
  return arr.reduce(function(sum, number) {
    sum += number;
    return sum;
  }, 0);
}

sum += sumation(numbers);  // ?

//

var sum = 0;
var numbers;

sum += 10;
sum += 31;

numbers = [1, 7, -3, 3];

sum += function(arr) {
  return arr.reduce(function(sum, number) {
    sum += number;
    return sum;
  }, 0);
}(numbers)

//

function countdown(n) {
  (function() {
    for(let i = n; i >= 0; i -= 1) {
      console.log(i);
    }
  })()
}

// recursion version

function countdown(n) {
  (
    function innerCount() {
      if (n < 0) {
        return;
      } else {
        console.log(n);
        return innerCount(n -= 1);
      }
    }
  )()
}
