- todoManager
  - query todoList(object)
  - an object holds interfaces, accepts a todoList as argument

- todoList
  - maintain todo items(object)
  - CRUD operation
    - Create: "Initializes the collection with n number of todo objects"
      - accepts an array of todo objects as the initial set of todos

- todo item
  - Properties:
  * id (must be unique)
  * title
  * completed
  * month
  * year
  * description

  - Shared Methods:
  * isWithinMonthYear(month, year)

---

Data to create todo item and todoList

- todo item:
  - for single creation, input is an object without `id` and `completed` properties
    - this creating procedure should be reused in the initializing of a new list, which accepts an array of todos

```js
// single creations
var todoData = {
  title: 'Buy Milk',
  month: '1',
  year: '2017',
  description: 'Milk for baby',
};
```

- todoList initialization
  - inputs is an array of todo items

```js
var todoData1 = {
  title: 'Buy Milk',
  month: '1',
  year: '2017',
  description: 'Milk for baby',
};

var todoData2 = {
  title: 'Buy Apples',
  month: '',
  year: '2017',
  description: 'An apple a day keeps the doctor away',
};

var todoData3 = {
  title: 'Buy chocolate',
  month: '1',
  year: '',
  description: 'For the cheat day',
};

var todoData4 = {
  title: 'Buy Veggies',
  month: '',
  year: '',
  description: 'For the daily fiber needs',
};

var todoSet = [todoData1, todoData2, todoData3, todoData4];
```

---

How the 3 components of the app interface with each other

- todoManager only use argument list as interface to process todoList
- todoList use object property to hold a reference to a set of todo item objects
- todo item is the smallest unit of the app and its responsibility is to hold data
  - since they share a method `isWithinMonthYear(month, year)`, so this will be included in its constructors `prototype`

---

Data type of the three components:

- todoManager: an object holds all query methods
  - query requirements are reflected on method names
  - just object literal?
- todoList
  - needs constructor `TodoList`
- todoItem
  - needs constructor `Todo`
