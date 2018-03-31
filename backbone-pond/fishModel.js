// Please modify this file!

var Fish = Backbone.Model.extend({
	toggleDescription:function(){
		
		 if(this.attributes.displayInfo=== false){
		 	
		 	this.attributes.displayInfo=true;
		 }else{
		 	this.attributes.displayInfo=false;
		 }

	},

	
  defaults: {
    name: 'Larry',
    image: 'http://www.google.com',
    description: 'Regular old fish',
    displayInfo: false
  }

});
