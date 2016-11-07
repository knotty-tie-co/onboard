angular.module('ProfileCtrl', []).controller('ProfileController', function($scope, $http, $routeParams, ProfileService) {

	console.log(ProfileService.descriptors)

	var self = this;
	  self.step = 1;
	  self.descriptors = ProfileService.descriptors;

	  self.setStep = function(step){
	  	self.step = step;
	  };

	  self.isStep = function(step){
	  	return self.step === step;
	  };

	  self.toggleDescriptor = function(which){
	  	obj = self['descriptors'];
	  	console.log(obj[which]);
	  	if(obj[which] === false){
	  		obj[which] = true;
	  	} else {
	  		obj[which] = false;
	  	}
	  	console.log(ProfileService.descriptors);
	  };

	  self.descriptorIsSelected = function(descriptor){
	  	obj = self.descriptors;
	  	return obj[descriptor];
	  };

	  self.descriptorsHaveSelections = function(){
	  	for (var i in self.descriptors){
	  		if (self.descriptors[i] === true){
	  			return true;
	  		}
	  	}
	  	return false;
	  };

	  });