angular.module('ProfileService', [])
.factory('ProfileService', function Profile($state, $http, $stateParams, $location) {

	var profile = this;

	profile.id = null;

	profile.colorCount = 0;


	profile.details = {};

	profile.details.adSource = "";

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
		"colorName" : "Select a color",
		"colorSet": ""
	},
	{
		"colorSwatchID": 2,
		"hex" :  "eeeeee",
		"colorName" : "Select a color",
		"colorSet": ""
	},
	{
		"colorSwatchID": 3,
		"hex" :  "eeeeee",
		"colorName" : "Select a color",
		"colorSet": ""
	},
	{
		"colorSwatchID": 4,
		"hex" :  "eeeeee",
		"colorName" : "Select a color",
		"colorSet": ""
	},
	{
		"colorSwatchID": 5,
		"hex" :  "eeeeee",
		"colorName" : "Select a color",
		"colorSet": ""
	},
	{
		"colorSwatchID": 6,
		"hex" :  "eeeeee",
		"colorName" : "Select a color",
		"colorSet": ""
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
				    	countColors = function(){
				    		colorCount = 6;
				    		for (var i = 0; i < response.data.colors.length; i++) {
				    			if (response.data.colors[i].colorName == "Select a color"){
				    				colorCount --;
				    			}
				    		}
				    		return colorCount;
				    	};
				    	profile.colorCount = countColors();
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
			((current === "create-profile-sign-up")&&(completed ==="create-profile-descriptors")) ||
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
			adSource : profile.details.adSource
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

	var executeTrackingCode = function (hide) {
	var $ = window.vwo_$ || window.$ || window.jQuery;
	$ && $('.vwo_loaded').removeClass('vwo_loaded');
	window._vwo_code=(function(){
	var account_id=290348,
	settings_tolerance=2000,
	library_tolerance=2500,
	url =  window._vis_opt_url || document.URL,
	use_existing_jquery=false,
	// DO NOT EDIT BELOW THIS LINE
	f=false,d=document;return{use_existing_jquery:function(){return use_existing_jquery;},library_tolerance:function(){return library_tolerance;},finish:function(){if(!f){f=true;var a=d.getElementById('_vis_opt_path_hides');if(a)a.parentNode.removeChild(a);}},finished:function(){return f;},load:function(a){var b=d.createElement('script');b.src=a;b.type='text/javascript';b.innerText;b.onerror=function(){_vwo_code.finish();};d.getElementsByTagName('head')[0].appendChild(b);},init:function(){settings_timer=setTimeout('_vwo_code.finish()',settings_tolerance);this.load('//dev.visualwebsiteoptimizer.com/j.php?a='+account_id+'&u='+encodeURIComponent(url)+'&r='+Math.random());var a=d.createElement('style'),b=hide?hide + '{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}':'',h=d.getElementsByTagName('head')[0];a.setAttribute('id','_vis_opt_path_hides');a.setAttribute('type','text/css');if(a.styleSheet)a.styleSheet.cssText=b;else a.appendChild(d.createTextNode(b));h.appendChild(a);return settings_timer;}};}());_vwo_settings_timer=_vwo_code.init();
	}


	return profile;
});