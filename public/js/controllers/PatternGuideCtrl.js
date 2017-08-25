angular.module('PatternGuideCtrl', []).controller('PatternGuideController', function($scope, $http, $compile, ProfileService, ColorService, PatternService) {

	var self = this;

	self.patterns = PatternService.allPatterns;

	console.log(self.patterns);

	self.name = "mark";

});

