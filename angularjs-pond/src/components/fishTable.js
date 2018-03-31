//use ng-repeat to iterate over "fishes" to render them automatically.
angular.module('fish-pond')
.component('fishTable', {
  bindings: {
    fishes: '<'
  },
  template: `
    <div>
      <fish-table-row></fish-table-row>
    </div>`
});