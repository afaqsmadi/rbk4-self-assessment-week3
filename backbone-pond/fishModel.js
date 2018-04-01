// Please modify this file!

var Fish = Backbone.Model.extend({

  defaults: {
    name: 'Larry',
    image: 'http://www.google.com',
    description: 'Regular old fish',
    displayInfo: false
  },

// this function will toggle the description info on the click 
  toggleDescription:function(){
  	  	this.set('displayInfo',!this.get('displayInfo'));


  },

  



});
