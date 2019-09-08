// var obj = {
//   afunc() {
//     console.log('Hello.');
//   },
// }

var ItemCreator = (function() {
  function generateSkucode(itemName, category) {
    return (itemName.replace(/\s/g, '').slice(0,3).toUpperCase() +
            category.replace(/\s/g, '').slice(0,2).toUpperCase());
  };

  function isValidItemName(itemName) {
    return itemName.replace(/\s/g, '').length >= 5;
  };

  function isValidCategory(category) {
    return category.replace(/\s/g, '').length >= 5 && category.split(' ').length === 1;
  };

  function isQuantityProvided(quantity) {
    return quantity !== undefined;
  };

  return function(itemName, category, quantity) {
    if (isValidItemName(itemName) && isValidCategory(category) && isQuantityProvided(quantity)) {
      this.skuCode = generateSkucode(itemName, category);
      this.itemName = itemName;
      this.category = category;
      this.quantity = quantity;
    } else {
      return { notValid: true };
    }
  };
})();

var ItemManager = {
  items: [],

  getItem: function(skuCode) {
    return this.items.find(item => item.skuCode === skuCode);
  },

  create: function(itemName, category, quantity) {
    let item = new ItemCreator(itemName, category, quantity);
    if (item.notValid) {
      return false;
    } else {
      this.items.push(item);
    }
  },

  update: function(skuCode, itemInformation) {
    Object.assign(this.getItem(skuCode), itemInformation); // nice, first arg object get changed
  },

  delete: function(skuCode) {
    let item = this.getItem(skuCode);
    this.items.splice(this.items.indexOf(item), 1);
  },

  list: function() {
    return this.items;
  },

  inStock: function() {
    return this.items.filter(item => item.quantity > 0);
  },

  itemsInCategory: function(category) {
    return this.items.filter(item => item.category === category);
  },
};


var ReportManager = {
  init: function(itemManager) {
    this.items = itemManager;
  },

  // createReporter: function(skuCode) {
  //   return (function() {
  //     let item = this.items.getItem(skuCode);
  //
  //     return {
  //       itemInfo: function() {
  //         Object.keys(item).forEach(key => {
  //           console.log(key + ': ' + item[key]);
  //         });
  //       },
  //     };
  //   }).bind(this)(); // `this` here pointing to ReportManager object itself
  // },

  createReporter: function(skuCode) {
      let item = this.items.getItem(skuCode);

      return {
        item: item,
        itemInfo: function() {
          Object.keys(this.item).forEach(key => {
            console.log(key + ': ' + this.item[key]);
          });
        },
      };
    },

  reportInStock: function() {
    console.log(this.items.inStock().map(item => item.itemName).join(', '))
  },
};

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

ItemManager.items;
// returns list with the 4 valid items

ReportManager.init(ItemManager);
ReportManager.reportInStock();
// logs soccer ball,football,kitchen pot

ItemManager.update('SOCSP', { quantity: 0 });
ItemManager.inStock();
// returns list with the item objects for football and kitchen pot
ReportManager.reportInStock();
// logs football,kitchen pot
ItemManager.itemsInCategory('sports');
// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
ItemManager.items;
// returns list with the remaining 3 valid items (soccer ball is removed from the list)

var kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10
