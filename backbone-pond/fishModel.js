// Please modify this file!

var Fish = Backbone.Model.extend({

  defaults: {
    name: 'Larry',
    image: 'http://www.google.com',
    description: 'Regular old fish',
    displayInfo: false
  },
   toggleDescription : function()  {
   	this.set({displayInfo : !this.get("displayInfo")})

    console.log("HERE",this.get("displayInfo"))
    //it is work on console but dont work on website
  }
   

});
// i dont know why dont work :( :( 

// must make a function when click make the displayInfo 
//oppisite state by set and get but dont work (in console work)