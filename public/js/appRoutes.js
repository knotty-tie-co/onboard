angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	

	$routeProvider

		.when('/deal/:id', {
			templateUrl: 'views/deal.html',
			controller: 'DealController'
		})

		.when('/proof/:id', {
			templateUrl: 'views/proof.html',
			controller: 'ProofController'
		})

		.when('/find-deal', {
			templateUrl: 'views/find-deal.html',
			controller: 'MainController'
		})

		.when('/create-profile', {
			templateUrl: 'views/create-profile.html',
			controller: 'ProfileController'
		});		

		

	$locationProvider.html5Mode(true);

}]);