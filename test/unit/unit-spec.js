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
	it('initially the winner should be 0',inject(function($rootScope,$controller){
	    $controller('controller',{$scope:$rootScope});
	    expect($rootScope.winner).toEqual(0);
	}));
	it('initially gameover should be false',inject(function($rootScope,$controller){
	    $controller('controller',{$scope:$rootScope});
	    expect($rootScope.gameOver).toEqual(false);
	}));
	it('initially the winner should be 0',
	it('i make a move (center square) it should be xed, and the computer make a move',inject(function($rootScope,$controller,$q){
	    var ticTacToeService={};
	    $controller('controller',{$scope:$rootScope, ticTacToeService:ticTacToeService});
	    ticTacToeService.decide=function(data,length){
		var deferred=$q.defer();
		deferred.resolve({winners:{},free:8});
		return deferred.promise;
	    };
	    ticTacToeService.pick=function(data){
		var deferred=$q.defer();
		deferred.resolve($rootScope.grid[2][2]);
		return deferred.promise;
	    };
	    $rootScope.pickMe($rootScope.grid[1][1]);
	    expect($rootScope.grid[0][0].value).toEqual('-');
	    expect($rootScope.grid[0][1].value).toEqual('-');
	    expect($rootScope.grid[0][2].value).toEqual('-');
	    expect($rootScope.grid[1][0].value).toEqual('-');
	    expect($rootScope.grid[1][1].value).toEqual('X');
	    expect($rootScope.grid[1][2].value).toEqual('-');
	    expect($rootScope.grid[2][0].value).toEqual('-');
	    expect($rootScope.grid[2][1].value).toEqual('-');
	    expect($rootScope.grid[2][2].value).toEqual('O');
	    expect($rootScope.grid[0][0].status).toEqual('player');
	    expect($rootScope.grid[0][1].status).toEqual('player');
	    expect($rootScope.grid[0][2].status).toEqual('player');
	    expect($rootScope.grid[1][0].status).toEqual('player');
	    expect($rootScope.grid[1][1].status).toEqual('player');
	    expect($rootScope.grid[1][2].status).toEqual('player');
	    expect($rootScope.grid[2][0].status).toEqual('player');
	    expect($rootScope.grid[2][1].status).toEqual('player');
	    expect($rootScope.grid[2][2].status).toEqual('player');
	    expect($rootScope.winner).toEqual('-');
	    expect($rootScope.gameOver).toEqual(false);
	}));
    });
});
