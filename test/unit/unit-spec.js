"use strict";
describe('tic tac toe', function() {
	describe('controller', function() {
		beforeEach(module('app'));
		it('initially it should have a grid with three rows', inject(function($rootScope, $controller) {
			$controller('controller', {
				$scope: $rootScope
			});
			expect($rootScope.grid.length).toEqual(3);
		}));
		it('and there should be three columns', inject(function($rootScope, $controller) {
			$controller('controller', {
				$scope: $rootScope
			});
			expect($rootScope.grid[0].length).toEqual(3);
			expect($rootScope.grid[1].length).toEqual(3);
			expect($rootScope.grid[2].length).toEqual(3);
		}));
		it('initially everything should be value -', inject(function($rootScope, $controller) {
			$controller('controller', {
				$scope: $rootScope
			});
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
		it('initially everything should be status player', inject(function($rootScope, $controller) {
			$controller('controller', {
				$scope: $rootScope
			});
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
		it('initially the winner should be 0', inject(function($rootScope, $controller) {
			$controller('controller', {
				$scope: $rootScope
			});
			expect($rootScope.winner).toEqual('0');
		}));
		it('initially gameover should be false', inject(function($rootScope, $controller) {
			$controller('controller', {
				$scope: $rootScope
			});
			expect($rootScope.gameOver).toEqual(false);
		}));
		it('initially the winner should be 0', inject(function($rootScope, $controller) {
			$controller('controller', {
				$scope: $rootScope
			});
			expect($rootScope.winner).toEqual('0');
		}));
		it('i make a move (center square) it should be xed', inject(function($rootScope, $controller, $q) {
			var ticTacToeService = {};
			$controller('controller', {
				$scope: $rootScope,
				ticTacToeService: ticTacToeService
			});
			var decideDeferred = $q.defer();
			ticTacToeService.decide = function(data, length) {
				return decideDeferred.promise;
			};
			var pickDeferred = $q.defer();
			ticTacToeService.pick = function(data) {
				return pickDeferred.promise;
			};
			$rootScope.pickMe($rootScope.grid[1][1]);
			decideDeferred.resolve({
				winners: {},
				free: 8
			});
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
			expect($rootScope.winner).toEqual('0');
			expect($rootScope.gameOver).toEqual(false);
		}));
		it('i make a move (center square), the computer responds lower right', inject(function($rootScope, $controller, $q) {
			var ticTacToeService = {};
			$controller('controller', {
				$scope: $rootScope,
				ticTacToeService: ticTacToeService
			});
			var decideDeferred = $q.defer();
			ticTacToeService.decide = function(data, length) {
				return decideDeferred.promise;
			};
			var pickDeferred = $q.defer();
			ticTacToeService.pick = function(data) {
				return pickDeferred.promise;
			};
			$rootScope.pickMe($rootScope.grid[1][1]);
			decideDeferred.resolve({
				winners: [],
				free: 8
			});
			$rootScope.$apply();
			pickDeferred.resolve($rootScope.grid[2][2]);
			$rootScope.$apply();
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
		it('i make a move (center square), and the service (wrongly) declares - the winner', inject(function($rootScope, $controller, $q) {
			var ticTacToeService = {};
			$controller('controller', {
				$scope: $rootScope,
				ticTacToeService: ticTacToeService
			});
			var decideDeferred = $q.defer();
			ticTacToeService.decide = function(data, length) {
				return decideDeferred.promise;
			};
			var pickDeferred = $q.defer();
			ticTacToeService.pick = function(data) {
				return pickDeferred.promise;
			};
			$rootScope.pickMe($rootScope.grid[1][1]);
			decideDeferred.resolve({
				winners: [
					[$rootScope.grid[0][0]],
					[$rootScope.grid[1][1]],
					[$rootScope.grid[2][2]]
				],
				free: 8
			});
			$rootScope.$apply();
			expect($rootScope.grid[0][0].value).toEqual('-');
			expect($rootScope.grid[0][1].value).toEqual('-');
			expect($rootScope.grid[0][2].value).toEqual('-');
			expect($rootScope.grid[1][0].value).toEqual('-');
			expect($rootScope.grid[1][1].value).toEqual('X');
			expect($rootScope.grid[1][2].value).toEqual('-');
			expect($rootScope.grid[2][0].value).toEqual('-');
			expect($rootScope.grid[2][1].value).toEqual('-');
			expect($rootScope.grid[2][2].value).toEqual('-');
			expect($rootScope.grid[0][0].status).toEqual('winner');
			expect($rootScope.grid[0][1].status).toEqual('player');
			expect($rootScope.grid[0][2].status).toEqual('player');
			expect($rootScope.grid[1][0].status).toEqual('player');
			expect($rootScope.grid[1][1].status).toEqual('winner');
			expect($rootScope.grid[1][2].status).toEqual('player');
			expect($rootScope.grid[2][0].status).toEqual('player');
			expect($rootScope.grid[2][1].status).toEqual('player');
			expect($rootScope.grid[2][2].status).toEqual('winner');
			expect($rootScope.winner).toEqual('-');
			expect($rootScope.gameOver).toEqual(true);
		}));
		it('i make a move (center square), and the service (wrongly) declares me the winner', inject(function($rootScope, $controller, $q) {
			var ticTacToeService = {};
			$controller('controller', {
				$scope: $rootScope,
				ticTacToeService: ticTacToeService
			});
			var decideDeferred = $q.defer();
			ticTacToeService.decide = function(data, length) {
				return decideDeferred.promise;
			};
			var pickDeferred = $q.defer();
			ticTacToeService.pick = function(data) {
				return pickDeferred.promise;
			};
			$rootScope.pickMe($rootScope.grid[1][1]);
			decideDeferred.resolve({
				winners: [
					[$rootScope.grid[0][0]],
					[$rootScope.grid[2][2]],
					[$rootScope.grid[1][1]],
					[$rootScope.grid[1][1]]
				],
				free: 8
			});
			$rootScope.$apply();
			expect($rootScope.grid[0][0].value).toEqual('-');
			expect($rootScope.grid[0][1].value).toEqual('-');
			expect($rootScope.grid[0][2].value).toEqual('-');
			expect($rootScope.grid[1][0].value).toEqual('-');
			expect($rootScope.grid[1][1].value).toEqual('X');
			expect($rootScope.grid[1][2].value).toEqual('-');
			expect($rootScope.grid[2][0].value).toEqual('-');
			expect($rootScope.grid[2][1].value).toEqual('-');
			expect($rootScope.grid[2][2].value).toEqual('-');
			expect($rootScope.grid[0][0].status).toEqual('winner');
			expect($rootScope.grid[0][1].status).toEqual('player');
			expect($rootScope.grid[0][2].status).toEqual('player');
			expect($rootScope.grid[1][0].status).toEqual('player');
			expect($rootScope.grid[1][1].status).toEqual('winner');
			expect($rootScope.grid[1][2].status).toEqual('player');
			expect($rootScope.grid[2][0].status).toEqual('player');
			expect($rootScope.grid[2][1].status).toEqual('player');
			expect($rootScope.grid[2][2].status).toEqual('winner');
			expect($rootScope.winner).toEqual('X');
			expect($rootScope.gameOver).toEqual(true);
		}));
		it('let us fudge the data and make the computer the winner', inject(function($rootScope, $controller, $q) {
			var ticTacToeService = {};
			$controller('controller', {
				$scope: $rootScope,
				ticTacToeService: ticTacToeService
			});
			$rootScope.grid[2][2].value = 'O';
			var decideDeferred = $q.defer();
			ticTacToeService.decide = function(data, length) {
				return decideDeferred.promise;
			};
			$rootScope.pickMe($rootScope.grid[1][1]);
			decideDeferred.resolve({
				winners: [
					[$rootScope.grid[0][0]],
					[$rootScope.grid[1][1]],
					[$rootScope.grid[2][2]]
				],
				free: 8
			});
			$rootScope.$apply();
			expect($rootScope.grid[0][0].value).toEqual('-');
			expect($rootScope.grid[0][1].value).toEqual('-');
			expect($rootScope.grid[0][2].value).toEqual('-');
			expect($rootScope.grid[1][0].value).toEqual('-');
			expect($rootScope.grid[1][1].value).toEqual('X');
			expect($rootScope.grid[1][2].value).toEqual('-');
			expect($rootScope.grid[2][0].value).toEqual('-');
			expect($rootScope.grid[2][1].value).toEqual('-');
			expect($rootScope.grid[2][2].value).toEqual('O');
			expect($rootScope.grid[0][0].status).toEqual('winner');
			expect($rootScope.grid[0][1].status).toEqual('player');
			expect($rootScope.grid[0][2].status).toEqual('player');
			expect($rootScope.grid[1][0].status).toEqual('player');
			expect($rootScope.grid[1][1].status).toEqual('winner');
			expect($rootScope.grid[1][2].status).toEqual('player');
			expect($rootScope.grid[2][0].status).toEqual('player');
			expect($rootScope.grid[2][1].status).toEqual('player');
			expect($rootScope.grid[2][2].status).toEqual('winner');
			expect($rootScope.winner).toEqual('O');
			expect($rootScope.gameOver).toEqual(true);
		}));
		it('i make a move (center square), and the service (wrongly) calls a tie', inject(function($rootScope, $controller, $q) {
			var ticTacToeService = {};
			$controller('controller', {
				$scope: $rootScope,
				ticTacToeService: ticTacToeService
			});
			var decideDeferred = $q.defer();
			ticTacToeService.decide = function(data, length) {
				return decideDeferred.promise;
			};
			var pickDeferred = $q.defer();
			ticTacToeService.pick = function(data) {
				return pickDeferred.promise;
			};
			$rootScope.pickMe($rootScope.grid[1][1]);
			decideDeferred.resolve({
				winners: [],
				free: 0
			});
			$rootScope.$apply();
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
			expect($rootScope.winner).toEqual('T');
			expect($rootScope.gameOver).toEqual(true);
		}));
		it('i make a move (center square), and the service (wrongly) calls it the last winning move for me', inject(function($rootScope, $controller, $q) {
			var ticTacToeService = {};
			$controller('controller', {
				$scope: $rootScope,
				ticTacToeService: ticTacToeService
			});
			var decideDeferred = $q.defer();
			ticTacToeService.decide = function(data, length) {
				return decideDeferred.promise;
			};
			var pickDeferred = $q.defer();
			ticTacToeService.pick = function(data) {
				return pickDeferred.promise;
			};
			$rootScope.pickMe($rootScope.grid[1][1]);
			decideDeferred.resolve({
				winners: [
					[$rootScope.grid[0][0]],
					[$rootScope.grid[2][2]],
					[$rootScope.grid[1][1]]
				],
				free: 0
			});
			$rootScope.$apply();
			expect($rootScope.grid[0][0].value).toEqual('-');
			expect($rootScope.grid[0][1].value).toEqual('-');
			expect($rootScope.grid[0][2].value).toEqual('-');
			expect($rootScope.grid[1][0].value).toEqual('-');
			expect($rootScope.grid[1][1].value).toEqual('X');
			expect($rootScope.grid[1][2].value).toEqual('-');
			expect($rootScope.grid[2][0].value).toEqual('-');
			expect($rootScope.grid[2][1].value).toEqual('-');
			expect($rootScope.grid[2][2].value).toEqual('-');
			expect($rootScope.grid[0][0].status).toEqual('winner');
			expect($rootScope.grid[0][1].status).toEqual('player');
			expect($rootScope.grid[0][2].status).toEqual('player');
			expect($rootScope.grid[1][0].status).toEqual('player');
			expect($rootScope.grid[1][1].status).toEqual('winner');
			expect($rootScope.grid[1][2].status).toEqual('player');
			expect($rootScope.grid[2][0].status).toEqual('player');
			expect($rootScope.grid[2][1].status).toEqual('player');
			expect($rootScope.grid[2][2].status).toEqual('winner');
			expect($rootScope.winner).toEqual('X');
			expect($rootScope.gameOver).toEqual(true);
		}));
		it('let us mess everything up and restart it', inject(function($rootScope, $controller) {
			$controller('controller', {
				$scope: $rootScope
			});
			$rootScope.grid = 'wrong';
			$rootScope.winner = 'wrong';
			$rootScope.gameOver = 'wrong';
			$rootScope.restart();
			expect($rootScope.grid.length).toEqual(3);
			expect($rootScope.grid[0].length).toEqual(3);
			expect($rootScope.grid[1].length).toEqual(3);
			expect($rootScope.grid[2].length).toEqual(3);
			expect($rootScope.grid[0][0].value).toEqual('-');
			expect($rootScope.grid[0][1].value).toEqual('-');
			expect($rootScope.grid[0][2].value).toEqual('-');
			expect($rootScope.grid[1][0].value).toEqual('-');
			expect($rootScope.grid[1][1].value).toEqual('-');
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
			expect($rootScope.winner).toEqual('0');
			expect($rootScope.gameOver).toEqual(false);
		}));
	});
	describe('tic tac toe service', function() {
		beforeEach(module('app'));
		describe('decide', function() {
			it('downward diagonal winner', inject(function($rootScope, ticTacToeService) {
				var data = [{
					value: 'a'
				}, {
					value: '-'
				}, {
					value: '-'
				}, {
					value: '-'
				}, {
					value: 'a'
				}, {
					value: '-'
				}, {
					value: '-'
				}, {
					value: '-'
				}, {
					value: 'a'
				}];
				ticTacToeService.decide(data, 3).then(function(response) {
					expect(response.winners.length).toEqual(1);
					expect(response.winners[0].length).toEqual(3);
					expect(response.winners[0][0]).toEqual(data[0]);
					expect(response.winners[0][1]).toEqual(data[4]);
					expect(response.winners[0][2]).toEqual(data[8]);
					expect(response.free).toEqual(6);
				});
			}));
			it('upward diagonal winner', inject(function($rootScope, ticTacToeService) {
				var data = [{
					value: '-'
				}, {
					value: '-'
				}, {
					value: 'a'
				}, {
					value: '-'
				}, {
					value: 'a'
				}, {
					value: '-'
				}, {
					value: 'a'
				}, {
					value: '-'
				}, {
					value: '-'
				}];
				ticTacToeService.decide(data, 3).then(function(response) {
					expect(response.winners.length).toEqual(1);
					expect(response.winners[0].length).toEqual(3);
					expect(response.winners[0][0]).toEqual(data[2]);
					expect(response.winners[0][1]).toEqual(data[4]);
					expect(response.winners[0][2]).toEqual(data[6]);
					expect(response.free).toEqual(6);
				});
			}));
			it('row winner', inject(function($rootScope, ticTacToeService) {
				var data = [{
					value: '-'
				}, {
					value: '-'
				}, {
					value: '-'
				}, {
					value: 'a'
				}, {
					value: 'a'
				}, {
					value: 'a'
				}, {
					value: '-'
				}, {
					value: '-'
				}, {
					value: '-'
				}];
				ticTacToeService.decide(data, 3).then(function(response) {
					expect(response.winners[0]).toEqual(1);
					expect(response.winners[0].length).toEqual(3);
					expect(response.winners[0][0]).toEqual(data[4]);
					expect(response.winners[0][1]).toEqual(data[5]);
					expect(response.winners[0][2]).toEqual(data[6]);
					expect(response.free).toEqual(6);
				});
			}));
			it('column winner', inject(function($rootScope, ticTacToeService) {
				var data = [{
					value: '-'
				}, {
					value: 'a'
				}, {
					value: '-'
				}, {
					value: '-'
				}, {
					value: 'a'
				}, {
					value: '-'
				}, {
					value: '-'
				}, {
					value: 'a'
				}, {
					value: '-'
				}];
				ticTacToeService.decide(data, 3).then(function(response) {
					expect(response.winners.length).toEqual(1);
					expect(response.winners[0].length).toEqual(3);
					expect(response.winners[0][0]).toEqual(data[2]);
					expect(response.winners[0][1]).toEqual(data[5]);
					expect(response.winners[0][2]).toEqual(data[8]);
					expect(response.free).toEqual(6);
				});
			}));
			it('multiple winners', inject(function($rootScope, ticTacToeService) {
				var data = [{
					value: 'b'
				}, {
					value: 'a'
				}, {
					value: 'b'
				}, {
					value: 'b'
				}, {
					value: 'a'
				}, {
					value: 'b'
				}, {
					value: 'b'
				}, {
					value: 'a'
				}, {
					value: 'b'
				}];
				ticTacToeService.decide(data, 3).then(function(response) {
					expect(response.winners.length).toEqual(2);
					expect(response.winners[0].length).toEqual(3);
					expect(response.winners[0][0]).toEqual(data[0]);
					expect(response.winners[0][1]).toEqual(data[3]);
					expect(response.winners[0][2]).toEqual(data[6]);
					expect(response.winners[1].length).toEqual(3);
					expect(response.winners[1][0]).toEqual(data[2]);
					expect(response.winners[1][1]).toEqual(data[5]);
					expect(response.winners[1][2]).toEqual(data[8]);
					expect(response.free).toEqual(0);
				});
			}));
			it('no winners', inject(function($rootScope, ticTacToeService) {
				var data = [{
					value: 'b'
				}, {
					value: 'a'
				}, {
					value: 'b'
				}, {
					value: 'a'
				}, {
					value: '-'
				}, {
					value: 'a'
				}, {
					value: 'b'
				}, {
					value: 'a'
				}, {
					value: 'b'
				}];
				ticTacToeService.decide(data, 3).then(function(response) {
					expect(response.winners[0]).toEqual(0);
					expect(response.free).toEqual(1);
				});
			}));
			describe('pick', function() {
				it('no choice', inject(function($rootScope, ticTacToeService) {
					var data = [{
						value: 'b'
					}, {
						value: 'a'
					}, {
						value: 'b'
					}, {
						value: 'a'
					}, {
						value: '-'
					}, {
						value: 'a'
					}, {
						value: 'b'
					}, {
						value: 'a'
					}, {
						value: 'b'
					}];
					ticTacToeService.decide(data).then(function(response) {
						expect(response).toEqual(data[4]);
					});
				}));
				it('problem', inject(function($rootScope, ticTacToeService) {
					var data = [{
						value: 'b'
					}, {
						value: 'a'
					}, {
						value: 'b'
					}, {
						value: 'a'
					}, {
						value: 'a'
					}, {
						value: 'a'
					}, {
						value: 'b'
					}, {
						value: 'a'
					}, {
						value: 'b'
					}];
					ticTacToeService.decide(data).then(function(response) {
						expect(true).toEqual(false);
					}, function(response) {
						expect('illegal move').toEqual(response);
					});
				})); 
			});
		});
	});
});
