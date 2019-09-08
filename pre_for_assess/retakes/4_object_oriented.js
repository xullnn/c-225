function createItem(id, name, stock, price) {
  return {
    id: id,
    name: name,
    stock: stock,
    price: price,
    setPrice: function (price) {
      if (price > 0) {
        return this.price = price;
      } else {
        alter('Invalid price!');
      };
    },

    describeProduct: function () {
      for(let key in this) {
        if (['id', 'name', 'stock', 'price'].includes(key)) {
        console.log(key[0].toUpperCase() + key.substr(1) + ': ' + item[key]);
        }
      }
    }
  };
};

// notice every created object has new copy of functions
