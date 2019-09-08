// ItemManager
//   - CRUD item
//   - `items` returns all items
//   - `inStock()` list all instock items
//   - `itemsInCategory()` list items for given category
//
// ReportManager
//   - has an `items` property holds all items from passed in `ItemManager`
//   - `createReporter` takes a SKU code and has methods
//     - itemInfo: print out formatted infor about the item
//     - no other things on the returned object
//   - `reportInStock` logs instock item names in a formatted way
//
// updates through ItemManager should be reflected on the object created via ReportManager
//
// for single item:
//   - sku code(based on `name` and `category`)
//   - item name
//   - category
//   - quantity

ItemManager = {
  items: [],

  generateSku: function(name, category) {
    return (name.replace(/\s/g, '').substr(0, 3) + category.substr(0, 2)).toUpperCase()
  },

  nameToShort: function(name) {
    let strippedChars = name.replace(/\s/g, '');
    if (strippedChars.length < 5) return true;
    return false;
  },

  invalidInfo: function(itemName, categoryName, quantity) {
    // validate name length
    if (this.nameToShort(itemName) || this.nameToShort(categoryName)) return true;
    // validate categoryName doesn't contain ' '
    if (categoryName.indexOf(' ') !== -1) return true;
    // validate name uniqueness
    if (this.itemNames().includes(itemName)) return true;
    // validate quantity is provided
    if (quantity === undefined) return true;

    return false
  },

  itemNames: function() {
    return this.items.map(item => item.name);
  },

  create: function(itemName, categoryName, quantity) {
    if (this.invalidInfo(itemName, categoryName, quantity)) return false;

    let obj = {
      name: itemName,
      category: categoryName,
      quantity: quantity,
      sku: ItemManager.generateSku(itemName, categoryName),
    };
    this.items.push(obj);
  },

  update: function(skuCode, properObject) {
    // find the reference by the give skuCode
      // if found nothing return false
    // update that object
    // return true

    let target = this.items.find(item => item.sku === skuCode);
    if (target === undefined) return false;

    for(proper in properObject) {
      target[proper] = properObject[proper];
    };

    return true;
  },

  inStock: function() {
    return this.items.filter(item => item.quantity > 0);
  },

  itemsInCategory: function(targetCate) {
    return this.items.filter(item => item.category === targetCate);
  },

  delete: function(skuCode) {
    let target = this.items.find(item => item.sku === skuCode);
    if (target === undefined) return false;

    let index = this.items.indexOf(target);
    this.items.splice(index, 1);
    return true;
  },
}

ReportManager = {
  init: function(manager) {
    this.items = manager;
  },

  reportInStock: function() {
    this.items.inStock().map(item => item.name).join(', ')
  },

  createReporter: function(skuCode) {
    let item = this.items.items.find(item => item.sku === skuCode);
    if (item === undefined) return false;
    item.itemInfo = function() {
      for(proper in item) {
        if (typeof item[proper] === 'function') continue;
        console.log(`${proper}: ${item[proper]}`);
      };
    };
    return item;
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
