angular.module('fish-pond')
.component('fishTable', {
  bindings: {
    fishes: '<'
  },
  template: `
    <div>
      <fish-table-row>{{$ctrl.fishes}}</fish-table-row> 
      <fish-table-row></fish-table-row> 
      <fish-table-row></fish-table-row> 
    </div>`
});