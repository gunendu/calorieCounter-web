'use strict';

var myApp = angular.module('myApp.services', ['ngRoute'])
var config =  {
                    headers : {
                        'Content-Type': 'application/x-www-form-urlencoded;application/json;charset=utf-8'
                    }
        }

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

    var fetchIngrediants = function(query) {
          var deferred = $q.defer()
          
          $http.get('http://localhost:9000/nutrition/'+query)
             .then(function(response){
                  console.log("response is",response);
                  deferred.resolve(response.data);
             }),
             function(error){
                 console.log("error is",error);
                 deferred.reject(error);
             }
             return deferred.promise;   
    };

    var saveIngrediants = function(data){
        var deferred = $q.defer()
        $http.post('http://localhost:9000/preperations/saveingredients',data,config)
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
        save: save,
        fetchIngrediants: fetchIngrediants,
        saveIngrediants: saveIngrediants
    };
                
}])