"use strict";
describe('grid directive',function(){
    var $compile, $rootScope;
    beforeEach(module('app'));
    beforeEach(inject(['$compile','$rootScope', function($c, $r) {
	$compile = $c;
	$rootScope = $r;
    }]
		     ));
    it("should display the welcome text properly", function() {
	var element = $compile('<div class="grid"></div>')($rootScope);
	expect(element.html()).toEqual('<div class="row"></div><div class="row"></div><div class="row"></div>');
    })
});
