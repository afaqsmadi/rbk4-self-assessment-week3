angular.module('fish-pond')
.component('fishTable', {
  bindings: {
    fishes: '<'
  },
  template: `
    <div>
      <fish-table-row ng-repeat="fish in fishes" toggleDescription()
       fish="fish">{{fishData}}</fish-table-row>
    </div>`
});