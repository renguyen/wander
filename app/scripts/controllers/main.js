'use strict';

/**
 * @ngdoc function
 * @name wanderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wanderApp
 */
angular.module('wanderApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.setDestination = function() {
      console.log($scope.city);
    };
  }]);
