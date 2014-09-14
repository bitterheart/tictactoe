"use strict";
describe('randomService', function() {
    beforeEach(angular.mock.module('app'));
    describe('random method', function() {
        it('should be be between 0,1', inject(['randomService',
            function(randomService) {
                randomService.random().then(function(random) {
                    expect(random).not.toBeLessThan(0);
                    expect(random).not.toBeGreaterThan(1);
                });
            }
        ]));
    });
});