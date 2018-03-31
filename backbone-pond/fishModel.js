// Please modify this file!

var Fish = Backbone.Model.extend({

  defaults: {
    name: 'Larry',
    image: 'http://www.google.com',
    description: 'Regular old fish',
    displayInfo: false
  },
  toggleDescription: function(){
  	this.toggle("description");
  	this.set("displayInfo",!this.get("displayInfo"))
  }

});
