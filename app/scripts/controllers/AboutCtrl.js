'use strict';

/**
* @ngdoc function
* @name paradiseHotelApp.controller:AboutCtrl
* @description
* # AboutCtrl
* Controller of the paradiseHotelApp
*/
angular.module('paradiseHotelApp')
.controller('AboutCtrl', function ($scope, AuthService) {
  $scope.map = {
    center: {
      latitude: -7.108183599999999,
      longitude: -34.83250429999998
    },
    zoom: 16 };
    AuthService.logout();
  });
