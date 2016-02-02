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
    // console.log($state.current);
    // console.log($state.current.paramNew); //get a new field declared in state.
    $scope.today = new Date();
    $scope.dt = moment().format('L');

  });
