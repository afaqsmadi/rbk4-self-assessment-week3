angular.module('fish-pond')
.controller('FishTableCtrl', function() {
  this.showDescription = false;
  this.toggleDescription = () => {
    this.showDescription = !this.showDescription;
  };
})
.component('fishTableRow', {
  bindings: {
    fish: '<'
  },
  controller: 'FishTableCtrl',
  template: `
    <div ng-click="$ctrl.toggleDescription()">
      <span class="fishData.fish.name">{{Nemo}}</span>
      <span>
        <img src="fishData.fish.image" />
      </span>
      <span class="fishData.fish.description" ng-if="$ctrl.showDescription">Does anyone know where my dad is?</span>
    </div>`
});
