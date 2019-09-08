function makeCar(rate, brakeRate) {
  return {
    rate: rate,
    brakeRate: brakeRate,
    speed: 0,
    accelerate: function() {
      return this.speed += this.rate;
    },
    brake: function() {
      if (this.speed <= this.brakeRate) return this.speed = 0;
      return this.speed -= this.brakeRate;
    }
  };
};

var hatchback = makeCar(9);
