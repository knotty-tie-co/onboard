 angular.module('ProfileCtrl', []).controller('ProfileController', function($scope, $http, $state, $window, ProfileService, PatternService, ColorService) {

	if ($state.$current.name != 'create-profile') {
	ProfileService.checkCompletion();
	}

	ProfileService.checkForAccount();

	var self = this;
	self.details = ProfileService.details;
	self.descriptors = ProfileService.details.descriptors;
	self.values = ProfileService.details.values;
	if (ProfileService.details.customer.weddingDate) {
	self.weddingDate = moment(ProfileService.details.customer.weddingDate).format('MMMM D, YYYY');}
	self.email = ProfileService.details.customer.email;
	self.patterns = PatternService.allPatterns;
	self.customRequest = ProfileService.details.customRequest;
	self.colors = ProfileService.details.colors;
	self.colorOptions = ColorService.allColors;
	self.lastSelectedSwatch = null ;
	self.selectedPatternCount = ProfileService.details.selectedPatternCount;
	self.selectedDescriptorsCount = ProfileService.details.selectedDescriptorsCount;
	self.selectedDescriptors = ProfileService.details.selectedDescriptors;
	self.selectedPatterns = ProfileService.details.selectedPatterns;
	self.lastStageCompleted = ProfileService.details.completed;
	self.editEmail = false;
	self.originalEmail = ProfileService.details.customer.email;
	self.localId = localStorage.profileId;
	self.logInEmail = "";
	self.logInWeddingDate = "";
	self.logInFailed = false;

	self.logOut = function (){
		localStorage.profileId = "";
		$window.location.href = '/create-profile';
	};

	self.logIn = function() {
		var date = moment(self.logInWeddingDate).format();
		$http
		    .get('/api/design-requests?customer.email='+self.logInEmail+"&customer.weddingDate="+date)
		    .then(function(response){
		    	console.log('/api/design-requests?customer.email='+self.logInEmail+"&customer.weddingDate="+date);
		    	console.log(response);
		    	if (response.data === "") {
		    		self.logInFailed = true;
		    	} else {
		    		self.logInFailed = false;
			    	ProfileService.id = response.data._id;
			    	ProfileService.details = response.data;
			    	localStorage.profileId = response.data._id;
			    	self.localId = response.data._id;
			    	console.log(response);
			    	if (response.data.completed == "create-profile-personal-info") {
			    		$state.transitionTo('create-profile-confirmation');
			    	} else {
			    	$('#resume')
			    	  .modal('show');
		    	}
		    }
	    });
	};

	self.saveNewEmail = function(){
		self.editEmail = false;
		var newEmail = self.email;
			ProfileService.details.customer.email = self.email;
			console.log(ProfileService.details.customer.email );
			ProfileService.zapUnsubscribeCrmContact(self.originalEmail);
			ProfileService.zapAndSave();
			self.originalEmail = self.email;
	};

	self.togglePattern = function(patternObject){
		if(patternObject.selected === false){
			patternObject.selected = true;
			self.selectedPatternCount ++;
		} else {
			patternObject.selected = false;
			self.selectedPatternCount --;
		}
		ProfileService.details.selectedPatterns = self.selectedPatterns;
		console.log(self.selectedPatterns);
		ProfileService.details.patterns = self.patterns;
		ProfileService.details.selectedPatternCount = self.selectedPatternCount;
	};

	self.saveProfile = function (){
		ProfileService.saveProfile();
	};

	self.newSignUp = function (){
			if(localStorage.profileId === ""){
			var date = moment(self.weddingDate).format();
			$http
			    .get('/api/design-requests?customer.email='+self.email+"&customer.weddingDate="+date)
			    .then(function(response){
			    	console.log(response);
			    	if (response.data === "") {
			    		ProfileService.saveProfile();
			    	} else {
				    	ProfileService.id = response.data._id;
				    	ProfileService.details = response.data;
				    	localStorage.profileId = response.data._id;
				    	self.localId = response.data._id;
				    	console.log(response);
				    	$('#profileExists')
				    	  .modal('show');
			    }
		    });
			   }
	};

	self.zapAndSave  = function (){
		ProfileService.zapAndSave();
	};

	self.toggleDescriptor = function(id){
		descriptor = self.descriptors[id];
		if(descriptor.selected === false){
			descriptor.selected = true;
			self.selectedDescriptorsCount ++;
			self.selectedDescriptors.push(descriptor.display);
		} else {
			descriptor.selected = false;
			self.selectedDescriptorsCount --;
			for (var i = 0; i < self.selectedDescriptors.length; i++) {
				if (descriptor.display == self.selectedDescriptors[i]) {
					self.selectedDescriptors.splice(i, 1);
				}
			}
		}
		self.scorePatterns(id);
		ProfileService.details.selectedDescriptors = self.selectedDescriptors;
		ProfileService.details.selectedDescriptorsCount = self.selectedDescriptorsCount;
	};

	self.descriptorIsSelected = function(id){
		descriptor = self.descriptors[id];
		return descriptor.selected;
	};

	self.descriptorsHaveSelections = function(){
		for (var i in self.descriptors){
			if (self.descriptors[i].selected === true){
				return true;
			} 
		}
		return false;
		
	};

	self.updatePlayfulness = function(selection){
		ProfileService.details.values.playfulness = parseInt(selection);
		self.values = ProfileService.details.values;
		self.scorePatterns ();
	};

	self.updateComplexity = function(selection){
		ProfileService.details.values.complexity = parseInt(selection);
		self.values = ProfileService.details.values;
		self.scorePatterns ();
	};


	self.updateWeddingDate = function(selection){
		ProfileService.details.customer.weddingDate = selection;
	};

	self.updateEmail = function(selection){
		ProfileService.details.customer.email = selection;
	};


	self.scorePatterns = function(selectedTag) {
		if(selectedTag){
			}
		for (var i = 0; i < self.patterns.length; i++) {
			pattern = self.patterns[i];
			pattern.relevanceScore = 0;
			if (pattern.playfulness === self.values.playfulness) {
				pattern.relevanceScore ++;
			}
			if (pattern.complexity === self.values.complexity) {
				pattern.relevanceScore ++;
			}
				for (var j = 0; j < pattern.tags.length; j++) {
					patternTag = pattern.tags[j];
					if(self.descriptors[patternTag]){
						if (self.descriptors[patternTag].selected){
					  		pattern.relevanceScore ++;
						}
					}
				}

		}
	};

	self.updateCustomRequest = function(){
		ProfileService.details.customRequest = self.customRequest;
		console.log(self.customRequest);
		console.log(ProfileService.details.customRequest);
	};

	self.selectSwatch = function(swatchID){
		self.lastSelectedSwatch = swatchID;
	};

	self.selectColor = function(hex, colorName){
		for (var i = 0; i < self.colors.length; i++) {
			if (self.colors[i].colorSwatchID == self.lastSelectedSwatch){
				self.colors[i].colorName = colorName;
				self.colors[i].hex = hex;
				ProfileService.details.colors = self.colors;
				break;
			}
		}
	};

	self.clearColorSelection = function(swatchID){
		for (var i = 0; i < self.colors.length; i++) {
			if (self.colors[i].colorSwatchID == swatchID){
				self.colors[i].colorName = "Not Selected";
				self.colors[i].hex = "eeeeee";
			}
		}
		ProfileService.details.colors = self.colors;
	};

	self.markStageCompleted = function(){
		ProfileService.markCompleted();
		console.log(ProfileService.details);
	};

	$(document).ready(function(){
	$('#request-pattern')
	  .modal('attach events', '.request-design', 'show');
	 $('#request-pattern')
	   .modal('attach events', '#save-design', 'hide');
	   $('#logInForm')
	     .modal('attach events', '#logInButton', 'show');
	     $('.ui.modal').modal({closable: false});
	});

});