(function(app) {
	'use strict';
	app.factory('ticTacToeService', ['$q', 'randomService',
		function($q, randomService) {
			var free = function(data) {
				var free = data.filter(function(datum) {
					return datum.value === '-';
				});
				return free;
			};
			return {
				decide: function(data, length) {
					var deferred = $q.defer();
					var checks = [];
					checks.push([]);
					(function(){
						for (var i = 0; i < length; i++) {
							checks[0].push(data[i * length + i]);
						}
					}());
					checks.push([]);
					(function(){
						for (var i = 0; i < length; i++) {
							checks[1].push(data[i * length + (length - i - 1)]);
						}
					}());
					(function(){
						for (var i = 0; i < length; i++) {
							checks.push([]);
							for (var j = 0; j < length; j++) {
								checks[i + 2].push(data[i * length + j]);
							}
						}
					}());
					(function(){
						for (var i = 0; i < length; i++) {
							checks.push([]);
							for (var j = 0; j < length; j++) {
								checks[i + 2 + length].push(data[j * length + i]);
							}
						}
					}());
					deferred.resolve({
						winners: checks.filter(function(check) {
							return check.filter(function(c) {
								return (c.value === check[0].value) && (c.value !== '-');
							}).length === length;
						}),
						free: free(data).length
					});
					return deferred.promise;
				},
				pick: function(data) {
					var deferred = $q.defer();
					var f = free(data);
					if (f.length > 0) {
						randomService.random().then(function(rand) {
							deferred.resolve(f[Math.floor(rand * f.length)]);
						});
					}else {
						deferred.reject('illegal move');
					}
					return deferred.promise;
				}
			};
		}
	]);
}(angular.module('app')));
