angular.module('fish-pond')
.component('fishTable', {
  bindings: {
    fishes: '<'
  },

  /*
  template: `
    <div ng->
      <fish-table-row></fish-table-row>
      <fish-table-row></fish-table-row>
      <fish-table-row></fish-table-row>
    </div>`
});

*/

 template: `
    <div ng-repeat="fish in $ctrl.fishes" >
      <fish-table-row></fish-table-row>
      <fish-table-row></fish-table-row>
      <fish-table-row></fish-table-row>
    </div>`
});