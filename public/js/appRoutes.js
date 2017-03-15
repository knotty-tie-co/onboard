angular.module('appRoutes', ['ui.router']).config( 
    function($stateProvider, $urlRouterProvider, $locationProvider) {
      $urlRouterProvider.otherwise('/').rule(function($injector, $location) {

    var path = $location.path();
    var hasTrailingSlash = path[path.length-1] === '/';

    if(hasTrailingSlash) {

      //if last charcter is a slash, return the same url without the slash  
      var newPath = path.substr(0, path.length - 1); 
      return newPath; 
    } 

  });
      $stateProvider

        .state('create-profile', {
          url: '/create-profile',
          templateUrl: './views/create-profile.html',
          controller: 'ProfileController'
        })

        .state('create-profile-descriptors', {
          url: '/create-profile/descriptors',
          templateUrl: './views/create-profile-descriptors.html',
          controller: 'ProfileController'
        })

        .state('create-profile-playful-traditional', {
          url: '/create-profile/playful-traditional',
          templateUrl: './views/create-profile-playful-traditional.html',
          controller: 'ProfileController'
        })

        .state('create-profile-simple-complex', {
          url: '/create-profile/simple-complex',
          templateUrl: './views/create-profile-simple-complex.html',
          controller: 'ProfileController'
        })

        .state('create-profile-sign-up', {
          url: '/create-profile/sign-up',
          templateUrl: './views/create-profile-signup.html',
          controller: 'ProfileController'
        })

        .state('create-profile-select-patterns', {
          url: '/create-profile/select-patterns',
          templateUrl: './views/create-profile-select-patterns.html',
          controller: 'ProfileController'
        })        

        .state('create-profile-select-colors', {
          url: '/create-profile/select-colors',
          templateUrl: './views/create-profile-select-colors.html',
          controller: 'ColorController'
        })

        .state('create-profile-select-products', {
          url: '/create-profile/select-products',
          templateUrl: './views/create-profile-select-products.html',
          controller: 'ProductController'
        })

        .state('create-profile-personal-info', {
          url: '/create-profile/personal-info',
          templateUrl: './views/create-profile-personal-info.html',
          controller: 'PersonalInfoController'
        })

        .state('create-profile-confirmation', {
          url: '/create-profile/confirmation',
          templateUrl: './views/create-profile-confirmation.html',
          controller: 'ProfileController'
        })

        .state('create-profile-resume', {
          url: '/create-profile/resume',
          templateUrl: './views/create-profile-resume.html',
          controller: 'ResumeController'
        });

        $locationProvider.html5Mode(true);
     });