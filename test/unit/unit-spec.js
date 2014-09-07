"use strict";
describe('tic tac toe',function(){
    describe('controller',function(){
	beforeEach(module('app'));
	it('initially',inject(function($controller,$rootScope){
	    expect($rootScope.grid.length).toEqual(3);
	}));
    });
});
