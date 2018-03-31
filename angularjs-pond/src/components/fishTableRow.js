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
      <span class="fish-name">{{$ctrl.fishes.name}}</span>
      <span>
        <img src="{{$ctrl.fishes.image}}" />
      </span>
      <span class="fish-description" ng-if="$ctrl.showDescription">{{$ctrl.fishes.description}}</span>
    </div>`
});
