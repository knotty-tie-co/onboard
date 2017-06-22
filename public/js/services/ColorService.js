angular.module('ColorService', [])
	.factory('ColorService', function Profile() {

	var colors = this;

	colors.allColors = 
	[
	 {
	   "colorName": "Peony",
	   "hex": "#d0aec3",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Bell Heather",
	   "hex": "#b885a5",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Berry Slush",
	   "hex": "#a05c88",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Boysenberry",
	   "hex": "#88336a",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Mulberry",
	   "hex": "#710b4c",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Red Onion",
	   "hex": "#5c093e",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Shiraz",
	   "hex": "#470730",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Salmon",
	   "hex": "#f1697d",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Passion Fruit",
	   "hex": "#ee5071",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Poppy Pink",
	   "hex": "#ec3866",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Pitaya",
	   "hex": "#c62f55",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Pomegranate",
	   "hex": "#a02645",
	   "category": "Red",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Cranberry Sauce",
	   "hex": "#872039",
	   "category": "Red",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Maroon",
	   "hex": "#6e1a2e",
	   "category": "Red",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Rose",
	   "hex": "#ea93a2",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Lipstick",
	   "hex": "#df7786",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Petunia",
	   "hex": "#d55c6b",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Platelet",
	   "hex": "#d55c6b",
	   "category": "Red",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Redwood",
	   "hex": "#893b45",
	   "category": "Red",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Aduki",
	   "hex": "#703038",
	   "category": "Red",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Brick",
	   "hex": "#57262b",
	   "category": "Red",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Romance",
	   "hex": "#dd898b",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Rag Doll",
	   "hex": "#d56472",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Azalea",
	   "hex": "#ce4059",
	   "category": "Red",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Tamarillo",
	   "hex": "#a13346",
	   "category": "Red",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Ruby",
	   "hex": "#752633",
	   "category": "Red",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Radicchio",
	   "hex": "#5d1d29",
	   "category": "Red",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Burgundy",
	   "hex": "#45141f",
	   "category": "Red",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Cala Lily",
	   "hex": "#45141f",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Rare",
	   "hex": "#e0737b",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Zinnia",
	   "hex": "#dd616e",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Lychee",
	   "hex": "#da4762",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Tulip",
	   "hex": "#d82e57",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Radish",
	   "hex": "#be274c",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Dorothy",
	   "hex": "#a52142",
	   "category": "Red",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Feldspar",
	   "hex": "#c88986",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Antique Pink",
	   "hex": "#c27b78",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Rosy Brown",
	   "hex": "#bc6e6b",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Redford",
	   "hex": "#b55e61",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Nantucket Red",
	   "hex": "#af4f57",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Red Clay",
	   "hex": "#99454b",
	   "category": "Red",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Heirloom",
	   "hex": "#843b40",
	   "category": "Red",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Flamingo",
	   "hex": "#f48081",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Fruit Punch",
	   "hex": "#ec636a",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Cosmo",
	   "hex": "#e44754",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Flannel",
	   "hex": "#bb3139",
	   "category": "Red",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Paprika",
	   "hex": "#931c1f",
	   "category": "Red",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Dahlia",
	   "hex": "#73181b",
	   "category": "Red",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Kumato",
	   "hex": "#541417",
	   "category": "Red",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Dogwood",
	   "hex": "#eca2a2",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Prawn",
	   "hex": "#e88181",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Watermelon",
	   "hex": "#e46161",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Red Herring",
	   "hex": "#d04747",
	   "category": "Red",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Scarlet",
	   "hex": "#bc2e2e",
	   "category": "Red",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Crab Shell",
	   "hex": "#962525",
	   "category": "Red",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Garnet",
	   "hex": "#701c1c",
	   "category": "Red",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Daquiri",
	   "hex": "#f9aa8e",
	   "category": "Orange",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Terracotta",
	   "hex": "#f58367",
	   "category": "Orange",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Pheonix",
	   "hex": "#f15c40",
	   "category": "Orange",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Hot Rod",
	   "hex": "#ee3c32",
	   "category": "Red",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Candy Apple",
	   "hex": "#ec1c24",
	   "category": "Red",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Postbox",
	   "hex": "#cc1e24",
	   "category": "Red",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Bing Cherry",
	   "hex": "#ac1f24",
	   "category": "Red",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Tiger Lily",
	   "hex": "#f4743b",
	   "category": "Orange",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Tangelo",
	   "hex": "#f05e33",
	   "category": "Orange",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Serrano",
	   "hex": "#ef4a24",
	   "category": "Orange",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Salsa",
	   "hex": "#d54325",
	   "category": "Orange",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Cinnamon",
	   "hex": "#bc3d26",
	   "category": "Orange",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Mars",
	   "hex": "#96311c",
	   "category": "Orange",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Nutmeg",
	   "hex": "#702612",
	   "category": "Orange",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Blossom",
	   "hex": "#f4c6be",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Marzipan",
	   "hex": "#f1b8af",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Warm Pink",
	   "hex": "#efaaa0",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Lip Balm",
	   "hex": "#ec9a90",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Piglet",
	   "hex": "#ea8b80",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Dawn",
	   "hex": "#e77d70",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Coral",
	   "hex": "#e47061",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Peach",
	   "hex": "#f6c1aa",
	   "category": "Orange",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Chai",
	   "hex": "#f1aa88",
	   "category": "Orange",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Apricot",
	   "hex": "#ec9366",
	   "category": "Orange",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Kumquat",
	   "hex": "#e98855",
	   "category": "Orange",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Carrot",
	   "hex": "#e77d45",
	   "category": "Orange",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Oolong",
	   "hex": "#cf6f3d",
	   "category": "Orange",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Amber",
	   "hex": "#b76136",
	   "category": "Orange",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Bandage",
	   "hex": "#d58b69",
	   "category": "Orange",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Sultana",
	   "hex": "#cc6c47",
	   "category": "Orange",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Pumpkin Spice",
	   "hex": "#c34d26",
	   "category": "Orange",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Chutney",
	   "hex": "#a94422",
	   "category": "Orange",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Yam",
	   "hex": "#903b1f",
	   "category": "Orange",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Date",
	   "hex": "#692b18",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Clove",
	   "hex": "#421c12",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Injera",
	   "hex": "#fce8dd",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Cheech",
	   "hex": "#fcd1c3",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Melon",
	   "hex": "#fbbea9",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Bosc",
	   "hex": "#dba694",
	   "category": "Orange",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Pinto",
	   "hex": "#bc8f7f",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Pluto",
	   "hex": "#9d776a",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Earthworm",
	   "hex": "#7e5f55",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Orange Cream",
	   "hex": "#f9b481",
	   "category": "Orange",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Sunrise",
	   "hex": "#f69e5f",
	   "category": "Orange",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Satsuma",
	   "hex": "#f4893d",
	   "category": "Orange",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Vulpes",
	   "hex": "#d17531",
	   "category": "Orange",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Caramel",
	   "hex": "#af6126",
	   "category": "Orange",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Apple Cider",
	   "hex": "#965321",
	   "category": "Orange",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Rust",
	   "hex": "#7d451c",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Lorikeet",
	   "hex": "#f9b975",
	   "category": "Orange",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Mango",
	   "hex": "#f6a448",
	   "category": "Orange",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Nectarine",
	   "hex": "#f4901c",
	   "category": "Orange",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Mead",
	   "hex": "#da8123",
	   "category": "Orange",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Topaz",
	   "hex": "#c17329",
	   "category": "Orange",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Pepernoot",
	   "hex": "#955e2a",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Curry Powder",
	   "hex": "#694a2b",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Honey",
	   "hex": "#ecc180",
	   "category": "Orange",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Taiblet",
	   "hex": "#e7ae54",
	   "category": "Orange",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Daffodil",
	   "hex": "#e29b29",
	   "category": "Orange",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Manila",
	   "hex": "#c68724",
	   "category": "Orange",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Brass",
	   "hex": "#aa731f",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Flaxseed",
	   "hex": "#8d6119",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Caraway",
	   "hex": "#704f14",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Mimosa",
	   "hex": "#ffd5a0",
	   "category": "Orange",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Garlic Bread",
	   "hex": "#fdc376",
	   "category": "Oraneg",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Cantaloupe",
	   "hex": "#fbb14d",
	   "category": "Orange",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Papaya",
	   "hex": "#faa934",
	   "category": "Orange",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Marmalade",
	   "hex": "#f9a21c",
	   "category": "Orange",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Tumeric",
	   "hex": "#df9123",
	   "category": "Orange",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Ocre",
	   "hex": "#c68129",
	   "category": "Orange",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Awaken",
	   "hex": "#f1ddc6",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Sesame",
	   "hex": "#e5cdaf",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Wheat",
	   "hex": "#dabe98",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Shortbread",
	   "hex": "#d5b286",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Toast",
	   "hex": "#d0a775",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Peanut Butter",
	   "hex": "#c99d64",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Bamboo",
	   "hex": "#c39354",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Goldenrod",
	   "hex": "#f9e79b",
	   "category": "Yellow",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Butter",
	   "hex": "#f6e083",
	   "category": "Yellow",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Ginger",
	   "hex": "#f4da6b",
	   "category": "Yellow",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Starfruit",
	   "hex": "#f1cd39",
	   "category": "Yellow",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Citrine",
	   "hex": "#efc108",
	   "category": "Yellow",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Butterscotch",
	   "hex": "#d0a806",
	   "category": "Yellow",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Mustard Seed",
	   "hex": "#b19005",
	   "category": "Yellow",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Banana",
	   "hex": "#fff9c6",
	   "category": "Yellow",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Pineapple Tidbits",
	   "hex": "#fff6aa",
	   "category": "Yellow",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Quiche",
	   "hex": "#fff48e",
	   "category": "Yellow",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Corn Flake",
	   "hex": "#f9e84a",
	   "category": "Yellow",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Sunflower",
	   "hex": "#f4dd06",
	   "category": "Yellow",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Dijon",
	   "hex": "#ccae0e",
	   "category": "Yellow",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Gold",
	   "hex": "#a58015",
	   "category": "Yellow",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Riesling",
	   "hex": "#fff7b8",
	   "category": "Yellow",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Sweet Vidalia",
	   "hex": "#ffee9c",
	   "category": "Yellow",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Creme Brulee",
	   "hex": "#ffe35b",
	   "category": "Yellow",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Ginko",
	   "hex": "#dfc64f",
	   "category": "Yellow",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Saturn",
	   "hex": "#bfaa44",
	   "category": "Yellow",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Durian",
	   "hex": "#9f8e39",
	   "category": "Yellow",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Cumin",
	   "hex": "#80722e",
	   "category": "Yellow",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Buttercream",
	   "hex": "#fff9ac",
	   "category": "Yellow",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Sticky Note",
	   "hex": "#fcf481",
	   "category": "Yellow",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Sunshine",
	   "hex": "#f9ef57",
	   "category": "Yellow",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Popsicle",
	   "hex": "#fcf02b",
	   "category": "Yellow",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Lemon Zest",
	   "hex": "#fff100",
	   "category": "Yellow",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Zuni",
	   "hex": "#e5d917",
	   "category": "Yellow",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Buttercup",
	   "hex": "#cbc12e",
	   "category": "Yellow",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Finn",
	   "hex": "#f4ecc3",
	   "category": "Yellow",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Quinoa",
	   "hex": "#f1e9b6",
	   "category": "Yellow",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Whipped Custard",
	   "hex": "#efe7aa",
	   "category": "Yellow",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Moscato",
	   "hex": "#ebe08f",
	   "category": "Yellow",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Pollen",
	   "hex": "#e7da75",
	   "category": "Yellow",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Bartlett",
	   "hex": "#cdc268",
	   "category": "Yellow",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Hazel",
	   "hex": "#b4aa5c",
	   "category": "Yellow",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Horseradish",
	   "hex": "#efe7be",
	   "category": "Yellow",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Honeygold",
	   "hex": "#e9de9f",
	   "category": "Yellow",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Meringue",
	   "hex": "#e4d581",
	   "category": "Yellow",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Endive",
	   "hex": "#dccb55",
	   "category": "Yellow",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Pomelo",
	   "hex": "#d5c129",
	   "category": "Yellow",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Jubilee",
	   "hex": "#bbaa2e",
	   "category": "Yellow",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Bergamot",
	   "hex": "#a29333",
	   "category": "Yellow",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Kiwi",
	   "hex": "#bece84",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Tomatillo",
	   "hex": "#abc160",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Sprout",
	   "hex": "#98b43d",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Leek",
	   "hex": "#849c3a",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Jade",
	   "hex": "#708438",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Pickle",
	   "hex": "#4f5e29",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Forest Trail",
	   "hex": "#2e381a",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Avocado",
	   "hex": "#beda95",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Granny Smith",
	   "hex": "#a7d174",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Key Lime",
	   "hex": "#90c854",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Asparagus",
	   "hex": "#7dae48",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Cilantro",
	   "hex": "#6b953d",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Bok Choy",
	   "hex": "#506f2f",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Olive",
	   "hex": "#364a21",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Peridot",
	   "hex": "#c8e2b9",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Celery",
	   "hex": "#a8bf96",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Cactus",
	   "hex": "#899d73",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Oregano",
	   "hex": "#6b8a55",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Matcha",
	   "hex": "#4d7838",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Pesto",
	   "hex": "#3d5e2c",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Dolma",
	   "hex": "#2e4521",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Gooseberry",
	   "hex": "#98d090",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Dill",
	   "hex": "#68ad69",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Ivy",
	   "hex": "#388b42",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Canopy",
	   "hex": "#307236",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Parsley",
	   "hex": "#29592b",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Zucchini",
	   "hex": "#1b441c",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Nori",
	   "hex": "#0d300d",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Willow",
	   "hex": "#c1dfbc",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Green Goddess",
	   "hex": "#93d0a3",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Dewy Grass",
	   "hex": "#66c18b",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Grove",
	   "hex": "#33b36e",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Shamrock",
	   "hex": "#00a552",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Chard",
	   "hex": "#008c46",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Spinach Leaf",
	   "hex": "#00733b",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Fennel",
	   "hex": "#81c8a7",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Mantis",
	   "hex": "#6abe99",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Lotus",
	   "hex": "#54b48b",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Fern",
	   "hex": "#3aa378",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Green Field",
	   "hex": "#219366",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Turf",
	   "hex": "#197750",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "English Cucumber",
	   "hex": "#125c3b",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "White",
	   "hex": "#ffffff",
	   "category": "White/Off White",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Pearl",
	   "hex": "#ecece7",
	   "category": "White/Off White",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Hellebores",
	   "hex": "#dee0d6",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Lentil",
	   "hex": "#d0d5c6",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Grasshopper",
	   "hex": "#c2c9b8",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Fog",
	   "hex": "#b4beaa",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Tillandsia",
	   "hex": "#9ca493",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Sage",
	   "hex": "#848b7d",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Dusty Miller",
	   "hex": "#cbd3cb",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Sisal",
	   "hex": "#bfcac1",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Moss",
	   "hex": "#b4c1b7",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Tarragon",
	   "hex": "#9fb3a5",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Artichoke",
	   "hex": "#8ba593",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Spruce",
	   "hex": "#768c7c",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Thyme",
	   "hex": "#617366",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Aloe Vera",
	   "hex": "#9dd3af",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Ingrid",
	   "hex": "#7ac79a",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Lilypad",
	   "hex": "#57bc86",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Killarney",
	   "hex": "#3ba26f",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Kelly",
	   "hex": "#1f8959",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Jalepeno",
	   "hex": "#197048",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Emerald",
	   "hex": "#145738",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Cottonball",
	   "hex": "#e8eae9",
	   "category": "White/Off White",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Spanish Moss",
	   "hex": "#d1d5d3",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Norbert",
	   "hex": "#bac1be",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Dragon",
	   "hex": "#a3aca8",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Beetle",
	   "hex": "#8b9792",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Bog",
	   "hex": "#5d6e67",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Cypres",
	   "hex": "#2f443b",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Succulent",
	   "hex": "#86d0c6",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Sea Spray",
	   "hex": "#57b2a6",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Celeadon",
	   "hex": "#299080",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Alexandrite",
	   "hex": "#22776a",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Rosemary",
	   "hex": "#1c5e54",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Algae",
	   "hex": "#0e5146",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Mallard",
	   "hex": "#004538",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Aquamarine",
	   "hex": "#8bd3df",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Wrasse",
	   "hex": "#49c8d7",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Sky Above",
	   "hex": "#08bed0",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Caribbean",
	   "hex": "#05a6b6",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Faded Turquoise",
	   "hex": "#038e9d",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Cheyenne",
	   "hex": "#046c78",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Ultramarine",
	   "hex": "#054a54",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Newport",
	   "hex": "#aad5dd",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Forget Me Nots",
	   "hex": "#71b9c7",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Surf",
	   "hex": "#399eb0",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Teal",
	   "hex": "#00829a",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Dungaree",
	   "hex": "#026c7f",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Bay",
	   "hex": "#045764",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Poseidon",
	   "hex": "#064149",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Bubble",
	   "hex": "#c6e2ea",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Ice Rink",
	   "hex": "#b9dbe6",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Lake Blue",
	   "hex": "#acd5e2",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Uranus",
	   "hex": "#92cbda",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Elsa",
	   "hex": "#78c1d3",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Blue Agave",
	   "hex": "#6aaab9",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Liberty",
	   "hex": "#5c93a0",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Raindrop",
	   "hex": "#90c6dd",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Hoopty",
	   "hex": "#48b3d4",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Fjord",
	   "hex": "#00a0cb",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Faience",
	   "hex": "#0083a5",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Atlantic",
	   "hex": "#006680",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Galapago",
	   "hex": "#005166",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Abyss",
	   "hex": "#003d4d",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Tweedia",
	   "hex": "#b4d0e7",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Frost Flower",
	   "hex": "#98bbdf",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Blue Moon",
	   "hex": "#7da7d8",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Bluejay",
	   "hex": "#4384b4",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Azul",
	   "hex": "#0a6190",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Pablo",
	   "hex": "#06476a",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "High Tide",
	   "hex": "#032e45",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Blue Steel",
	   "hex": "#8b95aa",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Birdbill",
	   "hex": "#77849a",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Washed Denim",
	   "hex": "#63748a",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Emerson",
	   "hex": "#4f637a",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Cheshire",
	   "hex": "#3f5064",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Storm",
	   "hex": "#2f3c4e",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Cassowary",
	   "hex": "#1f2938",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Morning Glory",
	   "hex": "#70a2dd",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Azure",
	   "hex": "#558fca",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "French Blue",
	   "hex": "#3b7db7",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Blue Raspberry",
	   "hex": "#2663a5",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Cobalt",
	   "hex": "#124a93",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Callbox",
	   "hex": "#0d3e7b",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Sapphire",
	   "hex": "#083363",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Icicle",
	   "hex": "#d8d8e4",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Glaucous",
	   "hex": "#b8bdd1",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Blue Dust",
	   "hex": "#98a2be",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Ceres",
	   "hex": "#7d8daf",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Polynya",
	   "hex": "#6378a0",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Weatherglass",
	   "hex": "#506ca5",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Cornflower",
	   "hex": "#3d61aa",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Crystal",
	   "hex": "#e2e4ec",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Eris",
	   "hex": "#d9dce7",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Mist",
	   "hex": "#d0d5e2",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Elati",
	   "hex": "#c4cde3",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Iceberg",
	   "hex": "#b9c6e4",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Surfboard",
	   "hex": "#a6b8de",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Powder Blue",
	   "hex": "#a6b8de",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Baby Blue",
	   "hex": "#acb9dd",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Blair",
	   "hex": "#8a9fd0",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Serenity",
	   "hex": "#6986c3",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Vourdon",
	   "hex": "#4569a6",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Patriot",
	   "hex": "#214d89",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Blue Maize",
	   "hex": "#183763",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Thames",
	   "hex": "#0f213d",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Periwinkle",
	   "hex": "#b0bad5",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Blizzard",
	   "hex": "#7d8abe",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Delphinium",
	   "hex": "#4a5aa7",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Neptune",
	   "hex": "#3a468f",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Blueberry",
	   "hex": "#2a3378",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Blue Ink",
	   "hex": "#20285e",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Navy",
	   "hex": "#171d45",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Hera",
	   "hex": "#b9aee5",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Hydrangea",
	   "hex": "#9687d9",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Winston",
	   "hex": "#7461ce",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Poppins",
	   "hex": "#5845af",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Drama",
	   "hex": "#3c2a91",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Indigo",
	   "hex": "#2c1d64",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Empress",
	   "hex": "#1d1038",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Sophia",
	   "hex": "#9d86c3",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Mountains",
	   "hex": "#8d71b5",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Poison",
	   "hex": "#7d5ca7",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "People Eater",
	   "hex": "#6c4599",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Violet",
	   "hex": "#5c2e8b",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Black Currant",
	   "hex": "#47246c",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Queen",
	   "hex": "#331a4d",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Lavender",
	   "hex": "#b2adc0",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Venus",
	   "hex": "#a69fb5",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Dusty Violet",
	   "hex": "#9992ab",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Marie",
	   "hex": "#8c84a0",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Cardigan",
	   "hex": "#7b748c",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Aphrodite",
	   "hex": "#696378",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Elderberry",
	   "hex": "#696378",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Allium",
	   "hex": "#b48ec1",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Jasmine",
	   "hex": "#a77bb6",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Lily",
	   "hex": "#9b69ac",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Verbena",
	   "hex": "#8e57a2",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Orchid",
	   "hex": "#814598",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Jelly",
	   "hex": "#713c85",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Amethyst",
	   "hex": "#613373",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Mauve",
	   "hex": "#a7869d",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Turnip",
	   "hex": "#936d88",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Foxglove",
	   "hex": "#805473",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Hecate",
	   "hex": "#734b67",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Vineyard",
	   "hex": "#66425c",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Kyoho",
	   "hex": "#593a50",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Fig",
	   "hex": "#4d3345",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Ophelia",
	   "hex": "#d88ebe",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Redbud",
	   "hex": "#b65f9f",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Iris",
	   "hex": "#953081",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Black Cherry Gelato",
	   "hex": "#7c286a",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Thistle",
	   "hex": "#632154",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Beetroot",
	   "hex": "#511a47",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Aubergine",
	   "hex": "#40143b",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Afternoon Tea",
	   "hex": "#ecd8ec",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Bikini",
	   "hex": "#e0cce2",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Kunzite",
	   "hex": "#d5c1d8",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Catmint",
	   "hex": "#d0b5d3",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Lilac",
	   "hex": "#cbaace",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Bellflower",
	   "hex": "#bf95c2",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Duchess",
	   "hex": "#b481b7",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Clematis",
	   "hex": "#ddbec8",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Fantasia",
	   "hex": "#d6b0be",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Ranunculus",
	   "hex": "#d0a2b4",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Smooch",
	   "hex": "#c689a1",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Deep Pink",
	   "hex": "#bc708e",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Rutabaga",
	   "hex": "#a2627b",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Rhubarb",
	   "hex": "#895469",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Sweet Pea",
	   "hex": "#f6d8e7",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Candy Heary",
	   "hex": "#f2c6dd",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Begonia",
	   "hex": "#efb4d3",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Rock Candy",
	   "hex": "#e993bf",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Piggy Bank",
	   "hex": "#e473ac",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Confetti",
	   "hex": "#e15ea2",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Princess",
	   "hex": "#df4a98",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Cherry Blossom",
	   "hex": "#f6dae4",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Ceviche",
	   "hex": "#f8d1dc",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Carnation",
	   "hex": "#f9c8d5",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Snow Cone",
	   "hex": "#f6b7cb",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Bubblegum",
	   "hex": "#f4a7c1",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Jellybean",
	   "hex": "#f182a7",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Rosette",
	   "hex": "#ef5e8e",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Astilbe",
	   "hex": "#e7a7b7",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Denise",
	   "hex": "#e494a9",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Eraser",
	   "hex": "#e2819b",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Happy Heart",
	   "hex": "#de6d8e",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Strawberry",
	   "hex": "#da5981",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Hibiscus",
	   "hex": "#d63977",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Magenta",
	   "hex": "#d31a6e",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Puffball",
	   "hex": "#fbddda",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Pastel Pink",
	   "hex": "#facccc",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Baby Pink",
	   "hex": "#f9bcbe",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Starfish",
	   "hex": "#f59ea4",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Pixie",
	   "hex": "#f1818b",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Lollipop",
	   "hex": "#f17181",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Grapefruit",
	   "hex": "#f16178",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Lace",
	   "hex": "#efd1ce",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Macaron",
	   "hex": "#ecc8c4",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Himalayan Salt",
	   "hex": "#e9bfba",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Taffy",
	   "hex": "#e3aba5",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Rouge",
	   "hex": "#dc9890",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Seahorse",
	   "hex": "#d88c84",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Sphynx",
	   "hex": "#bd7b74",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Flushed",
	   "hex": "#ecd5d8",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Louise",
	   "hex": "#e9cdd0",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Enchanted",
	   "hex": "#e7c6c8",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Macrame",
	   "hex": "#e3bdc0",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Raggiana",
	   "hex": "#dfb4b9",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Pinch",
	   "hex": "#dbacb1",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Vintage Pink",
	   "hex": "#d8a5aa",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Peek A' Boo",
	   "hex": "#f6eff1",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Taboo",
	   "hex": "#f0e3e9",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Pink Frosting",
	   "hex": "#ead8e2",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Noreen",
	   "hex": "#e8d3de",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "J' Adore",
	   "hex": "#e7ceda",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Merry",
	   "hex": "#e0c5d4",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Calibrachoa",
	   "hex": "#dabcce",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Cassiopeia",
	   "hex": "#f6ecef",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Teaspoon",
	   "hex": "#f5e9ec",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Slipper",
	   "hex": "#f4e7ea",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Knit",
	   "hex": "#f2e3e6",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Satin Pink",
	   "hex": "#f1dfe2",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Tit for Tat",
	   "hex": "#f0dbdf",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Cotton Candy",
	   "hex": "#efd8dd",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Rosewater",
	   "hex": "#f4e4e7",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Elizabeth",
	   "hex": "#f2dfe2",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Fritillary",
	   "hex": "#f1dadd",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Andersen",
	   "hex": "#f0d5d8",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Shy Pink",
	   "hex": "#efd0d3",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Smoothie",
	   "hex": "#edcbcf",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Tea Rose",
	   "hex": "#ecc6cb",
	   "category": "Pink",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Ivory",
	   "hex": "#f6f4ef",
	   "category": "White/Off White",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Gin Fizz",
	   "hex": "#f1ede4",
	   "category": "White/Off White",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Canvas",
	   "hex": "#ece7da",
	   "category": "White/Off White",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Jicama",
	   "hex": "#e8e2d1",
	   "category": "White/Off White",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Champagne",
	   "hex": "#e4ddc8",
	   "category": "White/Off White",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Breadcrumb",
	   "hex": "#dcd2bb",
	   "category": "White/Off White",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Pita",
	   "hex": "#d5c8af",
	   "category": "White/Off White",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Sand",
	   "hex": "#f1e7dd",
	   "category": "White/Off White",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Oat",
	   "hex": "#e7d6c6",
	   "category": "White/Off White",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Trenchcoat",
	   "hex": "#ddc6af",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Pine Nut",
	   "hex": "3d4b59a",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Tuscany",
	   "hex": "#cba586",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Crimini",
	   "hex": "#ba9c83",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Crumble",
	   "hex": "#aa9380",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Marble",
	   "hex": "#efefec",
	   "category": "White/Off White",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Jupiter",
	   "hex": "#e2e3e0",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Earl Grey",
	   "hex": "#d5d8d5",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Hermes",
	   "hex": "#c9cdcb",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Koala",
	   "hex": "#bec3c1",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Overcast",
	   "hex": "#afb4b3",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Husky",
	   "hex": "#a0a5a5",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Dolemite",
	   "hex": "#efefed",
	   "category": "White/Off White",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Fondant",
	   "hex": "#dededa",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Cairn",
	   "hex": "#cecec8",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Weimaraner",
	   "hex": "#bfbeb7",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Griege",
	   "hex": "#afaea5",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Haumea",
	   "hex": "#9e9d92",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Shiitake",
	   "hex": "#8e8d80",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Rice",
	   "hex": "#efece7",
	   "category": "White/Off White",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Crochet",
	   "hex": "#e2ded7",
	   "category": "White/Off White",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Bulgar",
	   "hex": "#d5d0c8",
	   "category": "White/Off White",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Mercury",
	   "hex": "#c9c3ba",
	   "category": "White/Off White",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Fawn",
	   "hex": "#beb7ac",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Dusty Violet",
	   "hex": "#b0aaa2",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Granite",
	   "hex": "#a29d98",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "On the Rocks",
	   "hex": "#d7d1d2",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Charlotte's Web",
	   "hex": "#c2b9bb",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Seal",
	   "hex": "#aea2a4",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Shallot",
	   "hex": "#9a8b8d",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Cottage",
	   "hex": "#867477",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Hippopotamus",
	   "hex": "#6d5e60",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Raisin",
	   "hex": "#54494a",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Elephant",
	   "hex": "#a1a89e",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Pigeon",
	   "hex": "#8d938a",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Sloth",
	   "hex": "#797e77",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Wolfpack",
	   "hex": "#656963",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Racoon",
	   "hex": "#51544f",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Ice Box",
	   "hex": "#3c3f3b",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Vulture",
	   "hex": "#282a28",
	   "category": "Black",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Beluga",
	   "hex": "#d5d3d5",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Polly",
	   "hex": "#b6b5b9",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Lithonia",
	   "hex": "#98989d",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Wooly Scarf",
	   "hex": "#7f8388",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Steel Rail",
	   "hex": "#666e73",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Boulder",
	   "hex": "#505559",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Tephra",
	   "hex": "#3b3d40",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Smoke",
	   "hex": "#b4b4b4",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Office",
	   "hex": "#989898",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Graphite",
	   "hex": "#7d7d7d",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Ram",
	   "hex": "#555454",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Charcoal",
	   "hex": "#2d2c2c",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Carbon",
	   "hex": "#161616",
	   "category": "Black",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Black",
	   "hex": "#000000",
	   "category": "Black",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Fossil",
	   "hex": "#c1bcb9",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Taupe",
	   "hex": "#aaa39f",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Cobblestone",
	   "hex": "#938b86",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Urban Loft",
	   "hex": "#706661",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Smoky Quartz",
	   "hex": "#4d423d",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Stout",
	   "hex": "#3e342f",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Espresso",
	   "hex": "#302621",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Gravel",
	   "hex": "#70706e",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Chow-Chow",
	   "hex": "#5f615e",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Lead",
	   "hex": "#4f524f",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Hibo",
	   "hex": "#3f4543",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Meteorite",
	   "hex": "#303838",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Galaxy",
	   "hex": "#2a302f",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Obsidian",
	   "hex": "#242926",
	   "category": "Black",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Russian Blue",
	   "hex": "#848186",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Spooky",
	   "hex": "#6e6c71",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Ground Pepper",
	   "hex": "#59575c",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Soapstone",
	   "hex": "#43434a",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Slate Gray",
	   "hex": "#2e3038",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Licorice",
	   "hex": "#20232b",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Midnight",
	   "hex": "#12171f",
	   "category": "Black",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Aluminum",
	   "hex": "#959393",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Haunt",
	   "hex": "#82807f",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Dim",
	   "hex": "#706e6b",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Iron",
	   "hex": "#615e5d",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Engine",
	   "hex": "#524f4f",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Twilight",
	   "hex": "#444242",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Onyx",
	   "hex": "#363636",
	   "category": "Gray",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Stoneware",
	   "hex": "#988e8e",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Boot",
	   "hex": "#857b7a",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Mouning Dove",
	   "hex": "#736966",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Seed",
	   "hex": "#635856",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Tabby",
	   "hex": "#544747",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Pryce",
	   "hex": "#463a3a",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Soil",
	   "hex": "#382e2e",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Chocolate Malt",
	   "hex": "#ac9389",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Buckwheat",
	   "hex": "#9d8075",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Walnut",
	   "hex": "#8e6e61",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Plateau",
	   "hex": "#805d50",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Maple",
	   "hex": "#734d40",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Mahogany",
	   "hex": "#673e33",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Xocolatl",
	   "hex": "#5c3026",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Farro",
	   "hex": "#a7988e",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Pug",
	   "hex": "#96857a",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Tiramisu",
	   "hex": "#867366",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Hazelnut",
	   "hex": "#786355",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Pecan",
	   "hex": "#6b5445",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Fudge",
	   "hex": "#5e4738",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Oak",
	   "hex": "#523b2b",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Ash",
	   "hex": "#b9afa5",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Quicksand",
	   "hex": "#ad9f94",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Soba",
	   "hex": "#a29084",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Cardboard",
	   "hex": "#958476",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Teak",
	   "hex": "#897869",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Parcel",
	   "hex": "#7f6d5d",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Sepia",
	   "hex": "#756352",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Almond",
	   "hex": "#dfd0c3",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Eclair",
	   "hex": "#d5bfad",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Birch",
	   "hex": "#cbaf98",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Miso",
	   "hex": "#b89376",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Canyon",
	   "hex": "#a57854",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Iced Tea",
	   "hex": "#9d6c45",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Copper Penny",
	   "hex": "#956136",
	   "category": "Brown",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Vanilla",
	   "hex": "#f9f6ef",
	   "category": "White/Off White",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Tofu",
	   "hex": "#f8f2e6",
	   "category": "White/Off White",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Macadamia",
	   "hex": "#f7eddd",
	   "category": "White/Off White",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Garbanzo",
	   "hex": "#f5e9d4",
	   "category": "White/Off White",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Cashew",
	   "hex": "#f4e4cb",
	   "category": "White/Off White",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Dune",
	   "hex": "#d9cab3",
	   "category": "White/Off White",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Elm",
	   "hex": "#beb19b",
	   "category": "White/Off White",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Gardenia",
	   "hex": "#fcf5e8",
	   "category": "White/Off White",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Rhea",
	   "hex": "#fdf1de",
	   "category": "White/Off White",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Sandal",
	   "hex": "#fdecd4",
	   "category": "White/Off White",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Sponge Cake",
	   "hex": "#fee8ca",
	   "category": "Orange",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Garlic",
	   "hex": "#fee4bf",
	   "category": "Orange",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Biscuit",
	   "hex": "#fedfb5",
	   "category": "Orange",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Peach Sorbet",
	   "hex": "#ffdbab",
	   "category": "Orange",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Cameo",
	   "hex": "#fbfff4",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Crescent",
	   "hex": "#f9fbec",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Honeydew",
	   "hex": "#f6fbe2",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Lemongrass",
	   "hex": "#f4f9da",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Spring",
	   "hex": "#edf5b9",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Pistachio",
	   "hex": "#e6f198",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Noni",
	   "hex": "#dfed77",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Aspen",
	   "hex": "#f6f6f4",
	   "category": "White/Off White",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Crepe",
	   "hex": "#f4f4ef",
	   "category": "White/Off White",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Mirin",
	   "hex": "#f0f0e8",
	   "category": "White/Off White",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Euporie",
	   "hex": "#f0f0dd",
	   "category": "White/Off White",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Nix",
	   "hex": "#f4f4d8",
	   "category": "White/Off White",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Chilled Pear",
	   "hex": "#f0f0cb",
	   "category": "White/Off White",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Soybean",
	   "hex": "#ececbf",
	   "category": "White/Off White",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Dublin",
	   "hex": "#f1faf4",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Mojito",
	   "hex": "#e8f7ee",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Limeade",
	   "hex": "#e0f5e7",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Spider Mum",
	   "hex": "#d8f2e1",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Nana",
	   "hex": "#cfefdb",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Mint",
	   "hex": "#c7edd4",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Daylily",
	   "hex": "#beeace",
	   "category": "Green",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Pillow Mint",
	   "hex": "#f1faf9",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Cressida",
	   "hex": "#eaf8f6",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Blanche",
	   "hex": "#e3f6f3",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Seashell",
	   "hex": "#ddf3f0",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Artemis",
	   "hex": "#cfefea",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Spearmint",
	   "hex": "#c8ece7",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Wisp",
	   "hex": "#c1eae4",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Tundra",
	   "hex": "#f7fdfd",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Tonic",
	   "hex": "#f1fbfa",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Orion",
	   "hex": "#eaf9f8",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Janice",
	   "hex": "#e3f7f6",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Breeze",
	   "hex": "#dcf5f4",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Peppermint",
	   "hex": "#cef1f0",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Sedna",
	   "hex": "#c1e9ea",
	   "category": "Blue",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Andromeda",
	   "hex": "#f1ecf4",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Pheobe",
	   "hex": "#efeaf4",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Sugar Plum",
	   "hex": "#e5dfec",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Frosted Petal",
	   "hex": "#dcd5e3",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Mallory",
	   "hex": "#d2cadb",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Timewarp",
	   "hex": "#bda6c0",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
	   "colorName": "Monkshood",
	   "hex": "#a882a6",
	   "category": "Purple",
	   "colorSet" : "Knotty"
	 },
	 {
   "colorName": "Angel",
   "hex": "#fbebdc",
   "category": "Off White",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Apple",
   "hex": "#991d42",
   "category": "Red",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Ballet",
   "hex": "#eaacad",
   "category": "Pink",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Begonia",
   "hex": "#d90b86",
   "category": "Pink",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Bellini",
   "hex": "#fbbea9",
   "category": "Orange",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Biscotti",
   "hex": "#cab6ad",
   "category": "Brown",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Blue Violet",
   "hex": "#384ea3",
   "category": "Purple",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Bouquet",
   "hex": "#a882a6",
   "category": "Purple",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Cameo",
   "hex": "#c9b3b5",
   "category": "Purple",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Canary",
   "hex": "#ffeaa7",
   "category": "Yellow",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Capri",
   "hex": "#a6d4eb",
   "category": "Blue",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Champagne",
   "hex": "#d0bfa5",
   "category": "Brown",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Cherry",
   "hex": "#bb1b41",
   "category": "Red",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Clover",
   "hex": "#5d9568",
   "category": "Green",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Cobalt",
   "hex": "#014aba",
   "category": "Blue",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Coral Reef",
   "hex": "#f48689",
   "category": "Pink",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Cornflower",
   "hex": "#0289cb",
   "category": "Blue",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Emerald",
   "hex": "#00794e",
   "category": "Green",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Gem",
   "hex": "#005162",
   "category": "Green",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Graphite",
   "hex": "#373a3e",
   "category": "Gray",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Guava",
   "hex": "#fa5769",
   "category": "Red",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Horizon",
   "hex": "#044b9b",
   "category": "Blue",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Hydrangea",
   "hex": "#8c84a0",
   "category": "Purple",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Ice Blue",
   "hex": "#a2bada",
   "category": "Blue",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Iris",
   "hex": "#bfb9d1",
   "category": "Purple",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Ivory",
   "hex": "#eae7df",
   "category": "Off White",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Juniper",
   "hex": "#003026",
   "category": "Green",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Kelly",
   "hex": "#159556",
   "category": "Green",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Lapis",
   "hex": "#3f3244",
   "category": "Purple",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Lemon Lime",
   "hex": "#e4e15c",
   "category": "Green",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Malibu",
   "hex": "#00b2d0",
   "category": "Blue",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Marine",
   "hex": "#0d3662",
   "category": "Blue",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Meadow",
   "hex": "#98b5a1",
   "category": "Green",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Mercury",
   "hex": "#797d7e",
   "category": "Gray",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Mint",
   "hex": "#c2e6dc",
   "category": "Green",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Morning Glory",
   "hex": "#435A9A",
   "category": "Blue",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Mystic",
   "hex": "#9fa4a9",
   "category": "Gray",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Oasis",
   "hex": "#00829a",
   "category": "Blue",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Pacific",
   "hex": "#1c83b1",
   "category": "Blue",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Parfait",
   "hex": "#fd9896",
   "category": "Pink",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Peacock",
   "hex": "#1b485d",
   "category": "Blue",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Persimmon",
   "hex": "#e23e22",
   "category": "Orange",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Petal",
   "hex": "#fadfd6",
   "category": "Pink",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Pewter",
   "hex": "#5c606a",
   "category": "Gray",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Plum",
   "hex": "#480040",
   "category": "Purple",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Pool",
   "hex": "#74c6d4",
   "category": "Blue",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Portobello",
   "hex": "#867477",
   "category": "Gray",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Punch",
   "hex": "#d9416a",
   "category": "Red",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Quartz",
   "hex": "#b39398",
   "category": "Pink",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Raspberry",
   "hex": "#852a77",
   "category": "Purple",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Regency",
   "hex": "#482f94",
   "category": "Purple",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Sangria",
   "hex": "#710b4c",
   "category": "Red",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Spa",
   "hex": "#81cdc9",
   "category": "Green",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Steel Blue",
   "hex": "#4F637A",
   "category": "Blue",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Sunbeam",
   "hex": "#ffe35b",
   "category": "Yellow",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Tangerine",
   "hex": "#f48a32",
   "category": "Orange",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Tarragon",
   "hex": "#413f37",
   "category": "Green",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Tickled",
   "hex": "#f9c3d0",
   "category": "Pink",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Truffle",
   "hex": "#483436",
   "category": "Brown",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Violetta",
   "hex": "#cec9db",
   "category": "Purple",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Watermelon",
   "hex": "#c53765",
   "category": "Red",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Wine",
   "hex": "#6a2541",
   "category": "Red",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Wined20",
   "hex": "#5e2b38",
   "category": "Red",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Wisteria",
   "hex": "#906d8e",
   "category": "Purple",
   "colorSet": "Davids Bridal"
 },
 {
   "colorName": "Azalea",
   "hex": "#e34d86",
   "category": "Pink",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Blue Jay",
   "hex": "#396ca1",
   "category": "Blue",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Blushing Pink",
   "hex": "#decbcc",
   "category": "Pink",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Brown",
   "hex": "#7c5d44",
   "category": "Brown",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Burgundy",
   "hex": "#822c3b",
   "category": "Red",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Cabernet",
   "hex": "#4b1623",
   "category": "Red",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Candy Pink",
   "hex": "#f3bad7",
   "category": "Pink",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Champagne",
   "hex": "#ccb69e",
   "category": "Brown",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Chocolate",
   "hex": "#4a332f",
   "category": "Brown",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Classic Champagne",
   "hex": "#ecdfd3",
   "category": "Brown",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Clover",
   "hex": "#909b4e",
   "category": "Green",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Coral",
   "hex": "#f8aaa5",
   "category": "Pink",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Daffodil",
   "hex": "#f6ebaf",
   "category": "Yellow",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Dark Green",
   "hex": "#385b52",
   "category": "Green",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Dark Navy",
   "hex": "#323a4b",
   "category": "Blue",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Dusk",
   "hex": "#947b83",
   "category": "Purple",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Dusty Blue",
   "hex": "#808c9d",
   "category": "Blue",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Dusty Rose",
   "hex": "#bd9999",
   "category": "Pink",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Dusty Sage",
   "hex": "#a6b8a3",
   "category": "Green",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Emerald",
   "hex": "#198464",
   "category": "Green",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Flamingo",
   "hex": "#db7e8d",
   "category": "Pink",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Frost",
   "hex": "#d3c9bd",
   "category": "Gray",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Fuchsia",
   "hex": "#b64174",
   "category": "Pink",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Garden Green",
   "hex": "#53844a",
   "category": "Green",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Gold",
   "hex": "#caa774",
   "category": "Yellow",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Grape",
   "hex": "#54324a",
   "category": "Purple",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Ink Blue",
   "hex": "#2c4c63",
   "category": "Blue",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Ivory",
   "hex": "#eeecea",
   "category": "Off White",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Jade",
   "hex": "#007d86",
   "category": "Green",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Jungle Green",
   "hex": "#005d64",
   "category": "Green",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Lavender",
   "hex": "#aab1d5",
   "category": "Purple",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Lemon",
   "hex": "#f4e28f",
   "category": "Yellow",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Lilac",
   "hex": "#bdb2d5",
   "category": "Purple",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Lime Green",
   "hex": "#97cd6f",
   "category": "Green",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Merigold",
   "hex": "#f1b460",
   "category": "Yellow",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Mint Green",
   "hex": "#bce3d0",
   "category": "Green",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Mist",
   "hex": "#b6c1c9",
   "category": "Blue",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Moss",
   "hex": "#596545",
   "category": "Green",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Mulberry",
   "hex": "#85384e",
   "category": "Red",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Ocean Blue",
   "hex": "#3d9bc4",
   "category": "Blue",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Orchid",
   "hex": "#833d5e",
   "category": "Purple",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Papaya",
   "hex": "#ed6c55",
   "category": "Orange",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Peach",
   "hex": "#edc9b5",
   "category": "Orange",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Peacock",
   "hex": "#1f4b59",
   "category": "Green",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Pearl Pink",
   "hex": "#e7c4b7",
   "category": "Pink",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Pool",
   "hex": "#4aa5c6",
   "category": "Blue",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Red",
   "hex": "#c22b36",
   "category": "Red",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Regency",
   "hex": "#4b3f67",
   "category": "Purple",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Royal Blue",
   "hex": "#3b4b86",
   "category": "Blue",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Rust",
   "hex": "#983532",
   "category": "Brown",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Sage",
   "hex": "#c3d2ac",
   "category": "Green",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Silver",
   "hex": "#9d9997",
   "category": "Gray",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Sky Blue",
   "hex": "#adcae3",
   "category": "Blue",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Spa",
   "hex": "#61aeb2",
   "category": "Blue",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Steel Grey",
   "hex": "#625e62",
   "category": "Gray",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Stormy",
   "hex": "#585669",
   "category": "Blue",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Sunset",
   "hex": "#f98974",
   "category": "Orange",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Tahiti",
   "hex": "#76608d",
   "category": "Purple",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Tangerine",
   "hex": "#ef7b53",
   "category": "Orange",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Taupe",
   "hex": "#aa968d",
   "category": "Brown",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Turquoise",
   "hex": "#58b0a5",
   "category": "Green",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Watermelon",
   "hex": "#e8737c",
   "category": "Red",
   "colorSet": "Azazie"
 },
 {
   "colorName": "Wisteria",
   "hex": "#a4829b",
   "category": "Purple",
   "colorSet": "Azazie"
 }

	];

	return colors;

});