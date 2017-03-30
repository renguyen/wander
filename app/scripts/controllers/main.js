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
    
    var todayDate = new Date();
    var tomorrowDate = new Date();
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);
    var month = todayDate.getMonth() + 1;
    var monthStr = month;
    if (month < 10) {
      monthStr  = '0' + month;
    }
    var today = monthStr  + '/' + todayDate.getDate() + '/' + todayDate.getFullYear();
    var tomorrow = monthStr  + '/' + tomorrowDate.getDate() + '/' + tomorrowDate.getFullYear();
    $scope.dateRangeDefault = $scope.today + ' - ' + $scope.tomorrow;

    $scope.setDestination = function() {
      console.log($scope.city);
      $location.path('/destination/hi');
    };

    $(function() {
        $('input[name="daterange"]').daterangepicker();
    });
  }]);
