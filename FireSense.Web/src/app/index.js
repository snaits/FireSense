'use strict';
angular.module('controllers', []);
angular.module('directives', []);
angular.module('providers', []);

angular.module('fireSense', ['firebase','directives','controllers','ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ngMaterial', 'n3-line-chart', 'providers'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  });
