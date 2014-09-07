"use strict";
describe('tic tac toe',function(){
    describe('controller',function(){
	beforeEach(module('app'));
	it('initially it should have a grid with three rows',inject(function($rootScope,$controller){
	    $controller('controller',{$scope:$rootScope});
	    expect($rootScope.grid.length).toEqual(3);
	}));
	it('and there should be three columns',inject(function($rootScope,$controller){
	    $controller('controller',{$scope:$rootScope});
	    expect($rootScope.grid[0].length).toEqual(3);
	    expect($rootScope.grid[1].length).toEqual(3);
	    expect($rootScope.grid[2].length).toEqual(3);
	}));
    });
});
