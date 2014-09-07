"use strict";
describe('grid directive',function(){
    var $compile;
    var $rootScope;
    beforeEach(module('myApp'));
    beforeEach(inject(function(_$compile_,_$rootScope_){
	$compile = _$compile_;
	$rootScope = _$rootScope_;
    }));
    it('correct content',function(){
	var element=$compile('<div class="grid"></div>');
	$rootScope.digest();
	expect(element.html()).toEqual('<div class="row">');
    });
});
