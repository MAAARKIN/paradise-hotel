'use strict';

/**
* @ngdoc function
* @name paradiseHotelApp.controller:AboutCtrl
* @description
* # AboutCtrl
* Controller of the paradiseHotelApp
*/
var app = angular.module('paradiseHotelApp');

app.controller('LoginCtrl', function ($scope, Principal, AuthService) {
  $scope.isLoggerIn = function () {
    return Principal.isAuthenticated();
  }

  $scope.login = function(credential) {
    console.log("loginCtrl clicked");
  }

  $scope.currentUser = Principal.getCurrentUser();
});
