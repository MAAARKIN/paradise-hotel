'use strict';

/**
* @ngdoc service
* @name paradiseHotelApp.myService
* @description
* # myService
* Service in the blogApp.
*/
var service = angular.module('paradiseHotelApp');

service.factory('UserService', ['$resource', 'myConfig', function($resource, API) {
  return $resource(API + '/users/:id', {}, {
    query: { method:'GET', isArray:false }
  });
}]);
