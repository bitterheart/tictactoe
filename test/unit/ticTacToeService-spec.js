describe('ticTacToeService', function() {
    var ticTacToeService;
    beforeEach(module('app', ['$provide',
        function(_$provide_) {
            $provide = _$provide_;
        }
    ]));
    beforeEach(inject(['$q', 'ticTacToeService',
        function($q, _ticTacToeService_) {
            $provide.provider('randomService', function() {
                this.$get=angular.noop;
                this.random = function() {
                    var deferred = $q.defer();
                    deferred.resolve(0.5);
                    return deferred.promise;
                }
            });
            ticTacToeService = _ticTacToeService_;
        }
    ]));
    it('b', function() {
        var data = [{
            value: '-'
        }, {
            value: '-'
        }, {
            value: '1'
        }];
        ticTacToeService.pick(data).then(function(result) {
            expect(10).toEqual(20);
        });
    })
});
