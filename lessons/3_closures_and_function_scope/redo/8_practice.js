var inventory = {
  stocks: [],

  stockCounts: function() {
    this.stocks.forEach(stock => {
      console.log(stock.name + ': ' + String(stock.count));
    });
  },

  addStock: function(newStock) {
    let isValid = this.stocks.every(stock => stock.name !== newStock.name);

    if (isValid) this.stocks.push(newStock);
  },
}

inventory.addStock({
  name: 'ballpen',
  count: 5,
});

inventory.stockCounts();
// logs:
// ballpen: 5

inventory.addStock({
  name: 'ballpen',
  count: 5,
});

inventory.stockCounts();

//

var inventory = (function() {
  let stocks = [];

  function isValid(newStock) {
    return stocks.every(stock => stock.name !== newStock.name);
  };


  return {
    stockCounts: function() {
      stocks.forEach(stock => {
        console.log(stock.name + ': ' + String(stock.count));
      });
    },

    addStock: function(newStock) {
      if (isValid(newStock)) stocks.push(newStock);
    },
  }
})();


inventory.addStock({
  name: 'ballpen',
  count: 5,
});

inventory.stockCounts();
// logs:
// ballpen: 5

inventory.addStock({
  name: 'ballpen',
  count: 5,
});

inventory.stockCounts();
// logs:
// ballpen: 5

inventory.stocks.push({
  name: 'ballpen',
  count: 5,
});
