angular.module('PatternService', [])
	.factory('PatternService', function Profile() {

	var patterns = this;

	patterns.allPatterns = 
		[
		 {
		   "patternName": "Denver 1",
		   "patternID": 1201,
		   "filename": "01201-denver-1.jpg",
		   "tags": ["boho", "backyard"],
		   "category": "dots",
		   "complexity": 2,
		   "playfulness": 2,
		   "selected": false,
		   "relevanceScore": 0
		 },
		 {
		   "patternName": "Denver 2",
		   "patternID": 1202,
		   "filename": "01202-denver-2.jpg",
		   "tags": [1, 2, 3],
		   "category": "dots",
		   "complexity": 0,
		   "playfulness": 1,
		   "selected": false,
		   "relevanceScore": 0
		 },
		 {
		   "patternName": "Denver 3",
		   "patternID": 1203,
		   "filename": "01203-denver-3.jpg",
		   "tags": [1, 2, 3],
		   "category": "dots",
		   "complexity": 2,
		   "playfulness": 2,
		   "selected": false,
		   "relevanceScore": 0
		 },
		 {
		   "patternName": "Palette",
		   "patternID": 1204,
		   "filename": "01204-palette.jpg",
		   "tags": [1, 2, 3],
		   "category": "dots",
		   "complexity": 0,
		   "playfulness": 0,
		   "selected": false,
		   "relevanceScore": 0
		 },
		 {
		   "patternName": "Big Polka",
		   "patternID": 1205,
		   "filename": "01205-big-polka.jpg",
		   "tags": [1, 2, 3],
		   "category": "dots",
		   "complexity": 0,
		   "playfulness": 2,
		   "selected": false,
		   "relevanceScore": 0
		 },
		 {
		   "patternName": "Syracuse",
		   "patternID": 1206,
		   "filename": "01206-syracuse.jpg",
		   "tags": [1, 2, 3],
		   "category": "plaid",
		   "complexity": 0,
		   "playfulness": 1,
		   "selected": false,
		   "relevanceScore": 0
		 },
		 {
		   "patternName": "Ivy League",
		   "patternID": 1207,
		   "filename": "01207-ivy-league.jpg",
		   "tags": [1, 2, 3],
		   "category": "plaid",
		   "complexity": 1,
		   "playfulness": 2,
		   "selected": false,
		   "relevanceScore": 0
		 }
		];

	return patterns;

});