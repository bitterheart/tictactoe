"use strict";
(function(app){
    app.factory('randomService',['$q',function($q){
        return{
            random:function(){
                var deferred=$q.defer();
                deferred.resolve(Math.random());
                return deferred.promise;
            }
        };
    }]);
})(angular.module('app'));