'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.services',
  'myApp.directives'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $routeProvider
        .when('/', {
          templateUrl: 'view1/view1.html',
          controller: 'View1Ctrl' 
        })
        .otherwise({ redirectTo: '/' });
}]);
