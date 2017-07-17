'use strict';

var myApp = angular.module('myApp.view1', ['ngRoute'])

myApp.controller('View1Ctrl', ['$scope', '$http',  function($scope,$http){
    console.log("this is called");    
    $scope.init = function() {
        
        $http.get('http://localhost:9000/category')
                .then(
                        function(response){                              
                                $scope.foodcategory = angular.copy(response.data);
                        }),
                        function(err){
                                console.log("error is",err);    
                                return $q.reject(err)
                        }
        $http.get('http://localhost:9000/category/foods')
                .then(
                function(response){
                        $scope.foods = response.data;
                        $scope.tempList = response.data;
                }),
                function(err){
                        console.log(err);
                }
    }
    
   $scope.selectedId   = function(categoryId){
        if(categoryId){
                $scope.tempList = _.filter($scope.foods,function(food){
                        return  food.CategoryId == categoryId;   
                })
        }
   }
   $scope.init();

}]);
