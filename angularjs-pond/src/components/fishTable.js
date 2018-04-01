angular.module('fish-pond')
.component('fishTable', {
  bindings: {
    fishes: '<'
  },
  template: `
    <div>
      <fish-table-row ng-repeat="fish in $ctrl.fishes" fish="fish" ></fish-table-row>
      
    </div>`
});
// i understood that we should update them to be dynamic like flixible when we'll enlarge our fishData :3