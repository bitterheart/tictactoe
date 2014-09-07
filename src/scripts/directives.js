(function(){
    var app=angular.module('app');
    app.directive('grid',function(){
	return{
	    restrict:'C',
	    link: function(scope,element,attrs){
		for(var i=0;i<3;i++){
		    var row=angular.element(document.createElement('div')).addClass('row');
		    for(var j=0;j<3;j++){
			var col=angular.element(document.createElement('div')).addClass('col');
			row.append(col);
		    }
		    element.append(row);
		}
	    }
	};
    });
})();
