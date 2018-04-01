angular.module('fish-pond')
.component('fishTable', {
  bindings: {
    fishes: '<'
  },
  template: `
    <div>
       <fish-table ng-repeat="fish in $ctrl.fishes" fish="fish">{{}}</fish-table>
    </div>`
});