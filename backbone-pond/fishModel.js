// Please modify this file!

var Fish = Backbone.Model.extend({

  defaults: {
    name: 'Larry',
    image: 'http://www.google.com',
    description: 'Regular old fish',
    displayInfo: false
  }

  toggle:function() {
  	// body...
  	if (this.set("fish" , 'tr')){!(this.get('tr'))};
  };

});
//What i gana do ::  
//I will make a toggle function which is has a condition if set ("key", value) exist ,, 
//return the inverse of if statement which is : (!this.get(value)) ..