'use strict';

/**
 * @ngdoc overview
 * @name accountsApp
 * @description
 * # accountsApp
 *
 * Main module of the application.
 */
angular
  .module('accountsApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
