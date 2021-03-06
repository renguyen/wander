'use strict';

/**
 * @ngdoc function
 * @name wanderApp.controller:DestinationCtrl
 * @description
 * # Controller for the results page with information about the given destination.
 * Controller of the wanderApp
 */
angular.module('wanderApp')
  .controller('DestinationCtrl', ['$scope', '$routeParams', '$location', function ($scope, $routeParams, $location) {
    var city = $routeParams.city;
  }]);
