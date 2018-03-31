angular.module('fish-pond')
.component('fishTable', {
  bindings: {
    fishes: '<'
  },
  templateUrl: `Templates/fishTable.html`
});