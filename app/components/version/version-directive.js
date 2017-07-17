'use strict';

angular.module('myApp.version.version-directive', [])

.directive('modalDialog', function() {
  return {
        restrict: 'E',
        scope: {
            show: "="
        },
        replace: true,
        transclude: true,
        link: function(scope, element, attrs){
            console.log("modal dialog called");
            scope.hideModal = function(){
                scope.modalFlag = false;
            }
        },
        templateUrl: "view1/modal.html"
    }
});
