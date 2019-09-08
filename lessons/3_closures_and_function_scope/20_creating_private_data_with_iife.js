var inventory = (function() {
  var stocks = [];

  return {
    stockCounts: function() {
      stocks.forEach(function(stock) {
        console.log(stock.name + ': ' + String(stock.count));
      });
    },

    addStock: function(newStock) {
      var isValid = stocks.every(function(stock) {
        return newStock.name !== stock.name;
      });

      if (isValid) stocks.push(newStock);
    },
  };  // end of object
}     // end of outer function
)()     // end of expression and invoked immediately

// refactor

var inventory = (function() {
  var stocks = [];

  function isValid(newStock) {
    return stocks.every(function(stock) {
      return newStock.name !== stock.name;
    });
  }

  return {
    stockCounts: function() {
      stocks.forEach(function(stock) {
        console.log(stock.name + ': ' + String(stock.count));
      });
    },

    addStock: function(newStock) {
      if (isValid(newStock)) stocks.push(newStock);
    },
  };  // end of object
}     // end of outer function
)()     // end of expression and invoked immediately


// Understand the Structure:
// - Function expression --> returns a function
//   - function declaration --> creates a closure
//     - return an object --> has access to the closure
// - Append `()` to invoke function immediately -->
//   - returns an object carries the closure which is private to outer scope
//   - but is accessible to the returned object by the immediately invocation of the function expression
