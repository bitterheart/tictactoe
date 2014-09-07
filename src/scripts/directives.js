"use strict";
(function(app){
    app.directive('grid',[function(){
	return{
	    restrict:'C',
	    controller: function($scope){
		$scope.grid=[[0,0,0],[0,0,0],[0,0,0]];
	    },
	    link: function($scope,element,attrs){
		$scope.grid.forEach(function(row,r){
		    var R=angular.element(document.createElement('div'));
		    row.forEach(function(col,c){
			var C=angular.element(document.createElement('div')).append('r='+r+',c='+c+'-'+$scope.grid[r][c]);
			C.on('click',function(event){
			    (function(i,j){
				if(0==$scope.grid[i][j]){
				    alert('hi '+i+' '+j);
				    $scope.grid[i][j]=1;
				}else if(1==$scope.grid[i][j]){
				    alert('bye '+i+' '+j);
				}
			    })(r,c);
			});
			R.append(C);
		    });
		    element.append(R);
		});
	    }
	};
    }]);
})(angular.module('app'));
