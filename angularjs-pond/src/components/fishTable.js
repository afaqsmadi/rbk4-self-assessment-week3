angular.module('fish-pond')
.component('fishTable', {
  bindings: {
    fishes: '<'

  },
  template: `
    <div>
      <fish-table-row>fishTable.fishes.bindings</fish-table-row>
      <fish-table-row></fish-table-row>
      <fish-table-row></fish-table-row>
    </div>`
});