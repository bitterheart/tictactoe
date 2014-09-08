"use strict";
(function(app){
    app.controller('controller',['$scope','ticTacToeService',function($scope,ticTacToeService){
	var length=3;
	var data=[];
	$scope.restart=function(){
	    data=[];
	    for(var i=0;i<length*length;i++){
		data.push({value:'-',status:'player'});
	    }
	    $scope.grid=[];
	    for(var i=0;i<length;i++){
		var row=[];
		for(var j=0;j<length;j++){
		    row.push(data[i*length+j]);
		}
		$scope.grid.push(row);
	    }
	    $scope.gameOver=false;
	    $scope.winner='0';
	};
	$scope.restart();
	$scope.pickMe=function(cell){
	    cell.value='X';
	    var updateStatus=function(response){
		$scope.winner='-';
		console.log('xxxxxxxxxxxxxxxxxxx '+response);
		response.winners.forEach(function(winner){
		    winner.forEach(function(w){
			w.status='winner';
			$scope.winner=w.value;
		    });
		    $scope.gameOver=true;
		});
		if(response.free===0){
		    $scope.gameOver=true;
		    $scope.winner='T';
		}
	    }
	    ticTacToeService.decide(data,length).then(function(response){
		updateStatus(response);
		if(!$scope.gameOver)
		{
		    ticTacToeService.pick(data).then(function(next){
			next.value='O';
			ticTacToeService.decide(data,length).then(function(response){
			    updateStatus(response);
			});
		    });
		}
	    });
	};
    }]);
})(angular.module('app'));
