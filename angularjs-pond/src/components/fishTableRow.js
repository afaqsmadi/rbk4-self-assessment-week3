angular.module('fish-pond')
.controller('FishTableCtrl', function() {
  //this.fish=fishes[0];
  this.selectFish=({fish})=>{
    this.fish=fish;
  }
  this.showDescription = false;
  this.toggleDescription = () => {
    this.showDescription = !this.showDescription;
  };
})
.component('fishTableRow', {
  bindings: {
    fishes:'<',
    fish: '<'
  },
  controller: 'FishTableCtrl',
  template: `
    <div ng-app="fish-pond" fish="$ctrl.fish" ng-repeat="fish in $ctrl.fishes" ng-click="$ctrl.toggleDescription()">
      <span class="fish-name">{{fish.name}}</span>
      <span>
        <img src="{{$ctrl.fish.image}}" />
      </span>
      <span class="fish-description" ng-if="$ctrl.showDescription">Does anyone know where my dad is?</span>
    </div>`
});
