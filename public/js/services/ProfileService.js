angular.module('ProfileService', [])
	.factory('ProfileService', function Profile() {
		
	var profile = this;

	profile.descriptors = {
	  	modern: false,
	  	classic: false,
	  	vintage: false,
	  	rustic: false,
	  	minimal: false
	  };

	  return profile;
});