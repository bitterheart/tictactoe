"use strict";
(function(app) {
	app.factory('ticTacToeService', ['$q', 'randomService',
		function($q, randomService) {
			var free = function(data) {
				var free = data.filter(function(datum) {
					return '-' === datum.value;
				});
				return free;
			};
			return {
				decide: function(data, length) {
					var deferred = $q.defer();
					var checks = []
					checks.push([]);
					for (var i = 0; i < length; i++) {
						checks[0].push(data[i * length + i]);
					}
					checks.push([]);
					for (var i = 0; i < length; i++) {
						checks[1].push(data[i * length + (length - i - 1)]);
					}
					for (var i = 0; i < length; i++) {
						checks.push([]);
						for (var j = 0; j < length; j++) {
							checks[i + 2].push(data[i * length + j]);
						}
					}
					for (var i = 0; i < length; i++) {
						checks.push([]);
						for (var j = 0; j < length; j++) {
							checks[i + 2 + length].push(data[j * length + i]);
						}
					}
					deferred.resolve({
						winners: checks.filter(function(check) {
							return check.filter(function(c) {
								return (c.value == check[0].value) && (c.value != '-');
							}).length === length;
						}),
						free: free(data).length
					});
					return deferred.promise;
				},
				pick: function(data) {
					                console.log('A410');
					var deferred = $q.defer();
					                console.log('A420');
					var f = free(data);
					                console.log('A430');
					if (0 < f.length) {
					                console.log('A431');
					                console.log(randomService);
					                for(var key in randomService){
					                	console.log('key '+key);
					                }
					                console.log(randomService.random);
					                console.log(randomService.findme);
					                console.log('just before...');
						randomService.random().then(function(rand){
							console.log(f);
							console.log('in the middle ...' +rand);
												                console.log('A436');

							deferred.resolve(f[Math.floor(rand * f.length)]);
						});
						console.log('just after ...');
					}
					else {
					                console.log('A432');
						deferred.reject('illegal move');
					}
					return deferred.promise;
				}
			};
		}
	]);
})(angular.module('app'));
