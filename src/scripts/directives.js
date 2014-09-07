(function(){
    var app=angular.module('app');
    app.directive('grid',function(){
	return{
	    restrict:'C',
	    template: '<div class="row"></div><div class="row"></div><div class="row"></div>'
	};
    });
})();
