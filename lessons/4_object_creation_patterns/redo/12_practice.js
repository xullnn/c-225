function newPerson(name) {
  this.name = name;
  Object.defineProperties(this, {
    log: {
      value: function() { console.log(this.name) },
      writable: false,
    }
  })
  return this;
};

var me = newPerson('Shane Riley');
me.log();     // => Shane Riley
me.log = function() { console.log('Amanda Rose'); };
me.log();     // => Shane Riley
