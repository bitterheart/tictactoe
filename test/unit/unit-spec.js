"use strict";
describe('grid directive',function(){
    var element;
    beforeEach(module('app'));
    beforeEach(inject(function($compile,$rootScope){
	var element=angular.element('<div class="grid"></div>');
	$compile(element)($rootScope);
	$rootScope.digest();
    }));
    it('correct content',function(){
	expect(element.html()).toEqual('<div class="row">');
    });
});
