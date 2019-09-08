var temperatures = [53, 86, 12, 43];

function average(values) {
  var total = 0;
  var i;
  for (i = values.length - 1; i >= 0; i -= 1) {
    total += values[i];
  }

  return total / values.length;
};

console.log(average(temperatures));

// set the passed in array object as the context

function average() {
  var total = 0;
  var i;
  for (i = this.length - 1; i >= 0; i -= 1) {
    total += this[i];
  }

  return total / this.length;
};

console.log(average.call(temperatures));

// directly assign the function to the array, then call it from the array

temperatures.average = average;
temperatures.average();
