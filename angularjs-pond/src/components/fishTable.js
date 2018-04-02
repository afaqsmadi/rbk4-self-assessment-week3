angular.module('fish-pond')
.component('fishTable', {
  bindings: {
    fishes: '<'
  },
  template: `
    <div>
      <fish-table-row ng-repeat="fish in $ctrl.fishes " fish="fish"></fish-table-row>

    </div>`
});// to make dynamically render the data in `fishData` make for loop "ng-repeat" then i need to pass fish to fishTabelRow