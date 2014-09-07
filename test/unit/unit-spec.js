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
	it('initially everything should be value -',inject(function($rootScope,$controller){
	    $controller('controller',{$scope:$rootScope});
	    expect($rootScope.grid[0][0].value).toEqual('-');
	    expect($rootScope.grid[0][1].value).toEqual('-');
	    expect($rootScope.grid[0][2].value).toEqual('-');
	    expect($rootScope.grid[1][0].value).toEqual('-');
	    expect($rootScope.grid[1][1].value).toEqual('-');
	    expect($rootScope.grid[1][2].value).toEqual('-');
	    expect($rootScope.grid[2][0].value).toEqual('-');
	    expect($rootScope.grid[2][1].value).toEqual('-');
	    expect($rootScope.grid[2][2].value).toEqual('-');
	}));
	it('initially everything should be status player',inject(function($rootScope,$controller){
	    $controller('controller',{$scope:$rootScope});
	    expect($rootScope.grid[0][0].status).toEqual('player');
	    expect($rootScope.grid[0][1].status).toEqual('player');
	    expect($rootScope.grid[0][2].status).toEqual('player');
	    expect($rootScope.grid[1][0].status).toEqual('player');
	    expect($rootScope.grid[1][1].status).toEqual('player');
	    expect($rootScope.grid[1][2].status).toEqual('player');
	    expect($rootScope.grid[2][0].status).toEqual('player');
	    expect($rootScope.grid[2][1].status).toEqual('player');
	    expect($rootScope.grid[2][2].status).toEqual('player');
	}));
	it('i make a move (center square) it should be xed, and the computer make a move',inject(function($rootScope,$controller,ticTacToeService){
	    $controller('controller',{$scope:$rootScope});
	    $rootScope.pickMe($rootScope.grid[1][1]);
	    expect($rootScope.grid[0][0].value).toEqual('-');
	    expect($rootScope.grid[0][1].value).toEqual('-');
	    expect($rootScope.grid[0][2].value).toEqual('-');
	    expect($rootScope.grid[1][0].value).toEqual('-');
	    expect($rootScope.grid[1][1].value).toEqual('X');
	    expect($rootScope.grid[1][2].value).toEqual('-');
	    expect($rootScope.grid[2][0].value).toEqual('-');
	    expect($rootScope.grid[2][1].value).toEqual('-');
	    expect($rootScope.grid[2][2].value).toEqual('-');
	    expect($rootScope.grid[0][0].status).toEqual('player');
	    expect($rootScope.grid[0][1].status).toEqual('player');
	    expect($rootScope.grid[0][2].status).toEqual('player');
	    expect($rootScope.grid[1][0].status).toEqual('player');
	    expect($rootScope.grid[1][1].status).toEqual('player');
	    expect($rootScope.grid[1][2].status).toEqual('player');
	    expect($rootScope.grid[2][0].status).toEqual('player');
	    expect($rootScope.grid[2][1].status).toEqual('player');
	    expect($rootScope.grid[2][2].status).toEqual('player');
	}));
    });
});
