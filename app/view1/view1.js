'use strict';

var myApp = angular.module('myApp.view1', ['ngRoute'])

myApp.controller('View1Ctrl', ['$scope', '$http',  function($scope,$http){
     $scope.food = { };     
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
                }),
                function(err){
                        console.log(err);
                }
    }
    
   $scope.selectedId   = function(categoryId){
        if(categoryId){
                $scope.foods = _.filter($scope.foods,function(food){
                        return  food.CategoryId == categoryId;
                })
        }
   }

   $scope.showModal = function(){
          $scope.modalFlag = true; 
          console.log("show is true",$scope.modalFlag);
   }

   $scope.update = function(food) {
           $scope.modalFlag = true;
           $scope.food = food;             
   }

   $scope.showPrepModal = function(){
           $scope.preperationFlag = true;
           console.log("prep flag",$scope.preperationFlag);
   }
  
   $scope.delete = function(food) {
           console.log("delete row");          
           $http.get("http://localhost:9000/nutrition/deleteitem/"+food.Id)
                .then(
                function(response){
                        console.log("delete response is",response);
                }),
                function(err){
                        console.log(err);
                }     
   }    
             
   $scope.init();

}]);
