// Please modify this file!

var Fish = Backbone.Model.extend({

  defaults: {
    name: 'Larry',
    image: 'http://www.google.com',
    description: 'Regular old fish',
    displayInfo: false
  },

  toggleDescription: function () { 
if (this.get("displayInfo")=== false) {
this.set("displayInfo" , "true")
} 
else {
	this.set("displayInfo" , "false")
}



  }

});
