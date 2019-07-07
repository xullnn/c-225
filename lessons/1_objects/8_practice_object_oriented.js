function createProduct(id, name, stock, price) {
  return {
    id: id,
    name: name,
    stock: stock,
    price: price,

    describeProduct: function () {
      if (typeof this !== 'object') return;

      for(key in this) {
        if (typeof this[key] === 'string' || typeof this[key] === 'number') {
        console.log(` => ${key}: ${this[key]}`);
        }
      }
    },

    setPrice: function (price) {
      if (price < 0) {
        alert('Invalid price!');
      } else {
        this.price = price;
        return price;
      }
    }
  }
}

var scissors = createProduct(0, 'Scissors', 8, 10);
var drill = createProduct(1, 'Cordless Drill', 15, 45);

console.log(scissors);
console.log(drill);

scissors.setPrice(99);
console.log(scissors);
drill.describeProduct();
