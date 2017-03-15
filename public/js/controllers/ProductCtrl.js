angular.module('ProductCtrl', []).controller('ProductController', function($scope, $http, ProfileService) {

	ProfileService.checkCompletion();
	
	var self = this;

	self.products = ProfileService.details.products;
	self.estimate = ProfileService.details.estimate;

	console.log(ProfileService.details.estimate);

	self.saveProfile = function (){
		ProfileService.saveProfile();
	};

	self.selectSwatch = function(swatchID){
		self.lastSelectedSwatch = swatchID;
	};

	self.updateTotals = function(){
		ProfileService.details.products = self.products;
		console.log(ProfileService.details.products);
		bulkEligibleProductsQty = self.products.neckties + self.products.bowTies + self.products.scarves;
		self.estimate.bulkEligibleProductsSubtotal = bulkEligibleProductsQty * 45;
		self.estimate.pocketSquaresSubtotal = self.products.pocketSquares * 15;
		updateBulkDiscount(bulkEligibleProductsQty);
		updatePocketSquareDiscount(self.products.pocketSquares);
		self.estimate.bulkDiscountTotal = (self.estimate.bulkDiscountPerUnit * bulkEligibleProductsQty) + (self.estimate.pocketSquareDiscountPerUnit * self.products.pocketSquares);
		self.estimate.estimatedTotal = self.estimate.bulkEligibleProductsSubtotal + self.estimate.pocketSquaresSubtotal + 20 - self.estimate.bulkDiscountTotal;
		ProfileService.details.estimate = self.estimate;
	};

	updateBulkDiscount = function(bulkCount){
		switch (true) {
			case bulkCount<5:
			self.estimate.bulkDiscountPerUnit = 0;
			break;
			case bulkCount<10:
			self.estimate.bulkDiscountPerUnit = 4;
			break;
			case bulkCount<25:
			self.estimate.bulkDiscountPerUnit = 7;
			break;
			case bulkCount<100:
			self.estimate.bulkDiscountPerUnit = 15;
			break;
			case bulkCount<500:
			self.estimate.bulkDiscountPerUnit = 20;
			break;
			case bulkCount>499:
			self.estimate.bulkDiscountPerUnit = 24;
			break;
		}

	};

	updatePocketSquareDiscount = function(squares){
		if (squares > 49){
			self.estimate.pocketSquareUnitPrice = 10;
			self.estimate.pocketSquareDiscountPerUnit = 5;
		} else {
			self.estimate.pocketSquareUnitPrice = 15;
			self.estimate.pocketSquareDiscountPerUnit = 0;
		}
	};


// .estimate = {
// 		"bulkDiscountTotal": 0,
//		"bulkDiscountPerUnit": 0,
// 		"bulkEligibleProductsSubtotal": 0,
//		"pocketSquareUnitPrice": 15,
//		"pocketSquareDiscountPerUnit": 0,
// 		"pocketSquaresSubtotal": 0,
// 		"estimatedTotal": 0
// 	}

});