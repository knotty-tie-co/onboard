angular.module('ResumeCtrl', []).controller('ResumeController', function($scope, $http, $state, ProfileService) {
	
	var self = this;
	self.details = ProfileService.details;
	console.log(self.details.completed);

	if (self.details.completed === "create-profile-sign-up") {
		$state.transitionTo('create-profile-select-patterns');
	} else if (self.details.completed === "create-profile-select-patterns"){
		$state.transitionTo('create-profile-select-colors');
	}else if (self.details.completed === "create-profile-select-colors"){
		$state.transitionTo('create-profile-select-products');
	}else if (self.details.completed === "create-profile-select-products"){
		$state.transitionTo('create-profile-personal-info');
	}else if (self.details.completed === "create-profile-personal-info"){
		$state.transitionTo('create-profile-confirmation');
	}
});

