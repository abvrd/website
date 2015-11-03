'use strict';

/**
 * @ngdoc function
 * @name siteProApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the siteProApp
 */
angular.module('siteProApp').controller('MainCtrl', function ($scope, $location, $anchorScroll, AppConfig) {
    $scope.title = AppConfig.homeTitle;
    $scope.subTitle = AppConfig.homeSubTitle;
    $scope.sections = AppConfig.sections;
    $scope.experiences = AppConfig.resume.experiences;
    $scope.resume = AppConfig.resume.file;
    $scope.services = AppConfig.services;
    $scope.skills = AppConfig.skills;
    $scope.social = AppConfig.social;
    $scope.captcha = AppConfig.captcha;

    $scope.home = {
        name: 'home',
        active: true
    };
    $scope.setActive = function (elem) {
        $scope.home.active = false;
        angular.forEach($scope.sections, function (value) {
            if (value.name === elem.name) {
                value.active = true;
                $scope.home.active = false;
            } else {
                value.active = false;
            }
        });
        if (elem.name === 'home') {
            $scope.home.active = true;
        }
    };

    $scope.isActive = function (menu) {
        return $scope.selectedElement === menu;
    };

    $scope.navMobile = function () {
        (function ($) {
            $('.button-collapse').sideNav();
        }(jQuery));
    };
    $scope.toggleNavMobile = function() {
        (function ($) {
            $('.button-collapse').sideNav('show');
        }(jQuery));
    };
    
    $scope.toggleListElement = function(elem) {
        elem.visibleDesc = !elem.visibleDesc;
        angular.forEach($scope.services, function (value) {
            angular.forEach(value.elements, function (v) {
                if(v.label !== elem.label) {
                    v.visibleDesc = false;
                }
            });
        });
    };
});
