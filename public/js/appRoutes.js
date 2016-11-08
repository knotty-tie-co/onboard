angular.module('appRoutes', ['ui.router']).config( 
    function($stateProvider, $urlRouterProvider, $locationProvider) {
      $urlRouterProvider.otherwise('/');
      $stateProvider
        .state('create-profile', {
          url: '/create-profile',
          templateUrl: './views/create-profile.html',
          controller: 'ProfileController'
        });
        $locationProvider.html5Mode(true);
     });