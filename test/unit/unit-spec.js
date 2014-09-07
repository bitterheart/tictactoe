"use strict";
describe('tic tac toe',function(){
    beforeEach(module('app'));
    describe('controller',function(){
	var scope;
	beforeEach(inject(function(_$rootScope_,_$controller_){
	    scope=$rootScope.$new();
	    $controller('controller',{
		$scope:scope
	    });
	}));
	it('initially',function(){
	    expect(scope.grid.length).toEqual(3);
	});
    });
});
