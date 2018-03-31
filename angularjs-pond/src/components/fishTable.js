angular.module('fish-pond')
.component('fishTable', {
  bindings: {
    fishes: '<'
  },
  
  template: `
    <div>
      <fish-table-row></fish-table-row>
      <fish-table-row></fish-table-row>
      <fish-table-row></fish-table-row>
    </div>
    `
});

// i dont understand what mean render dynamiclly the code work so what we must do
