angular.module('fish-pond')
.controller('FishTableCtrl', function() {
  this.showDescription = false;
  this.toggleDescription = () => {
    this.showDescription = !this.showDescription;
    this.fishes = fishData;
    this.fish = this.fishes[0]
  };
})
.component('fishTableRow', {
  bindings: {
    fish: '<'
  },
  controller: 'FishTableCtrl',
  template: `
    <div ng-click="$ctrl.toggleDescription()" ng-repeat="fish in $ctrl.fishes">
      <span class="fish-name">{{fish.name}}</span>
      <span>
        <img src={{fish.image}} />
      </span>
      <span class="fish-description" ng-if="$ctrl.showDescription">{{fish.description}}</span>
    </div>`
});
