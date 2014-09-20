describe('ticTacToeService', function() {
    beforeEach(module('app'));
    beforeEach(module(['$provide',
        function($provide) {
            $provide.value('randomService', {
                random: function(){
                    return {
                        then:function(fnctn){
                            fnctn(0.5);
                        }
                    };
                }
            });
        }
    ]))

    it('can rock', inject(['$rootScope','ticTacToeService',
        function($rootScope,ticTacToeService) {
            var data = [{
                value: '-'
            }, {
                value: '-'
            }, {
                value: '-'
            }, {
                value: 'x'
            }];
            console.log(ticTacToeService);
            ticTacToeService.pick(data).then(function(response) {
                expect(response).toEqual(data[1]);
            });
            $rootScope.$apply();
        }
    ]));
    it('will have illegal moves',inject(['$rootScope','ticTacToeService',function($rootScope,ticTacToeService){
        var data=[{value:'x'},{value:'x'}];
        ticTacToeService.pick(data).then(function(response){
        },function(response){
            expect(response).toEqual('illegal move');
        });
    }]));
});
