'use strict';

/**
* @ngdoc service
* @name paradiseHotelApp.myService
* @description
* # myService
* Service in the blogApp.
*/
var service = angular.module('paradiseHotelApp');

service.factory('ContactService', function($resource, API) {
  return $resource(API + '/contacts/:id', {}, {
    query: { method:'GET', isArray:false }
  });
});
