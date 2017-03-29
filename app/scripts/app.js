'use strict';

/**
 * @ngdoc overview
 * @name wanderApp
 * @description
 * # wanderApp
 *
 * Main module of the application.
 */
var wanderApp = angular.module('wanderApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

wanderApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/destination/:city', {
        templateUrl: 'views/destination.html',
        controller: 'DestinationCtrl',
        controllerAs: 'destination'
      })
      .when('/credits', {
        templateUrl: 'views/credits.html',
        controller: 'CreditsCtrl',
        controllerAs: 'credits'
      })
      .otherwise({
        redirectTo: '/'
      });

  });

wanderApp.directive('googleplace', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, model) {
            var options = {
                types: [],
                componentRestrictions: {}
            };
            scope.gPlace = new google.maps.places.Autocomplete(element[0], options);

            google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
                scope.$apply(function() {
                    model.$setViewValue(element.val());                
                });
            });
        }
    };
});