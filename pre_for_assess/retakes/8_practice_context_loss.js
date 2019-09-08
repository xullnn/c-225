var turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription: function() {
    return this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.';
  }
};

function logReturnVal(func, context) {
  var returnVal = func.call(context);
  console.log(returnVal);
}

var getTurkDescription = turk.getDescription.bind(turk);
getTurkDescription();

// logReturnVal(turk.getDescription, turk);


// 2

var TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    let self = this;
    this.titles.forEach(function(title) {
      console.log(self.seriesTitle + ' ' + title);
    });
  }
};

TESgames.listGames();

// alternative

var TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    this.titles.forEach(function(title) {
      console.log(this.seriesTitle + ' ' + title);
    }, this);
  }
};

TESgames.listGames();

// 3

var foo = {
  a: 0,
  incrementA: function() {
    function increment() {
      this.a += 1;
    }

    increment.call(this);
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();

// variant

var foo = {
  a: 0,
  incrementA: function() {
    let increment = function() {
      this.a += 1;
    }.bind(this)

    increment();
    increment();
    increment();
  }
};
