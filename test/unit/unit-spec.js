"use strict";
describe('grid directive',function(){
    var $compile, $rootScope;
    beforeEach(module('app'));
    beforeEach(inject(['$compile','$rootScope', function($c, $r) {
	$compile = $c;
	$rootScope = $r;
    }]
		     ));
    it('should have a 3X3 grid', function() {
	var element = $compile('<div class="grid"></div>')($rootScope);
	expect(element.html()).toEqual('<div class="row"><div class="col"></div><div class="col"></div><div class="col"></div></div><div class="row"><div class="col"></div><div class="col"></div><div class="col"></div></div><div class="row"><div class="col"></div><div class="col"></div><div class="col"></div></div>');
    })
});
