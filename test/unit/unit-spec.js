"use strict";
describe('grid directive',function(){
    var element;
    var scope;
    beforeEach(module('app'));
    beforeEach(inject(function($compile,$rootScope){
	var element=angular.element('<div class="grid"></div>');
	scope=$rootScope;
	scope.defined=false;
	$compile(element)(scope);
	scope.digest();
    }));
    it('correct content',function(){
	expect(element.scope().html()).toEqual('<div class="row">');
    });
});
