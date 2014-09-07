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
	it('initially everything should be status -',inject(function($rootScope,$controller){
	    $controller('controller',{$scope:$rootScope});
	    expect($rootScope.grid[0][0].value).toEqual('sdafads');
	    expect($rootScope.grid[0][1].value).toEqual('-');
	    expect($rootScope.grid[0][2].value).toEqual('-');
	    expect($rootScope.grid[1][0].value).toEqual('-');
	    expect($rootScope.grid[1][1].value).toEqual('-');
	    expect($rootScope.grid[1][2].value).toEqual('-');
	    expect($rootScope.grid[2][0].value).toEqual('-');
	    expect($rootScope.grid[2][1].value).toEqual('-');
	    expect($rootScope.grid[2][2].value).toEqual('-');
	}));
    });
});
