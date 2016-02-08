'use strict';

/**
* @ngdoc overview
* @name paradiseHotelApp
* @description
* # paradiseHotelApp
*
* Main module of the application.
*/
angular.module('paradiseHotelApp', [
  'ngCookies',
  'ngMessages',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'angularMoment',
  'uiGmapgoogle-maps',
  'LocalStorageModule',
  'angular-jwt'
])
.config(function($stateProvider, $urlRouterProvider, moment, $httpProvider) {

  $httpProvider.interceptors.push('TokenInterceptor');
  $httpProvider.interceptors.push('authExpiredInterceptor');
  // For any unmatched url, redirect to /state1
  moment.locale('pt-br');
  $urlRouterProvider.otherwise('/');

  // Now set up the states
  $stateProvider
  // .state('indexState', { url: '/', templateUrl: 'views/main.html', controller: 'MainCtrl', paramNew: "Marcos Filho"})
  .state('indexState', { url: '/', templateUrl: 'views/main.html', controller: 'MainCtrl'})
  .state('roomState', { url: '/rooms', templateUrl: 'views/room.html', controller: 'RoomCtrl' })
  .state('contactState', { url: '/contact', templateUrl: 'views/contact.html', controller: 'ContactCtrl' })
  .state('aboutState', { url: '/about', templateUrl: 'views/about.html', controller: 'AboutCtrl' });
});
