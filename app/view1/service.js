'use strict';

angular.module('myApp.service', ['ngRoute'])

.factory('foodService', ['$http','$q',function($http, $q) {
    console.log("this is called");
    return {
        getAllCategories: function() {
                return $http.get('http://localhost:9000/category')
                    .then(
                            function(response){
                                   return response.data 
                            }),
                            function(err){
                                    return $q.reject(err)
                            }
        }
    }
}])