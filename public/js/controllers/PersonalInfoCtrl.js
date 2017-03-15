angular.module('PersonalInfoCtrl', []).controller('PersonalInfoController', function($scope, $http, ProfileService) {

	ProfileService.checkCompletion();
	console.log(ProfileService.details.customRequest);

	var self = this;

	self.profile = ProfileService;
	self.patterns = ProfileService.details.patterns;
	self.colors = ProfileService.details.colors;
	self.products = ProfileService.details.products;
	self.customRequest = ProfileService.details.customRequest;
	self.products = ProfileService.details.products;
	self.customer = ProfileService.details.customer;
	self.zapAndSave = ProfileService.zapAndSave;
	self.editEmail = false;
	self.originalEmail = ProfileService.details.customer.email;
	self.weddingDate = moment.utc(ProfileService.details.customer.weddingDate).format('MMMM D, YYYY');

	self.saveNewEmail = function(){
			self.editEmail = false;
			var newEmail = self.email;
				ProfileService.details.customer.email = self.customer.email;
				console.log(ProfileService.details.customer.email );
				ProfileService.zapUnsubscribeCrmContact(self.originalEmail);
				ProfileService.zapAndSave();
				self.originalEmail = self.customer.email;
		};

	self.saveCustomerInfo = function (){
		console.log(self.customer);
		ProfileService.details.customer = self.customer;
		ProfileService.zapAndSave();
	};
});