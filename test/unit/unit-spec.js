"use strict";
describe('controller unit test',function(){
    var $controller;
    beforeEach(inject(function(_$controller_){
	$controller=_$controller_;
    }));
    it('initially',function(){
	var $scope={};
	var ctrl=$controller('controller',{$scope:$scope});
	expect($scope.grid).toEqual([[{value:'-',status:'player'},{value:'-',status:'player'},{value:'-',status:'player'}],[{value:'-',status:'player'},{value:'-',status:'player'},{value:'-',status:'player'}],[{value:'-',status:'player'},{value:'-',status:'player'},{value:'-',status:'player'}]]);
    });
});
