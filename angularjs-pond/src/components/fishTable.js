angular.module('fish-pond')
.component('fishTable', {
	controller:function(){
		this.fishData=fishData;
	}
  bindings: {
    fishes: '<'
  },
  template: `
    <div>
      <fish-table-row ng-repeat="fishes in $ctrl.fishData" fishes={{fishes}}></fish-table-row>
    </div>`
});