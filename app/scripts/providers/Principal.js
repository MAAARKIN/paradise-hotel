'use strict';

/**
* @ngdoc service
* @name paradiseHotelApp.myService
* @description
* # myService
* Service in the blogApp.
*/
var service = angular.module('paradiseHotelApp');

service.factory('Principal', function(localStorageService, jwtHelper) {
  return {
    isAuthenticated: function() {
      if (localStorageService.get('token')) {
        return true;
      }
      return false;
    },

    getCurrentUser: function() {
      var token = localStorageService.get('token');
      var plainContent = jwtHelper.decodeToken(token);
      var currentUser = {
        "username":token.sub
      };
      return currentUser;
    }
  };
});
