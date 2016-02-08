'use strict';

/**
* @ngdoc service
* @name paradiseHotelApp.myService
* @description
* # myService
* Service in the paradiseHotelApp.
*/
var service = angular.module('paradiseHotelApp');

service.factory('Principal', function(API, jwtHelper, localStorageService) {
  var _identity, _authenticated = false;
  return {
    authenticated: function() {

    },

    hasAuthority: function(authority) {

    }
  };
});
