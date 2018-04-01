angular.module('fish-pond')
.component('fishTable', {
  bindings: {
    fishes: '<'
  },
  
  .render();





  template: `
    <div>
      <fish-table-row><div ng-repeat="(image,fishData.image) in fishData">{fish}</div></fish-table-row>
      <fish-table-row></fish-table-row>
      <fish-table-row></fish-table-row>
    </div>`
});

// Now i have a data for each fish in the "main.js" ,, which has array of Obj.s ,, 
//and each Obj. has a data for each fish .. 

// So ,, i actully need ti itirate throgh this array by :
//("ng-repeat" , which works like "each" in Angular)
//And then pich the data for each fich 
//Finlly i need to call in the component ,, and then render the function to make it dynamically ..   