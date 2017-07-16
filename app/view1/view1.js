'use strict';

angular.module('myApp.view1', ['ngRoute'])

.controller('View1Ctrl', ['$scope', '$http',  function($scope,$http){
    console.log("this is called");
    $http.get('http://localhost:9000/category')
        .then(
                function(response){
                          console.log(response.data);
                          $scope.foodcategory = response.data;
                }),
                function(err){
                        console.log(err);
                }
      $http.get('http://localhost:9000/category/foods')
          .then(
                function(response){
                        $scope.foods = response.data;
                        console.log("nutrition",$scope.foods);

                }),
                function(err){
                    console.log(err);
                }

}]);