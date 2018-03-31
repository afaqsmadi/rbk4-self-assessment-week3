// Please modify this file!

var Fish = Backbone.Model.extend({

  defaults: {
    name: 'Larry',
    image: 'http://www.google.com',
    description: 'Regular old fish',
    displayInfo: false
  },
  toggleDescription:function(){
  	if(!this.get(this.defaults.displayInfo)){
  	return	this.get(this.defaults.displayInfo)
  	}
  }

});

// [ ] Inside of `fishModel.js`, create a `toggleDescription` function such that when a fish <tr> is clicked, the fish description will toggle on or off. DO NOT MODIFY any other files. 
