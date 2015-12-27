'use strict';

/**
* @ngdoc overview
* @name paradiseHotelApp
* @description
* # paradiseHotelApp
*
* Main module of the application.
*/
angular.module('paradiseHotelApp', ['ngCookies','ngMessages','ngResource','ngSanitize', 'ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise('/');

    // Now set up the states
    $stateProvider
    .state('state1', { url: '/', templateUrl: 'views/main.html', controller: 'MainCtrl' })
    .state('state2', { url: '/about', templateUrl: 'views/about.html', controller: 'AboutCtrl' });
});
