'use strict';

/**
 * @ngdoc overview
 * @name siteProApp
 * @description
 * # siteProApp
 *
 * Main module of the application.
 */
angular
  .module('siteProApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'smoothScroll',
    'timer'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
