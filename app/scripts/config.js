'use strict';

/**
 * @ngdoc overview
 * @name blogApp
 * @description
 * # blogApp
 *
 * Main module of the application.
 */

angular
    .module('paradiseHotelApp')
    .constant('myConfig', {
      'url': 'http://localhost:7070/backend',
      'version': 0.1
    });
