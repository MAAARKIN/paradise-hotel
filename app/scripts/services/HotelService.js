'use strict';

/**
* @ngdoc service
* @name blogApp.myService
* @description
* # myService
* Service in the blogApp.
*/
var service = angular.module('paradiseHotelApp');

service.factory('HotelService', ['$resource', 'myConfig', function($resource, myConfig) {
  return $resource(myConfig.url + '/usuario/:id', {}, {
    query: {method:'GET', isArray:false}
  });
}]);