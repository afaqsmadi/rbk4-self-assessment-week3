// Please modify this file!

var Fish = Backbone.Model.extend({

  defaults: {
    name: 'Larry',
    image: 'http://www.google.com',
    description: 'Regular old fish',
    displayInfo: false
  },

 toggleDescription : function(e){
 	this.model.set('displayInfo',!this.model.get('displayInfo'))
 }

});

// this.model.on('handelClick',function(){
// 	this.model.toggleDescription
// })