// let sedan = {
//   speed: 0,
//   rate: 8,
//
//   accelerate: function() {
//     this.speed += this.rate;
//   },
// };


function makeCar(a, s) {
  return {
    speed: 0,
    rate: a,
    brake_rate: s,

    accelerate: function() {
      this.speed += this.rate;
    },

    brake: function() {
      if (this.speed >= brake_rate) {
        this.speed -= this.brake_rate;
      }
    }
  };
};

let hatchback = makeCar(9);
