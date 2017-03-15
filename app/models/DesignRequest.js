var mongoose = require('mongoose');
	Schema = mongoose.Schema;	
	var DesignRequestSchema   = new Schema({
    	descriptors: {},
    selectedDescriptorsCount: Number,
    selectedPatternCount: Number,
    completed: String,
    values: {
    	playfulness: Number,
    	complexity: Number,
    },
    customer: {
    	email: String,
    	weddingDate: Date,
    	firstName: String,
    	lastName: String,
    	phoneNumber: String,
    	designNotes: String,
    },
    patterns: [{
    	patternName: String,
    	patternID: String,
    	filename: String,
    	tags: Array,
    	category: String,
    	complexity: Number,
    	playfulness: Number,
    	selected: Boolean,
    	relevanceScore: Number

    }],
    customRequest: String,
    colors: [{
    	colorSwatchID: Number,
    	hex: String,
    	colorName: String
    }],
    products : {
    		neckties : Number,
    		bowTies : Number,
    		pocketSquares: Number,
    		scarves: Number
    },
    estimate : {
    		bulkDiscountTotal: Number,
    		bulkDiscountPerUnit: Number,
    		bulkEligibleProductsSubtotal: Number,
    		pocketSquareUnitPrice: Number,
    		pocketSquareDiscountPerUnit: Number,
    		pocketSquaresSubtotal: Number,
    		estimatedTotal: Number
    }
	},
	{timestamps: true});
// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('DesignRequest', DesignRequestSchema);