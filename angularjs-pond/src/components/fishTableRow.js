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
      <span class="fish-name">{{$ctrl.fishe.name}}</span>
      <span>
        <img ng-src={{'http://tinyurl.com/n4vgcl5'}} />
        
      </span>
      <span class="fish-description" ng-if="$ctrl.showDescription">{{$ctrl.fishe.description}}</span>
    </div>`
});
