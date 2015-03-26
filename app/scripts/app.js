(function(){
'use strict';

/**
 * @ngdoc overview
 * @name jobPostAppApp
 * @description
 * # jobPostAppApp
 *
 * Main module of the application.
 */

angular
  .module('JobPostManager', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

angular
  .module('JobPostManager')
  .config(JobPostManagerConfig)
  .controller('NavbarCtrl', NavbarCtrl);

function JobPostManagerConfig($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/main.html',
      controller: 'MainCtrl'
    })
    .when('/jobs', {
      templateUrl: 'templates/jobs.html',
      // controller: 'JobsCtrl'
    })
    .when('/locations', {
      templateUrl: 'templates/locations.html',
      // controller: 'LocationsCtrl'
    })
    .when('/about', {
      templateUrl: 'templates/about.html',
      // controller: 'AboutCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
  }

  NavbarCtrl.$inject = ['$location'];

  function NavbarCtrl($location){
    var vm = this;

    vm.isActive = function(viewLocation){
      return viewLocation === $location.path();
    };
  }

})();
