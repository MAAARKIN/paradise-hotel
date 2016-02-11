'use strict';

/**
* @ngdoc service
* @name paradiseHotelApp.myService
* @description
* # myService
* Service in the blogApp.
*/
var component = angular.module('paradiseHotelApp');

component.factory('Principal', function(localStorageService, jwtHelper) {
  return {
    isAuthenticated: function() {
      if (localStorageService.get('token')) {
        return true;
      }
      return false;
    },

    getCurrentUser: function() {
      var currentUser = {};
      var token = localStorageService.get('token');
      if(token) {
        var plainContent = jwtHelper.decodeToken(token);
        currentUser = {
          "username":token.sub
        };
      }
      return currentUser;
    }
  };
});
