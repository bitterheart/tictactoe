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
                console.log('*******HERE*****');
                expect(response).toEqual(data[3]);
            });
            $rootScope.$apply();
        }
    ]));
});
