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
            scope.hideModal = function(){
                scope.show = false;
            }

           scope.cancel = function() {
                scope.show = false;
            }

           scope.submit = function() {
                scope.form.CategoryId = scope.selectedCategory.CategoryId;
                var config = {
                    headers : {
                        'Content-Type': 'application/x-www-form-urlencoded;application/json;charset=utf-8'
                    }
                }
                var data = JSON.stringify(scope.form);
                $http.post(
                    'http://localhost:9000/nutrition/foods',data,config)
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
