var myApp = angular.module('myApp', [])

myApp.directive('modalDialog', function() {
    return {
        restrict: 'E',
        scope: {
            show: "="
        },
        transclude: true,
        replace: true,
        link: function(scope, element, attrs){
            console.log("modal dialog called");
        },
        template: "test"
    }
});