'use strict';

/**
* @ngdoc service
* @name paradiseHotelApp.myService
* @description
* # myService
* Service in the blogApp.
*/
var service = angular.module('paradiseHotelApp');

service.factory('AuthService', function($http, localStorageService, API, $rootScope) {
  return {
    login: function(credentials) {
      console.log(API);
      return $http.post(API + '/users/login', credentials, {
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function(response) {
        // console.log("salvando token");
        // var tokenPayload = jwtHelper.decodeToken(response.data.token);
        //
        // var expiration = jwtHelper.getTokenExpirationDate(response.data.token);
        // console.log(expiration);
        //
        // var bool = jwtHelper.isTokenExpired(response.data.token);
        // console.log(bool);

        // $rootScope.currentUser = {
        //   "username": tokenPayload.sub,
        //   "roles": tokenPayload.roles
        // }
        // console.log(tokenPayload);
        localStorageService.set('token', response.data.token);
        return response;
      }, function (error) {
        console.log(error);
      }, function (notify) {
        console.log("notify");
      });
    },
    logout: function() {
      //Stateless API : No server logout
      localStorageService.clearAll();
      $rootScope.currentUser = null;
    },
    getToken: function() {
      return localStorageService.get('token');
    },
    hasValidToken: function() {
      var token = this.getToken();
      return token && token.expires && token.expires > new Date().getTime();
    }
  };
});
