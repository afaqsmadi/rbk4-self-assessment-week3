angular.module('fish-pond')
.component('fishTable', {
  bindings: {
    fishes: '<'
  },
  template: `
    <div>

      <fish-table-row fish='fish' ng-repeat='fish in $ctrl.fishes'></fish-table-row>
     
    </div>`
});

//i have to use ng-repeate in fishTable component ,which will work like 
//the loop to show the name, image ,and description of the fish 
// 