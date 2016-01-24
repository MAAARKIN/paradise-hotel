'use strict';

/**
 * @ngdoc function
 * @name paradiseHotelApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the paradiseHotelApp
 */
angular.module('paradiseHotelApp')
  .controller('MainCtrl', function ($state, $scope, moment) {
    // moment.locale('pt-br');
    console.log($state.current);
    $scope.today = new Date();
    $scope.dt = moment().format('L');

  });
