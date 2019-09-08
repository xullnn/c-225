var greetings = {
  morning: 'Good morning ',
  afternoon: 'Good afternoon ',
  evening: 'Good evening ',

  greeting: function(name) {
    var currentHour = (new Date()).getHours();

    if (currentHour < 12) {
      console.log(this.morning + name);
    } else if (currentHour < 18) {
      console.log(this.afternoon + name);
    } else {
      console.log(this.evening + name);
    }
  },
};

var spanishWords = {
  morning: 'Buenos dias, ',
  afternoon: 'Buenas tardes, ',
  evening: 'Buena noches, ',
};

var spanishGreeter = greetings.greeting.bind(spanishWords);

spanishGreeter('Jose');
spanishGreeter('Juan');
