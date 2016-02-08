'use strict';

/**
* @ngdoc function
* @name paradiseHotelApp.controller:RoomCtrl
* @description
* # RoomCtrl
* Controller of the paradiseHotelApp
*/
angular.module('paradiseHotelApp')
.controller('RoomCtrl', function (AuthService, API) {
  console.log(API);
  var credentials = {"name": "jack", "password": "12345"}
  var response = AuthService.login(credentials);
  console.log(response);
});
