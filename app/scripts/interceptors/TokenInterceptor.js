'use strict';

/**
* @ngdoc service
* @name paradiseHotelApp.myService
* @description
* # myService
* Interceptor in the blogApp.
*/
var service = angular.module('paradiseHotelApp');

service.factory('TokenInterceptor', function(API, localStorageService) {
  return {
    request: function(config) {
      console.log('request intercepted: ');

      config.headers = config.headers || {};
      var token = localStorageService.get('token');
      console.log(token);

      if (token) {
        console.log("token existe");
        config.headers['x-auth-token'] = token;
      }

      // if (token && token.expires && token.expires > new Date().getTime()) {
      //   config.headers['x-auth-token'] = token;
      // }

      return config;
    },

    response: function(response) {
      return response;
    }
  };
}).factory('authExpiredInterceptor', function ($rootScope, $q, $injector, localStorageService) {
  return {
    responseError: function (response) {
      // token has expired
      if (response.status === 401 && (response.data.error == 'invalid_token' || response.data.error == 'Unauthorized')) {
        localStorageService.remove('token');
      }
      return $q.reject(response);
    }
  };
});;
