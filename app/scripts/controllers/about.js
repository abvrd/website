'use strict';

/**
 * @ngdoc function
 * @name siteProApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the siteProApp
 */
angular.module('siteProApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
