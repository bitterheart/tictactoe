(function(){
    var app=angular.module('app');
    app.directive('grid',function(){
	return{
	    restrict:'C',
	    templateUrl: 'grid.html'
	};
    });
})();
