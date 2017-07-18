'use strict';

angular.module('myApp.version.version-directive', [])

.directive('modalDialog',['$http', function($http) {
  return {
        restrict: 'E',
        scope: {
            show: "=",
            form: "=",
            categories: "="
        },
        replace: true,
        transclude: true,
        link: function(scope, element, attrs){
            console.log("modal dialog called",scope.form,scope.categories);
            scope.hideModal = function(){
                scope.show = false;
            }

           scope.cancel = function() {
                scope.show = false;
            }

           scope.submit = function() {
                //console.log("form info ",scope.form);
                var data = {
                    "Id": 1,
                    "CategoryId": 12,
                    "Name": "test",
                    "Energy": 123,
                    "Moisture": 123,
                    "Proteins": 123,
                    "Fat": 123,
                    "Minerals": 123,
                    "Fibre": 123,
                    "Carbos": 123,
                    "Calcium": 123,
                    "Phosphorous": 123,
                    "Iron": 123
                }
                var config = {
                    headers : {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;application/json'
                    }
                }
                $http.post(
                    'http://localhost:9000/nutrition/foods',JSON.stringify(data),config)
                .success(function(response){
                    console.log("data is",response);
                })
                .error(function (error){
                     console.log("error is",error);   
                })
            }
        },
        templateUrl: "view1/modal.html"
    }
}]);
