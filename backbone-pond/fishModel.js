// Please modify this file!

var Fish = Backbone.Model.extend({

 toggleDescription : function {
 	this.displayInfo = !displayInfo
 }

  defaults: {
    name: 'Larry',
    image: 'http://www.google.com',
    description: 'Regular old fish',
    displayInfo: false
  }

});
