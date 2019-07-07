// // All cars start out not moving, and sedans
// // can accelerate about 8 miles per hour per second (mph/s).
//
// var sedan = {
//   speed: 0,
//   rate: 8,
//   // To accelerate, add the rate of acceleration
//   // to the current speed.
//   accelerate: function() {
//     this.speed += this.rate;
//   },
// };
//
// var coupe = {
//   speed: 0,
//   rate: 12,                 // different from sedan
//   accelerate: function() {
//     this.speed += this.rate;
//   },
// };

function makeCar(rate, brakeRate) {
  return {
    speed: 0,
    rate: rate,
    brakeRate: brakeRate,
    accelerate: function() {
      this.speed += this.rate;
    },
    brake: function() {
      if (this.speed <= this.brakeRate) {
          this.speed = 0
       } else {
          this.speed -= this.brakeRate;
       }
    },
  };
};

var sedan = makeCar(8, 6);
sedan.accelerate();
sedan.speed;

sedan.brake();
sedan.speed;
sedan.brake();
sedan.speed;
