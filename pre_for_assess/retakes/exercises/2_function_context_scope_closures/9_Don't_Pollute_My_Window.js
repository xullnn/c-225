var name = 'Naveed';
var greeting = 'Hello';

var greeter = {
  message: greeting + ' ' + name + '!',
  sayGreetings: function() {
    console.log(this.message);
  }
};

//

greeter = function() {
  var name = 'Naveed';
  var greeting = 'Hello';

  return  {
    message: greeting + ' ' + name + '!',
    sayGreetings: function() {
      console.log(this.message);
    }
  };
}()
