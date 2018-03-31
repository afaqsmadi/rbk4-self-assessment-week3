angular.module('fish-pond')
.controller('FishTableCtrl', function() {
  this.showDescription = false;
  this.toggleDescription = () => {
    this.showDescription = !this.showDescription;
  };
})
.component('fishTableRow', {
  bindings: {
    fish: '='
  },
  controller: 'FishTableCtrl',
  template:

  //this div is hard coded  on the html page i need to change it to be not hard coded 
  //by passing elements from the main.js page (name, url, discription)
  // i need to loop through the fish data first 
  // something like {{$ctrl.fish.name}}
    `
    <div ng-click="$ctrl.toggleDescription()">
      <span class="fish-name">Nemo</span>
      <span>
        <img src="http://tinyurl.com/h8o5szh" />
      </span>
      <span class="fish-description" ng-if="$ctrl.showDescription">Does anyone know where my dad is?</span>
    </div>`
});
