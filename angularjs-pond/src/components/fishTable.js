angular.module('fish-pond')
.component('fishTable', {
  bindings: {
    fishes: '<'
  },
  template: `
  // we need to use ng-repeat="fish in $ctrl.fishes", to modify and make the fishes dynamically
    <div ng-repeat="fish in ctrl.fishes">
      <fish-table-row></fish-table-row>
      <fish-table-row></fish-table-row>
      <fish-table-row></fish-table-row>
    </div>`
});