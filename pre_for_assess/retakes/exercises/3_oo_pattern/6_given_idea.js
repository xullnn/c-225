// - Item creator is a function(constructor)
// - It's the implementation of how a item is created
//   - inside this constructor, initializing states involves some validation steps
//     - these steps are in form of private function which are only accessible to the constructor
//     - so we need a closure bound to the function constructor
//       - iife should be used

var ItemCreator = function() {
  function validateName(name) {};
  function validateEmail(email) {};

  return function(name, email) {
    validateName(name);
    validateEmail(email);
    this.name = name;
    this.email = email;
  };
}();

- ItemManager's responsibilities are
  - holding an array of items
  - CRUD operations
    - creating item by using ItemCreator constructor as the implementation
    - read
      - items in stock
      - items in given category
    - update item
    - delete item
- It's like the controller of item objects

- ReportManager
  - collaborate with ItemManager
    - therefor it can access items and all operations in ItemManager
  - perform some formatting work after accessing target items
