'use strict';

/**
* @ngdoc service
* @name paradiseHotelApp.myService
* @description
* # myService
* Service in the blogApp.
*/
var service = angular.module('paradiseHotelApp');

service.factory('ContactService', ['$resource', 'myConfig', function($resource, myConfig) {
  return $resource(myConfig.url + '/contacts/:id', {}, {
    query: { method:'GET', isArray:false }
  });
}]);
