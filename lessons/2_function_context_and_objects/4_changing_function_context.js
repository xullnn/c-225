var temperatures = [53, 86, 12, 43];

function average() {
  var total = 0;
  for(let i = this.length - 1; i >= 0; i -= 1) {
    total += this[i];
  }

  return total / this.length;
}

// console.log(average.call(temperatures));
// console.log(average.apply(temperatures));

// var averageTemperature = average.bind(temperatures);
// console.log(averageTemperature());

temperatures.average = average;
console.log(temperatures.average());
