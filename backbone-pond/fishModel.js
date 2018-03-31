// Please modify this file!

/*
var Fish = Backbone.Model.extend({

  defaults: {
    name: 'Larry',
    image: 'http://www.google.com',
    description: 'Regular old fish',
    displayInfo: false
  }

});

*/

var Fish = Backbone.Model.extend({

  defaults: {
    name: 'Larry',
    image: 'http://www.google.com',
    description: 'Regular old fish',
    displayInfo: false
  },

  valDesc = this.get("description"),

  toggleDescription: function(){

   this.val = this.get("description");

   if( val !== "" ){
    
    this.set("description", "");

   }

   this.set("description", valDesc);

  }


});




