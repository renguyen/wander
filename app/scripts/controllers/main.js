'use strict';

/**
 * @ngdoc function
 * @name wanderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wanderApp
 */
angular.module('wanderApp')
  .controller('MainCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.gPlace;

    $scope.setDestination = function() {
      console.log($scope.city);
      $location.path('/destination/hi');
    };
  }]);
