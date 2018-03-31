// Please modify this file!

var Fish = Backbone.Model.extend({

  defaults: {
    name: 'Larry',
    image: 'http://www.google.com',
    description: 'Regular old fish',
    displayInfo: false
  },
  toggleDescription: function(){
  	console.log(this.get("displayInfo"))
  	this.set("displayInfo",!this.get("displayInfo"))
  	console.log(this.get("description"))
  }

});
