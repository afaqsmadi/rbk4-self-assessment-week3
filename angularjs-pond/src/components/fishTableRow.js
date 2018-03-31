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
      <span class="fish-name" ng-repeat="name in fish">{{name}}</span>
      <span ng-repeat="image in fish">
        <img ng-src={{image}} />
      </span>  
      <span class="fish-description ng-repeat="description in fish"" ng-if="$ctrl.showDescription">{{description}}</span>
    </div>`
});

