var PondView = Backbone.View.extend({
  tagName: 'table',
  
  render: function() {
    this.$el.html('');
    this.collection.each(function(fishModel) {
      this.$el.append(new FishView({model: fishModel}).$el);
    }, this);

    return this;
  },
  
  initialize: function() {
    this.render();
  }
  ,
  //here we make the method that when we click it will
  //go to the middle and change the displayInfo to the opposite
  toggleDescription:function(){
    this.FishView.model.defaults.displayInfo = !this.defaults.displayInfo
  }
  
});
