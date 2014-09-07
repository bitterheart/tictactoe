"use strict";
describe('controller unit test',function(){
    it('initially',function(){
	var $scope={};
	var ctrl=$controller('controller',{$scope:$scope});
	expect($scope.grid).toEqual([[{value:'-',status:'player'},{value:'-',status:'player'},{value:'-',status:'player'}],[{value:'-',status:'player'},{value:'-',status:'player'},{value:'-',status:'player'}],[{value:'-',status:'player'},{value:'-',status:'player'},{value:'-',status:'player'}]]);
    });
    it('make a move',function(){
	var $scope={};
	var ctrl=$controller('controller',{$scope:$scope});
	ctrl.pickMe($scope.grid[0,0]);
    });
});
