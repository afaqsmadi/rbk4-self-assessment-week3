// Please modify this file!

var Fish = Backbone.Model.extend({

  defaults: {
    name: 'Larry',
    image: 'http://www.google.com',
    description: 'Regular old fish',
    displayInfo: false
  },
  toggleDescription:function(){
  	this.set('displayInfo',!this.get('displayInfo'))
  }

});
var instance=new Fish;
this.on('click',{
	instance.toggleDescription();
})
 // [ ] Inside of `fishModel.js`, create a `toggleDescription` function 
 // such that when a fish <tr> is clicked, 
 // the fish description will toggle on or off. DO NOT MODIFY any other files. 