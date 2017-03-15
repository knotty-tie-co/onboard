angular.module('ColorCtrl', []).controller('ColorController', function($scope, $http, $compile, ProfileService, ColorService) {

	ProfileService.checkCompletion();

	console.log(ProfileService.details.customRequest);
	
	var self = this;
	self.colors = ProfileService.details.colors;
	self.colorOptions = ColorService.allColors;
	self.lastSelectedSwatch = null ;
	self.colorFilter = "";
	self.colorCount = ProfileService.colorCount;

	self.saveProfile = function (){
		ProfileService.saveProfile();
	};

	self.selectSwatch = function(swatchID){
		self.lastSelectedSwatch = swatchID;
	};

	self.selectColor = function(hex, colorName){
		console.log("yo");
		console.log(self.selectedSwatch);
		for (var i = 0; i < self.colors.length; i++) {
			console.log(self.colors[i]);
			if (self.colors[i].colorSwatchID == self.lastSelectedSwatch){
				console.log("matched");
				self.colors[i].colorName = colorName;
				self.colors[i].hex = hex;
				ProfileService.details.colors = self.colors;
				break;
			}
		}
		$('#choose-color')
		  .modal('hide');
		self.colorCount ++;
		ProfileService.colorCount = self.colorCount;
	};

	self.clearColorSelection = function(swatchID){
		for (var i = 0; i < self.colors.length; i++) {
			console.log(self.colors[i]);
			if (self.colors[i].colorSwatchID == swatchID){
				self.colors[i].colorName = "Select a color";
				self.colors[i].hex = "eeeeee";
			}
		}
		ProfileService.details.colors = self.colors;
		self.colorCount --;
		ProfileService.colorCount = self.colorCount;
	};

	self.setColorFilter = function(color){
		console.log("yo");
		self.colorFilter = color;
	};

	$scope.test = function(){
		console.log('yo');
	};

	$(document).ready(function(){
	$('.ui.dropdown').dropdown();
	$('.ui.modal').modal({detachable: false});
	$('#choose-color')
	  .modal('attach events', '.choose-swatch', 'fade');
	 // $('#choose-color')
	 //   .modal('attach events', '.color-chosen', 'hide');
	  
	});

});

