angular.module('ColorCtrl', []).controller('ColorController', function($scope, $http, $compile, ProfileService, ColorService) {

	ProfileService.checkCompletion();	
	var self = this;
	self.colors = ProfileService.details.colors;
	self.colorOptions = ColorService.allColors;
	self.lastSelectedSwatch = null ;
	self.colorFilter = "";
	self.colorCount = ProfileService.colorCount;
	self.colorSet="Knotty";

	self.saveProfile = function (){
		ProfileService.saveProfile();
	};

	self.selectSwatch = function(swatchID){
		self.lastSelectedSwatch = swatchID;
	};

	self.selectColor = function(hex, colorName, colorSet){


		for (var i = 0; i < self.colors.length; i++) {
	
			if (self.colors[i].colorSwatchID == self.lastSelectedSwatch){
		
				self.colors[i].colorName = colorName;
				self.colors[i].hex = hex;
				self.colors[i].colorSet = colorSet;
				ProfileService.details.colors = self.colors;
				console.log(ProfileService.details.colors);
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

		self.colorFilter = color;
	};

	self.setColorSet = function (set){
		if (set == self.colorSet) {
			self.colorSet = "Knotty";
		}
		self.colorSet = set;
	};

	$scope.test = function(){

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

