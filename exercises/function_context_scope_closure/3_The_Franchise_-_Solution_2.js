var franchise = { // object
  name: 'How to Train Your Dragon',
  allMovies: function() { // function
    return [1, 2, 3].map(function(number) {
      return this.name + ' ' + number;
    }.bind(this));
  },
};

franchise.allMovies();

// or

var franchise = { // object
  name: 'How to Train Your Dragon',
  allMovies: function() { // function
    return [1, 2, 3].map(function(number) {
      return this.name + ' ' + number;
    }, this);
  },
};
