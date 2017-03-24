angular.module('ProfileService', [])
.factory('ProfileService', function Profile($state, $http, $stateParams, $location) {

	var profile = this;

	profile.id = null;

	profile.colorCount = 0;


	profile.details = {};

	profile.details.descriptors = {
		"artDeco": {
			"display": "Art Deco",
			"selected": false
		},
		"backyard": {
			"display": "Backyard",
			"selected": false
		},
		"beach": {
			"display": "Beach",
			"selected": false
		},
		"boho": {
			"display": "Boho",
			"selected": false
		},
		"casual": {
			"display": "Casual",
			"selected": false
		},
		"classic": {
			"display": "Classic",
			"selected": false
		},
		"coastalNautical": {
			"display": "Coastal/Nautical",
			"selected": false
		},
		"country": {
			"display": "Country",
			"selected": false
		},
		"desert": {
			"display": "Desert",
			"selected": false
		},
		"diyHandmade": {
			"display": "DIY/Handmade",
			"selected": false
		},
		"elegant": {
			"display": "Elegant",
			"selected": false
		},
		"formal": {
			"display": "Formal",
			"selected": false
		},
		"glamorous": {
			"display": "Glamorous",
			"selected": false
		},
		"modern": {
			"display": "Modern",
			"selected": false
		},
		"mountain": {
			"display": "Mountain",
			"selected": false
		},
		"offbeatAlternative": {
			"display": "Offbeat/Alternative",
			"selected": false
		},
		"outdoor": {
			"display": "Outdoor",
			"selected": false
		},
		"preppy": {
			"display": "Preppy",
			"selected": false
		},
		"rustic": {
			"display": "Rustic",
			"selected": false
		},
		"simple": {
			"display": "Simple",
			"selected": false
		},
		"urbanIndustrial": {
			"display": "Urban/Industrial",
			"selected": false
		},
		"vintage": {
			"display": "Vintage",
			"selected": false
		}
	};
	profile.details.selectedDescriptors = [];

	profile.details.selectedDescriptorsCount = 0;

	profile.details.selectedPatternCount = 0;

	profile.details.values = {
		playfulness: null,
		complexity: null
	};

	profile.details.customer = {
		email: null,
		weddingDate: null,
		firstName: null,
		lastName: null,
		phoneNumber: null,
		designNotes: null,
	};

	profile.details.patterns = null;

	profile.details.selectedPatterns = [];

	profile.details.customRequest = null;

	profile.details.colors = [
	{
		"colorSwatchID": 1,
		"hex" :  "eeeeee",
		"colorName" : "Select a color"
	},
	{
		"colorSwatchID": 2,
		"hex" :  "eeeeee",
		"colorName" : "Select a color"
	},
	{
		"colorSwatchID": 3,
		"hex" :  "eeeeee",
		"colorName" : "Select a color"
	},
	{
		"colorSwatchID": 4,
		"hex" :  "eeeeee",
		"colorName" : "Select a color"
	},
	{
		"colorSwatchID": 5,
		"hex" :  "eeeeee",
		"colorName" : "Select a color"
	},
	{
		"colorSwatchID": 6,
		"hex" :  "eeeeee",
		"colorName" : "Select a color"
	}

	];

	profile.details.products = {
		"neckties" : null,
		"bowTies" : null,
		"pocketSquares": null,
		"scarves": null
	};

	profile.details.estimate = {
		"bulkDiscountTotal": 0,
		"bulkDiscountPerUnit": 0,
		"bulkEligibleProductsSubtotal": 0,
		"pocketSquareUnitPrice": 15,
		"pocketSquareDiscountPerUnit": 0,
		"pocketSquaresSubtotal": 0,
		"estimatedTotal": 0
	};

	profile.details.completed = "";

	profile.checkCompletion = function (){
		if ($stateParams.id){
			localStorage.profileId = $routeParams.id;
		}
		if (profile.details.completed === "") {
			$state.transitionTo('create-profile');
		} else if (profile.details.completed === "create-profile-personal-info"){
			$state.transitionTo('create-profile-confirmation');
		}
	};

	profile.checkForAccount = function() {
		if ($location.search().id){
			localStorage.profileId = $location.search().id;
		}
		if ($state.$current.name === 'create-profile') {
			if (localStorage.profileId) {
				$http
				    .get('/api/design-requests/'+ localStorage.profileId)
				    .then(function(response){
				    	profile.id = response.data._id;
				    	profile.details = response.data;
				    	$('#resume')
				    	  .modal('show')
				    	;
			    });
		}}
	};

	profile.markCompleted = function(){
		var current = $state.current.name;
		var completed = profile.details.completed;

		if (
			((current === "create-profile")&&(completed ==="")) ||
			((current === "create-profile-descriptors")&&(completed ==="create-profile")) ||
			((current === "create-profile-playful-traditional")&&(completed ==="create-profile-descriptors")) ||
			((current === "create-profile-simple-complex")&&(completed ==="create-profile-playful-traditional")) ||
			((current === "create-profile-sign-up")&&(completed ==="create-profile-simple-complex")) ||
			((current === "create-profile-select-patterns")&&(completed ==="create-profile-sign-up")) ||
			((current === "create-profile-select-colors")&&(completed ==="create-profile-select-patterns")) ||
			((current === "create-profile-select-products")&&(completed ==="create-profile-select-colors")) ||
			((current === "create-profile-personal-info")&&(completed ==="create-profile-select-products"))
			) {profile.details.completed = $state.current.name};
	};

	

	profile.zapAndSave = function(){
		profile.markCompleted();
		if (profile.id === null) {
			$http
			    .post('/api/design-requests', profile.details)
			    .then(function(response){
			      	profile.id = response.data._id;
			      	localStorage.profileId = profile.id;
			      	profile.zapToCrm();
		    });
			

		} else {
			$http
			    .put('/api/design-requests/' + profile.id, profile.details)
			    .then(function successCallback(response){
			      	profile.details = response.data;
			      	profile.zapToCrm();
		    });
		}
	};

	profile.zapToCrm = function(){
		compilePatterns = function(){
			if (profile.details.patterns) {
			var selectedPatterns = [];
			for (var i = 0; i < profile.details.patterns.length; i++) {
				pattern = profile.details.patterns[i];
				if (pattern.selected === true) {
					minPattern = {
						"patternName" : pattern.patternName,
						"patternId": pattern.patternID
					};
					selectedPatterns.push(minPattern);
				}
			}
			return selectedPatterns;
		}
		};

		var zapPayload = {
			customer : profile.details.customer,
			completed : profile.details.completed,
			colors : profile.details.colors,
			patterns : compilePatterns(),
			products : profile.details.products,
			databaseId : profile.id,
			values : profile.details.values,
			customRequest : profile.details.customRequest,
			estimate : profile.details.estimate,
			descriptors : profile.details.selectedDescriptors,
		};
		$http({
		      method  : "POST",
		      url     : 'https://hooks.zapier.com/hooks/catch/118282/mgswz6/',
		      data    : zapPayload,
		      headers : { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
		                });
		$http({
		      method  : "POST",
		      url     : 'https://hooks.zapier.com/hooks/catch/118282/1yz96a/',
		      data    : zapPayload,
		      headers : { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
		                });
	};

	profile.zapUnsubscribeCrmContact = function(originalEmail){
		var zapPayload = {
			customer : originalEmail
		};
		$http({
		      method  : "POST",
		      url     : 'https://hooks.zapier.com/hooks/catch/118282/mli910/',
		      data    : zapPayload,
		      headers : { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
		                });
	};



	profile.saveProfile = function () {
		profile.markCompleted();
		if (profile.id === null) {
			$http
			    .post('/api/design-requests', profile.details)
			    .then(function(response){
			      	profile.id = response.data._id;
			      	localStorage.profileId = profile.id;
			      	profile.zapToCrm();
		    });
			

		} else {
			$http
			    .put('/api/design-requests/' + profile.id, profile.details)
			    .then(function successCallback(response){
			      	profile.details = response.data;
		    });
		}
	};



	return profile;
});