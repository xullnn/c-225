var franchise = { // object
  name: 'How to Train Your Dragon',
  allMovies: function() { // function
    var self = this;
    return [1, 2, 3].map(function(number) {
      return self.name + ' ' + number;
    });
  },
};
// if we call `franchise.allMovies()` at global level
  // `this` in the nested anonymous function will lose the context of the original object
  // which can lead failure on reading `name` property

// so we should specify the calling context inside the nested anonymous function
