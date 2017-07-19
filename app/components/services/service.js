'use strict';

var myApp = angular.module('myApp.services', ['ngRoute'])
var config =  {
                    headers : {
                        'Content-Type': 'application/x-www-form-urlencoded;application/json;charset=utf-8'
                    }
        }

myApp.factory('foodService', ['$http','$q',function($http, $q) {
    console.log("this is called");    
    return $http.get('http://localhost:9000/category')
        .then(
                function(response){
                        return response.data;
                }),
                function(err){
                        return $q.reject(err)
                }                                                            
}])

myApp.factory('savePreperation',['$http','$q',function($http,$q){
  
    var  save =  function(data){
          var deferred = $q.defer();

          $http.post('http://localhost:9000/preperations/save',data,config)
            .then(
                    function(response){
                    console.log("response",response);
                    deferred.resolve(response.data);
            }),
            function(error){
                    console.log("error",error);
                    deferred.reject(error);
            }
            return deferred.promise;
    };
        
    return {
        save: save
    };
                
}])