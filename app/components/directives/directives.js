'use strict';

var myApp = angular.module('myApp.directives', [])

myApp.directive('modalDialog',['$http', function($http) {
  return {
        restrict: 'E',
        scope: {
            show: "=",
            form: "=",
            categories: "="
        },
        link: function(scope, element, attrs){
            console.log("this is not called");                                               
            scope.hideModal = function(){
                scope.show = false;
            }

           scope.cancel = function() {
                scope.show = false;
            }

           scope.submit = function() {
                scope.form.CategoryId = scope.category.CategoryId;
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
                scope.show = false;
            }
        },
        templateUrl: "view1/modal.html"     
    }
}]);

myApp.directive('preperationModal',['$http','savePreperation',function($http,savePreperation){
    return {
        restrict : 'E',
        scope: {
            prep: "="
        },
        link: function(scope,element,attrs) {
            console.log("prep modal");
             scope.hideModal = function(){
                scope.prep= false;
            }

           scope.cancel = function() {
                scope.prep = false;
            }

            scope.submit = function() {
                var data = {"Name": scope.form.Name};
                savePreparation.save(data).then(function(response){
                       console.log("response prep",response); 
                })
                scope.preperationFlag = false;
            }
            
            scope.fetchItems = function(){
                console.log("data is",scope.form.Item);
                scope.arrSearchResults = ["test1","test2","test3"];
            }
        },
        templateUrl:  "view1/preperationModal.html"
    } 
}]);
