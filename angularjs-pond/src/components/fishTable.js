angular.module('fish-pond')
.component('fishTable', {
  bindings: {
    fishes: '<'
  },

  // same here 
  template: `
    <div>
      <fish-table-row></fish-table-row>
      <fish-table-row></fish-table-row>
      <fish-table-row></fish-table-row>
    </div>`
});