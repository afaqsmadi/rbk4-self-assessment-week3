// Please modify this file!

var Fish = Backbone.Model.extend({

  defaults: {
    name: 'Larry',
    image: 'http://www.google.com',
    description: 'Regular old fish',
    displayInfo: false
  },

 toggleDescription:function(){
//in this statment i need to toggel if description is appear make hide 
//and if its hide make appear
this.set('displayInfo',!this.get('displayInfo'))
//then i need re-render the result to fishView
}

});
