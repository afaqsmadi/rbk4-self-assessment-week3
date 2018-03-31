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
      <span class="fish-name">{{$ctrl.fish.name}}</span>
      <span>
        <!-- AymanGhaith:There was a 404 error when using src attribute so I searched on google and found that the issue because I am not using ng-src directive ,and from the angularDocs I found this:Using AngularJS markup like {{hash}} in a src attribute doesn't work right: The browser will fetch from the URL with the literal text {{hash}} until AngularJS replaces the expression inside {{hash}}. -->
        <img ng-src="{{$ctrl.fish.image}}" />
      </span>
      <span class="fish-description" ng-if="$ctrl.showDescription">{{$ctrl.fish.description}}</span>
    </div>`
});
