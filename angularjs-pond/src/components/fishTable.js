angular.module('fish-pond')
.component('fishTable', {
  bindings: {
    fishes: '<'
  },
  template: `
    <div>
      <fish-table-row ng-repeat="fishe in $ctrl.fishes" fishe= "$ctrl.fishes></fish-table-row>
       <fish-table-row fish= "$ctrl.fish"></fish-table-row>
      <fish-table-row fish= "$ctrl.fish"></fish-table-row>
   
      </div>`
});