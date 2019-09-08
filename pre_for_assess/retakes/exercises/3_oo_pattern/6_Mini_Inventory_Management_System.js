ItemManager = function() {
  function generateSku(productName, category) {
    var front = productName.replace(/\s/g, '').substr(0,3);
    return (front + category.substr(0,2)).toUpperCase();
  };


  return {
    items: [],

    create: function(productName, category, quantity) {
      var notValid = { notValid: true }

      if (!(productName && category && (quantity !== undefined))) return notValid;
      if (productName.replace(/\s/g, '').length < 5) return notValid;
      if (category.indexOf(' ') !== -1 || category.length < 5) return notValid;

      var sku = generateSku(productName, category);

      var obj = {
        skuCode: sku,
        name: productName,
        category: category,
        quantity: quantity,
      }

      this.items.push(obj);

      return obj;
    },

    update: function(skuCode, descriptor) {
      var target = this.items.find(item => {return item.skuCode === skuCode});
      if (!target) return false;
      Object.assign(target, descriptor);
      return true;
    },

    inStock: function() {
      return this.items.filter(item => { return item.quantity !== 0 });
    },

    itemsInCategory: function(category) {
      return this.items.filter(item => { return item.category === category })
    },

    delete: function(skuCode) {
      var target = this.items.find(item => {return item.skuCode === skuCode});
      if (!target) return false;
      var index = this.items.indexOf(target);
      this.items.splice(index, 1);
      return true
    }
  }
}();

//

var ReportManager = {
  init: function(manager) {
    this.items = manager;
  },

  createReporter: function(skuCode) {
    var target = this.items.items.find(item => {return item.skuCode === skuCode});

    return {
      itemInfo: function() {
        for(let key in target) {
          console.log(key + ': ' + target[key]);
        }
      }
    }
  },

  reportInStock: function() {
    var instock = this.items.items.filter(item => { return item.quantity !== 0})
    return instock.map(item => item.name);
  }
}

// test

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

console.log(ItemManager.items);
console.log('\n')
// returns list with the 4 valid items

ReportManager.init(ItemManager);
console.log(ReportManager.reportInStock());
// logs soccer ball,football,kitchen pot

ItemManager.update('SOCSP', { quantity: 0 });
console.log(ItemManager.inStock());
console.log('\n')
// returns list with the item objects for football and kitchen pot
console.log(ReportManager.reportInStock());
// logs football,kitchen pot
console.log(ItemManager.itemsInCategory('sports'));
console.log('\n')
// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
console.log(ItemManager.items);
console.log('\n')
// returns list with the remaining 3 valid items (soccer ball is removed from the list)

var kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

console.log("\n")
ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10
