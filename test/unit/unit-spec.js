"use strict";
describe('tic tac toe',function(){
    describe('controller',function(){
	beforeEach(module('app'));
	it('initially',inject(function($rootScope,$controller){
	    expect($rootScope.grid.length).toEqual(3);
	}));
    });
});
