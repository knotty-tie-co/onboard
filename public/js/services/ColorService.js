angular.module('ColorService', [])
	.factory('ColorService', function Profile() {

	var colors = this;

	colors.allColors = 
	[
	 {
	   "colorName": "Peony",
	   "hex": "#d0aec3",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Bell Heather",
	   "hex": "#b885a5",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Berry Slush",
	   "hex": "#a05c88",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Boysenberry",
	   "hex": "#88336a",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Mulberry",
	   "hex": "#710b4c",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Red Onion",
	   "hex": "#5c093e",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Shiraz",
	   "hex": "#470730",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Salmon",
	   "hex": "#f1697d",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Passion Fruit",
	   "hex": "#ee5071",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Poppy Pink",
	   "hex": "#ec3866",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Pitaya",
	   "hex": "#c62f55",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Pomegranate",
	   "hex": "#a02645",
	   "category": "Red"
	 },
	 {
	   "colorName": "Cranberry Sauce",
	   "hex": "#872039",
	   "category": "Red"
	 },
	 {
	   "colorName": "Maroon",
	   "hex": "#6e1a2e",
	   "category": "Red"
	 },
	 {
	   "colorName": "Rose",
	   "hex": "#ea93a2",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Lipstick",
	   "hex": "#df7786",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Petunia",
	   "hex": "#d55c6b",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Platelet",
	   "hex": "#d55c6b",
	   "category": "Red"
	 },
	 {
	   "colorName": "Redwood",
	   "hex": "#893b45",
	   "category": "Red"
	 },
	 {
	   "colorName": "Aduki",
	   "hex": "#703038",
	   "category": "Red"
	 },
	 {
	   "colorName": "Brick",
	   "hex": "#57262b",
	   "category": "Red"
	 },
	 {
	   "colorName": "Romance",
	   "hex": "#dd898b",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Rag Doll",
	   "hex": "#d56472",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Azalea",
	   "hex": "#ce4059",
	   "category": "Red"
	 },
	 {
	   "colorName": "Tamarillo",
	   "hex": "#a13346",
	   "category": "Red"
	 },
	 {
	   "colorName": "Ruby",
	   "hex": "#752633",
	   "category": "Red"
	 },
	 {
	   "colorName": "Radicchio",
	   "hex": "#5d1d29",
	   "category": "Red"
	 },
	 {
	   "colorName": "Burgundy",
	   "hex": "#45141f",
	   "category": "Red"
	 },
	 {
	   "colorName": "Cala Lily",
	   "hex": "#45141f",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Rare",
	   "hex": "#e0737b",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Zinnia",
	   "hex": "#dd616e",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Lychee",
	   "hex": "#da4762",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Tuplip",
	   "hex": "#d82e57",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Radish",
	   "hex": "#be274c",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Dorothy",
	   "hex": "#a52142",
	   "category": "Red"
	 },
	 {
	   "colorName": "Feldspar",
	   "hex": "#c88986",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Antique Pink",
	   "hex": "#c27b78",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Rosy Brown",
	   "hex": "#bc6e6b",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Redford",
	   "hex": "#b55e61",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Nantucket Red",
	   "hex": "#af4f57",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Red Clay",
	   "hex": "#99454b",
	   "category": "Red"
	 },
	 {
	   "colorName": "Heirloom",
	   "hex": "#843b40",
	   "category": "Red"
	 },
	 {
	   "colorName": "Flamingo",
	   "hex": "#f48081",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Fruit Punch",
	   "hex": "#ec636a",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Cosmo",
	   "hex": "#e44754",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Flannel",
	   "hex": "#bb3139",
	   "category": "Red"
	 },
	 {
	   "colorName": "Paprika",
	   "hex": "#931c1f",
	   "category": "Red"
	 },
	 {
	   "colorName": "Dahlia",
	   "hex": "#73181b",
	   "category": "Red"
	 },
	 {
	   "colorName": "Kimato",
	   "hex": "#541417",
	   "category": "Red"
	 },
	 {
	   "colorName": "Dogwood",
	   "hex": "#eca2a2",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Prawn",
	   "hex": "#e88181",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Watermelon",
	   "hex": "#e46161",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Red Herring",
	   "hex": "#d04747",
	   "category": "Red"
	 },
	 {
	   "colorName": "Scarlet",
	   "hex": "#bc2e2e",
	   "category": "Red"
	 },
	 {
	   "colorName": "Crab Shell",
	   "hex": "#962525",
	   "category": "Red"
	 },
	 {
	   "colorName": "Garnet",
	   "hex": "#701c1c",
	   "category": "Red"
	 },
	 {
	   "colorName": "Daquiri",
	   "hex": "#f9aa8e",
	   "category": "Orange"
	 },
	 {
	   "colorName": "Terracotta",
	   "hex": "#f58367",
	   "category": "Orange"
	 },
	 {
	   "colorName": "Pheonix",
	   "hex": "#f15c40",
	   "category": "Orange"
	 },
	 {
	   "colorName": "Hot Rod",
	   "hex": "#ee3c32",
	   "category": "Red"
	 },
	 {
	   "colorName": "Candy Apple",
	   "hex": "#ec1c24",
	   "category": "Red"
	 },
	 {
	   "colorName": "Postbox",
	   "hex": "#cc1e24",
	   "category": "Red"
	 },
	 {
	   "colorName": "Bing Cherry",
	   "hex": "#ac1f24",
	   "category": "Red"
	 },
	 {
	   "colorName": "Tiger Lily",
	   "hex": "#f4743b",
	   "category": "Orange"
	 },
	 {
	   "colorName": "Tangelo",
	   "hex": "#f05e33",
	   "category": "Orange"
	 },
	 {
	   "colorName": "Serrano",
	   "hex": "#ef4a24",
	   "category": "Orange"
	 },
	 {
	   "colorName": "Salsa",
	   "hex": "#d54325",
	   "category": "Orange"
	 },
	 {
	   "colorName": "Cinnamon",
	   "hex": "#bc3d26",
	   "category": "Orange"
	 },
	 {
	   "colorName": "Mars",
	   "hex": "#96311c",
	   "category": "Orange"
	 },
	 {
	   "colorName": "Nutmeg",
	   "hex": "#702612",
	   "category": "Orange"
	 },
	 {
	   "colorName": "Blossom",
	   "hex": "#f4c6be",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Marzipan",
	   "hex": "#f1b8af",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Warm Pink",
	   "hex": "#efaaa0",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Lip Balm",
	   "hex": "#ec9a90",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Piglet",
	   "hex": "#ea8b80",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Dawn",
	   "hex": "#e77d70",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Coral",
	   "hex": "#e47061",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Peach",
	   "hex": "#f6c1aa",
	   "category": "Orange"
	 },
	 {
	   "colorName": "Chai",
	   "hex": "#f1aa88",
	   "category": "Orange"
	 },
	 {
	   "colorName": "Apricot",
	   "hex": "#ec9366",
	   "category": "Orange"
	 },
	 {
	   "colorName": "Kumquat",
	   "hex": "#e98855",
	   "category": "Orange"
	 },
	 {
	   "colorName": "Carrot",
	   "hex": "#e77d45",
	   "category": "Orange"
	 },
	 {
	   "colorName": "Oolong",
	   "hex": "#cf6f3d",
	   "category": "Orange"
	 },
	 {
	   "colorName": "Amber",
	   "hex": "#b76136",
	   "category": "Orange"
	 },
	 {
	   "colorName": "Bandage",
	   "hex": "#d58b69",
	   "category": "Orange"
	 },
	 {
	   "colorName": "Sultana",
	   "hex": "#cc6c47",
	   "category": "Orange"
	 },
	 {
	   "colorName": "Pumpkin Spice",
	   "hex": "#c34d26",
	   "category": "Orange"
	 },
	 {
	   "colorName": "Chutney",
	   "hex": "#a94422",
	   "category": "Orange"
	 },
	 {
	   "colorName": "Yam",
	   "hex": "#903b1f",
	   "category": "Orange"
	 },
	 {
	   "colorName": "Date",
	   "hex": "#692b18",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Clove",
	   "hex": "#421c12",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Injera",
	   "hex": "#fce8dd",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Cheech",
	   "hex": "#fcd1c3",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Melon",
	   "hex": "#fbbea9",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Bosc",
	   "hex": "#dba694",
	   "category": "Orange"
	 },
	 {
	   "colorName": "Pinto",
	   "hex": "#bc8f7f",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Pluto",
	   "hex": "#9d776a",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Earthworm",
	   "hex": "#7e5f55",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Orange Cream",
	   "hex": "#f9b481",
	   "category": "Orange"
	 },
	 {
	   "colorName": "Sunrise",
	   "hex": "#f69e5f",
	   "category": "Orange"
	 },
	 {
	   "colorName": "Satsuma",
	   "hex": "#f4893d",
	   "category": "Orange"
	 },
	 {
	   "colorName": "Vulpes",
	   "hex": "#d17531",
	   "category": "Orange"
	 },
	 {
	   "colorName": "Caramel",
	   "hex": "#af6126",
	   "category": "Orange"
	 },
	 {
	   "colorName": "Apple Cider",
	   "hex": "#965321",
	   "category": "Orange"
	 },
	 {
	   "colorName": "Rust",
	   "hex": "#7d451c",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Lorikeet",
	   "hex": "#f9b975",
	   "category": "Orange"
	 },
	 {
	   "colorName": "Mango",
	   "hex": "#f6a448",
	   "category": "Orange"
	 },
	 {
	   "colorName": "Nectarine",
	   "hex": "#f4901c",
	   "category": "Orange"
	 },
	 {
	   "colorName": "Mead",
	   "hex": "#da8123",
	   "category": "Orange"
	 },
	 {
	   "colorName": "Topaz",
	   "hex": "#c17329",
	   "category": "Orange"
	 },
	 {
	   "colorName": "Pepernoot",
	   "hex": "#955e2a",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Curry Powder",
	   "hex": "#694a2b",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Honey",
	   "hex": "#ecc180",
	   "category": "Orange"
	 },
	 {
	   "colorName": "Taiblet",
	   "hex": "#e7ae54",
	   "category": "Orange"
	 },
	 {
	   "colorName": "Daffodil",
	   "hex": "#e29b29",
	   "category": "Orange"
	 },
	 {
	   "colorName": "Manila",
	   "hex": "#c68724",
	   "category": "Orange"
	 },
	 {
	   "colorName": "Brass",
	   "hex": "#aa731f",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Flaxseed",
	   "hex": "#8d6119",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Caraway",
	   "hex": "#704f14",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Mimosa",
	   "hex": "#ffd5a0",
	   "category": "Orange"
	 },
	 {
	   "colorName": "Garlic Bread",
	   "hex": "#fdc376",
	   "category": "Oraneg"
	 },
	 {
	   "colorName": "Cantaloupe",
	   "hex": "#fbb14d",
	   "category": "Orange"
	 },
	 {
	   "colorName": "Papaya",
	   "hex": "#faa934",
	   "category": "Orange"
	 },
	 {
	   "colorName": "Marmalade",
	   "hex": "#f9a21c",
	   "category": "Orange"
	 },
	 {
	   "colorName": "Tumeric",
	   "hex": "#df9123",
	   "category": "Orange"
	 },
	 {
	   "colorName": "Ocre",
	   "hex": "#c68129",
	   "category": "Orange"
	 },
	 {
	   "colorName": "Awaken",
	   "hex": "#f1ddc6",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Sesame",
	   "hex": "#e5cdaf",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Wheat",
	   "hex": "#dabe98",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Shortbread",
	   "hex": "#d5b286",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Toast",
	   "hex": "#d0a775",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Peanut Butter",
	   "hex": "#c99d64",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Bamboo",
	   "hex": "#c39354",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Goldenrod",
	   "hex": "#f9e79b",
	   "category": "Yellow"
	 },
	 {
	   "colorName": "Butter",
	   "hex": "#f6e083",
	   "category": "Yellow"
	 },
	 {
	   "colorName": "Ginger",
	   "hex": "#f4da6b",
	   "category": "Yellow"
	 },
	 {
	   "colorName": "Starfruit",
	   "hex": "#f1cd39",
	   "category": "Yellow"
	 },
	 {
	   "colorName": "Citrine",
	   "hex": "#efc108",
	   "category": "Yellow"
	 },
	 {
	   "colorName": "Butterscotch",
	   "hex": "#d0a806",
	   "category": "Yellow"
	 },
	 {
	   "colorName": "Mustard Seed",
	   "hex": "#b19005",
	   "category": "Yellow"
	 },
	 {
	   "colorName": "Banana",
	   "hex": "#fff9c6",
	   "category": "Yellow"
	 },
	 {
	   "colorName": "Pineapple Tidbits",
	   "hex": "#fff6aa",
	   "category": "Yellow"
	 },
	 {
	   "colorName": "Quiche",
	   "hex": "#fff48e",
	   "category": "Yellow"
	 },
	 {
	   "colorName": "Corn Flake",
	   "hex": "#f9e84a",
	   "category": "Yellow"
	 },
	 {
	   "colorName": "Sunflower",
	   "hex": "#f4dd06",
	   "category": "Yellow"
	 },
	 {
	   "colorName": "Dijon",
	   "hex": "#ccae0e",
	   "category": "Yellow"
	 },
	 {
	   "colorName": "Gold",
	   "hex": "#a58015",
	   "category": "Yellow"
	 },
	 {
	   "colorName": "Riesling",
	   "hex": "#fff7b8",
	   "category": "Yellow"
	 },
	 {
	   "colorName": "Sweet Vidalia",
	   "hex": "#ffee9c",
	   "category": "Yellow"
	 },
	 {
	   "colorName": "Creme Brulee",
	   "hex": "#ffe35b",
	   "category": "Yellow"
	 },
	 {
	   "colorName": "Ginko",
	   "hex": "#dfc64f",
	   "category": "Yellow"
	 },
	 {
	   "colorName": "Saturn",
	   "hex": "#bfaa44",
	   "category": "Yellow"
	 },
	 {
	   "colorName": "Durian",
	   "hex": "#9f8e39",
	   "category": "Yellow"
	 },
	 {
	   "colorName": "Cumin",
	   "hex": "#80722e",
	   "category": "Yellow"
	 },
	 {
	   "colorName": "Buttercream",
	   "hex": "#fff9ac",
	   "category": "Yellow"
	 },
	 {
	   "colorName": "Sticky Note",
	   "hex": "#fcf481",
	   "category": "Yellow"
	 },
	 {
	   "colorName": "Sunshine",
	   "hex": "#f9ef57",
	   "category": "Yellow"
	 },
	 {
	   "colorName": "Popsicle",
	   "hex": "#fcf02b",
	   "category": "Yellow"
	 },
	 {
	   "colorName": "Lemon Zest",
	   "hex": "#fff100",
	   "category": "Yellow"
	 },
	 {
	   "colorName": "Zuni",
	   "hex": "#e5d917",
	   "category": "Yellow"
	 },
	 {
	   "colorName": "Buttercup",
	   "hex": "#cbc12e",
	   "category": "Yellow"
	 },
	 {
	   "colorName": "Finn",
	   "hex": "#f4ecc3",
	   "category": "Yellow"
	 },
	 {
	   "colorName": "Quinoa",
	   "hex": "#f1e9b6",
	   "category": "Yellow"
	 },
	 {
	   "colorName": "Whipped Custard",
	   "hex": "#efe7aa",
	   "category": "Yellow"
	 },
	 {
	   "colorName": "Moscato",
	   "hex": "#ebe08f",
	   "category": "Yellow"
	 },
	 {
	   "colorName": "Pollen",
	   "hex": "#e7da75",
	   "category": "Yellow"
	 },
	 {
	   "colorName": "Bartlett",
	   "hex": "#cdc268",
	   "category": "Yellow"
	 },
	 {
	   "colorName": "Hazel",
	   "hex": "#b4aa5c",
	   "category": "Yellow"
	 },
	 {
	   "colorName": "Horseradish",
	   "hex": "#efe7be",
	   "category": "Yellow"
	 },
	 {
	   "colorName": "Honeygold",
	   "hex": "#e9de9f",
	   "category": "Yellow"
	 },
	 {
	   "colorName": "Meringue",
	   "hex": "#e4d581",
	   "category": "Yellow"
	 },
	 {
	   "colorName": "Endive",
	   "hex": "#dccb55",
	   "category": "Yellow"
	 },
	 {
	   "colorName": "Pomelo",
	   "hex": "#d5c129",
	   "category": "Yellow"
	 },
	 {
	   "colorName": "Jubilee",
	   "hex": "#bbaa2e",
	   "category": "Yellow"
	 },
	 {
	   "colorName": "Bergamot",
	   "hex": "#a29333",
	   "category": "Yellow"
	 },
	 {
	   "colorName": "Kiwi",
	   "hex": "#bece84",
	   "category": "Green"
	 },
	 {
	   "colorName": "Tomatillo",
	   "hex": "#abc160",
	   "category": "Green"
	 },
	 {
	   "colorName": "Sprout",
	   "hex": "#98b43d",
	   "category": "Green"
	 },
	 {
	   "colorName": "Leek",
	   "hex": "#849c3a",
	   "category": "Green"
	 },
	 {
	   "colorName": "Jade",
	   "hex": "#708438",
	   "category": "Green"
	 },
	 {
	   "colorName": "Pickle",
	   "hex": "#4f5e29",
	   "category": "Green"
	 },
	 {
	   "colorName": "Forest Trail",
	   "hex": "#2e381a",
	   "category": "Green"
	 },
	 {
	   "colorName": "Avocado",
	   "hex": "#beda95",
	   "category": "Green"
	 },
	 {
	   "colorName": "Granny Smith",
	   "hex": "#a7d174",
	   "category": "Green"
	 },
	 {
	   "colorName": "Key Lime",
	   "hex": "#90c854",
	   "category": "Green"
	 },
	 {
	   "colorName": "Asparagus",
	   "hex": "#7dae48",
	   "category": "Green"
	 },
	 {
	   "colorName": "Cilantro",
	   "hex": "#6b953d",
	   "category": "Green"
	 },
	 {
	   "colorName": "Bok Choy",
	   "hex": "#506f2f",
	   "category": "Green"
	 },
	 {
	   "colorName": "Olive",
	   "hex": "#364a21",
	   "category": "Green"
	 },
	 {
	   "colorName": "Peridot",
	   "hex": "#c8e2b9",
	   "category": "Green"
	 },
	 {
	   "colorName": "Celery",
	   "hex": "#a8bf96",
	   "category": "Green"
	 },
	 {
	   "colorName": "Cactus",
	   "hex": "#899d73",
	   "category": "Green"
	 },
	 {
	   "colorName": "Oregano",
	   "hex": "#6b8a55",
	   "category": "Green"
	 },
	 {
	   "colorName": "Matcha",
	   "hex": "#4d7838",
	   "category": "Green"
	 },
	 {
	   "colorName": "Pesto",
	   "hex": "#3d5e2c",
	   "category": "Green"
	 },
	 {
	   "colorName": "Dolma",
	   "hex": "#2e4521",
	   "category": "Green"
	 },
	 {
	   "colorName": "Gooseberry",
	   "hex": "#98d090",
	   "category": "Green"
	 },
	 {
	   "colorName": "Dill",
	   "hex": "#68ad69",
	   "category": "Green"
	 },
	 {
	   "colorName": "Ivy",
	   "hex": "#388b42",
	   "category": "Green"
	 },
	 {
	   "colorName": "Canopy",
	   "hex": "#307236",
	   "category": "Green"
	 },
	 {
	   "colorName": "Parsley",
	   "hex": "#29592b",
	   "category": "Green"
	 },
	 {
	   "colorName": "Zucchini",
	   "hex": "#1b441c",
	   "category": "Green"
	 },
	 {
	   "colorName": "Nori",
	   "hex": "#0d300d",
	   "category": "Green"
	 },
	 {
	   "colorName": "Willow",
	   "hex": "#c1dfbc",
	   "category": "Green"
	 },
	 {
	   "colorName": "Green Goddess",
	   "hex": "#93d0a3",
	   "category": "Green"
	 },
	 {
	   "colorName": "Dewy Grass",
	   "hex": "#66c18b",
	   "category": "Green"
	 },
	 {
	   "colorName": "Grove",
	   "hex": "#33b36e",
	   "category": "Green"
	 },
	 {
	   "colorName": "Shamrock",
	   "hex": "#00a552",
	   "category": "Green"
	 },
	 {
	   "colorName": "Chard",
	   "hex": "#008c46",
	   "category": "Green"
	 },
	 {
	   "colorName": "Spinach Leaf",
	   "hex": "#00733b",
	   "category": "Green"
	 },
	 {
	   "colorName": "Fennel",
	   "hex": "#81c8a7",
	   "category": "Green"
	 },
	 {
	   "colorName": "Mantis",
	   "hex": "#6abe99",
	   "category": "Green"
	 },
	 {
	   "colorName": "Lotus",
	   "hex": "#54b48b",
	   "category": "Green"
	 },
	 {
	   "colorName": "Fern",
	   "hex": "#3aa378",
	   "category": "Green"
	 },
	 {
	   "colorName": "Green Field",
	   "hex": "#219366",
	   "category": "Green"
	 },
	 {
	   "colorName": "Turf",
	   "hex": "#197750",
	   "category": "Green"
	 },
	 {
	   "colorName": "English Cucumber",
	   "hex": "#125c3b",
	   "category": "Green"
	 },
	 {
	   "colorName": "Pearl",
	   "hex": "#ecece7",
	   "category": "Off White"
	 },
	 {
	   "colorName": "Hellebores",
	   "hex": "#dee0d6",
	   "category": "Green"
	 },
	 {
	   "colorName": "Lentil",
	   "hex": "#d0d5c6",
	   "category": "Green"
	 },
	 {
	   "colorName": "Grasshopper",
	   "hex": "#c2c9b8",
	   "category": "Green"
	 },
	 {
	   "colorName": "Fog",
	   "hex": "#b4beaa",
	   "category": "Green"
	 },
	 {
	   "colorName": "Tillandsia",
	   "hex": "#9ca493",
	   "category": "Green"
	 },
	 {
	   "colorName": "Sage",
	   "hex": "#848b7d",
	   "category": "Green"
	 },
	 {
	   "colorName": "Dusty Miller",
	   "hex": "#cbd3cb",
	   "category": "Green"
	 },
	 {
	   "colorName": "Sisal",
	   "hex": "#bfcac1",
	   "category": "Green"
	 },
	 {
	   "colorName": "Moss",
	   "hex": "#b4c1b7",
	   "category": "Green"
	 },
	 {
	   "colorName": "Tarragon",
	   "hex": "#9fb3a5",
	   "category": "Green"
	 },
	 {
	   "colorName": "Artichoke",
	   "hex": "#8ba593",
	   "category": "Green"
	 },
	 {
	   "colorName": "Spruce",
	   "hex": "#768c7c",
	   "category": "Green"
	 },
	 {
	   "colorName": "Thyme",
	   "hex": "#617366",
	   "category": "Green"
	 },
	 {
	   "colorName": "Aloe Vera",
	   "hex": "#9dd3af",
	   "category": "Green"
	 },
	 {
	   "colorName": "Ingrid",
	   "hex": "#7ac79a",
	   "category": "Green"
	 },
	 {
	   "colorName": "Lilypad",
	   "hex": "#57bc86",
	   "category": "Green"
	 },
	 {
	   "colorName": "Killarney",
	   "hex": "#3ba26f",
	   "category": "Green"
	 },
	 {
	   "colorName": "Kelly",
	   "hex": "#1f8959",
	   "category": "Green"
	 },
	 {
	   "colorName": "Jalepeno",
	   "hex": "#197048",
	   "category": "Green"
	 },
	 {
	   "colorName": "Emerald",
	   "hex": "#145738",
	   "category": "Green"
	 },
	 {
	   "colorName": "Cottonball",
	   "hex": "#e8eae9",
	   "category": "Off White"
	 },
	 {
	   "colorName": "Spanish Moss",
	   "hex": "#d1d5d3",
	   "category": "Green"
	 },
	 {
	   "colorName": "Norbert",
	   "hex": "#bac1be",
	   "category": "Green"
	 },
	 {
	   "colorName": "Dragon",
	   "hex": "#a3aca8",
	   "category": "Green"
	 },
	 {
	   "colorName": "Beetle",
	   "hex": "#8b9792",
	   "category": "Green"
	 },
	 {
	   "colorName": "Bog",
	   "hex": "#5d6e67",
	   "category": "Green"
	 },
	 {
	   "colorName": "Cypres",
	   "hex": "#2f443b",
	   "category": "Green"
	 },
	 {
	   "colorName": "Succulent",
	   "hex": "#86d0c6",
	   "category": "Green"
	 },
	 {
	   "colorName": "Sea Spray",
	   "hex": "#57b2a6",
	   "category": "Green"
	 },
	 {
	   "colorName": "Celeadon",
	   "hex": "#299080",
	   "category": "Green"
	 },
	 {
	   "colorName": "Alexandrite",
	   "hex": "#22776a",
	   "category": "Green"
	 },
	 {
	   "colorName": "Rosemary",
	   "hex": "#1c5e54",
	   "category": "Green"
	 },
	 {
	   "colorName": "Algae",
	   "hex": "#0e5146",
	   "category": "Green"
	 },
	 {
	   "colorName": "Mallard",
	   "hex": "#004538",
	   "category": "Green"
	 },
	 {
	   "colorName": "Aquamarine",
	   "hex": "#8bd3df",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Wrasse",
	   "hex": "#49c8d7",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Sky Above",
	   "hex": "#08bed0",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Caribbean",
	   "hex": "#05a6b6",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Faded Turquoise",
	   "hex": "#038e9d",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Cheyenne",
	   "hex": "#046c78",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Ultramarine",
	   "hex": "#054a54",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Newport",
	   "hex": "#aad5dd",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Forget Me Nots",
	   "hex": "#71b9c7",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Surf",
	   "hex": "#399eb0",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Teal",
	   "hex": "#00829a",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Dungaree",
	   "hex": "#026c7f",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Bay",
	   "hex": "#045764",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Poseidon",
	   "hex": "#064149",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Bubble",
	   "hex": "#c6e2ea",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Ice Rink",
	   "hex": "#b9dbe6",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Lake Blue",
	   "hex": "#acd5e2",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Uranus",
	   "hex": "#92cbda",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Elsa",
	   "hex": "#78c1d3",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Blue Agave",
	   "hex": "#6aaab9",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Liberty",
	   "hex": "#5c93a0",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Raindrop",
	   "hex": "#90c6dd",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Hoopty",
	   "hex": "#48b3d4",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Fjord",
	   "hex": "#00a0cb",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Faience",
	   "hex": "#0083a5",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Atlantic",
	   "hex": "#006680",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Galapago",
	   "hex": "#005166",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Abyss",
	   "hex": "#003d4d",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Tweedia",
	   "hex": "#b4d0e7",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Frost Flower",
	   "hex": "#98bbdf",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Blue Moon",
	   "hex": "#7da7d8",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Bluejay",
	   "hex": "#4384b4",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Azul",
	   "hex": "#0a6190",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Pablo",
	   "hex": "#06476a",
	   "category": "Blue"
	 },
	 {
	   "colorName": "High Tide",
	   "hex": "#032e45",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Blue Steel",
	   "hex": "#8b95aa",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Birdbill",
	   "hex": "#77849a",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Washed Denim",
	   "hex": "#63748a",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Emerson",
	   "hex": "#4f637a",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Cheshire",
	   "hex": "#3f5064",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Storm",
	   "hex": "#2f3c4e",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Cassowary",
	   "hex": "#1f2938",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Morning Glory",
	   "hex": "#70a2dd",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Azure",
	   "hex": "#558fca",
	   "category": "Blue"
	 },
	 {
	   "colorName": "French Blue",
	   "hex": "#3b7db7",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Blue Raspberry",
	   "hex": "#2663a5",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Cobalt",
	   "hex": "#124a93",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Callbox",
	   "hex": "#0d3e7b",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Sapphire",
	   "hex": "#083363",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Icicle",
	   "hex": "#d8d8e4",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Glaucous",
	   "hex": "#b8bdd1",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Blue Dust",
	   "hex": "#98a2be",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Ceres",
	   "hex": "#7d8daf",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Polynya",
	   "hex": "#6378a0",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Weatherglass",
	   "hex": "#506ca5",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Cornflower",
	   "hex": "#3d61aa",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Crystal",
	   "hex": "#e2e4ec",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Eris",
	   "hex": "#d9dce7",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Mist",
	   "hex": "#d0d5e2",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Elati",
	   "hex": "#c4cde3",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Iceberg",
	   "hex": "#b9c6e4",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Surfboard",
	   "hex": "#a6b8de",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Powder Blue",
	   "hex": "#a6b8de",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Baby Blue",
	   "hex": "#acb9dd",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Blair",
	   "hex": "#8a9fd0",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Serenity",
	   "hex": "#6986c3",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Vourdon",
	   "hex": "#4569a6",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Patriot",
	   "hex": "#214d89",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Blue Maize",
	   "hex": "#183763",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Thames",
	   "hex": "#0f213d",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Periwinkle",
	   "hex": "#b0bad5",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Blizzard",
	   "hex": "#7d8abe",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Delphinium",
	   "hex": "#4a5aa7",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Neptune",
	   "hex": "#3a468f",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Blueberry",
	   "hex": "#2a3378",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Blue Ink",
	   "hex": "#20285e",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Navy",
	   "hex": "#171d45",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Hera",
	   "hex": "#b9aee5",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Hydrangea",
	   "hex": "#9687d9",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Winston",
	   "hex": "#7461ce",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Poppins",
	   "hex": "#5845af",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Drama",
	   "hex": "#3c2a91",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Indigo",
	   "hex": "#2c1d64",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Empress",
	   "hex": "#1d1038",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Sophia",
	   "hex": "#9d86c3",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Mountains",
	   "hex": "#8d71b5",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Poison",
	   "hex": "#7d5ca7",
	   "category": "Purple"
	 },
	 {
	   "colorName": "People Eater",
	   "hex": "#6c4599",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Violet",
	   "hex": "#5c2e8b",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Black Currant",
	   "hex": "#47246c",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Queen",
	   "hex": "#331a4d",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Lavender",
	   "hex": "#b2adc0",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Venus",
	   "hex": "#a69fb5",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Dusty Violet",
	   "hex": "#9992ab",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Marie",
	   "hex": "#8c84a0",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Cardigan",
	   "hex": "#7b748c",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Aphrodite",
	   "hex": "#696378",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Elderberry",
	   "hex": "#696378",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Allium",
	   "hex": "#b48ec1",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Jasmine",
	   "hex": "#a77bb6",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Lily",
	   "hex": "#9b69ac",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Verbena",
	   "hex": "#8e57a2",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Orchid",
	   "hex": "#814598",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Jelly",
	   "hex": "#713c85",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Amethyst",
	   "hex": "#613373",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Mauve",
	   "hex": "#a7869d",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Turnip",
	   "hex": "#936d88",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Foxglove",
	   "hex": "#805473",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Hecate",
	   "hex": "#734b67",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Vineyard",
	   "hex": "#66425c",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Kyoho",
	   "hex": "#593a50",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Fig",
	   "hex": "#4d3345",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Ophelia",
	   "hex": "#d88ebe",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Redbud",
	   "hex": "#b65f9f",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Iris",
	   "hex": "#953081",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Black Cherry Gelato",
	   "hex": "#7c286a",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Thistle",
	   "hex": "#632154",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Beetroot",
	   "hex": "#511a47",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Aubergine",
	   "hex": "#40143b",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Afternoon Tea",
	   "hex": "#ecd8ec",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Bikini",
	   "hex": "#e0cce2",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Kunzite",
	   "hex": "#d5c1d8",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Catmint",
	   "hex": "#d0b5d3",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Lilac",
	   "hex": "#cbaace",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Bellflower",
	   "hex": "#bf95c2",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Duchess",
	   "hex": "#b481b7",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Clematis",
	   "hex": "#ddbec8",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Fantasia",
	   "hex": "#d6b0be",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Ranunculus",
	   "hex": "#d0a2b4",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Smooch",
	   "hex": "#c689a1",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Deep Pink",
	   "hex": "#bc708e",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Rutabaga",
	   "hex": "#a2627b",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Rhubarb",
	   "hex": "#895469",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Sweet Pea",
	   "hex": "#f6d8e7",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Candy Heary",
	   "hex": "#f2c6dd",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Begonia",
	   "hex": "#efb4d3",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Rock Candy",
	   "hex": "#e993bf",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Piggy Bank",
	   "hex": "#e473ac",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Confetti",
	   "hex": "#e15ea2",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Princess",
	   "hex": "#df4a98",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Cherry Blossom",
	   "hex": "#f6dae4",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Ceviche",
	   "hex": "#f8d1dc",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Carnation",
	   "hex": "#f9c8d5",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Snow Cone",
	   "hex": "#f6b7cb",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Bubblegum",
	   "hex": "#f4a7c1",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Jellybean",
	   "hex": "#f182a7",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Rosette",
	   "hex": "#ef5e8e",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Astilbe",
	   "hex": "#e7a7b7",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Denise",
	   "hex": "#e494a9",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Eraser",
	   "hex": "#e2819b",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Happy Heart",
	   "hex": "#de6d8e",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Strawberry",
	   "hex": "#da5981",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Hibiscus",
	   "hex": "#d63977",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Magenta",
	   "hex": "#d31a6e",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Puffball",
	   "hex": "#fbddda",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Pastel Pink",
	   "hex": "#facccc",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Baby Pink",
	   "hex": "#f9bcbe",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Starfish",
	   "hex": "#f59ea4",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Pixie",
	   "hex": "#f1818b",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Lollipop",
	   "hex": "#f17181",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Grapefruit",
	   "hex": "#f16178",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Lace",
	   "hex": "#efd1ce",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Macaron",
	   "hex": "#ecc8c4",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Himalayan Salt",
	   "hex": "#e9bfba",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Taffy",
	   "hex": "#e3aba5",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Rouge",
	   "hex": "#dc9890",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Seahorse",
	   "hex": "#d88c84",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Sphynx",
	   "hex": "#bd7b74",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Flushed",
	   "hex": "#ecd5d8",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Louise",
	   "hex": "#e9cdd0",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Enchanted",
	   "hex": "#e7c6c8",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Macrame",
	   "hex": "#e3bdc0",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Raggiana",
	   "hex": "#dfb4b9",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Pinch",
	   "hex": "#dbacb1",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Vintage Pink",
	   "hex": "#d8a5aa",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Peek A' Boo",
	   "hex": "#f6eff1",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Taboo",
	   "hex": "#f0e3e9",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Pink Frosting",
	   "hex": "#ead8e2",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Noreen",
	   "hex": "#e8d3de",
	   "category": "Pink"
	 },
	 {
	   "colorName": "J' Adore",
	   "hex": "#e7ceda",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Merry",
	   "hex": "#e0c5d4",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Calibrachoa",
	   "hex": "#dabcce",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Cassiopeia",
	   "hex": "#f6ecef",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Teaspoon",
	   "hex": "#f5e9ec",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Slipper",
	   "hex": "#f4e7ea",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Knit",
	   "hex": "#f2e3e6",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Satin Pink",
	   "hex": "#f1dfe2",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Tit for Tat",
	   "hex": "#f0dbdf",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Cotton Candy",
	   "hex": "#efd8dd",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Rosewater",
	   "hex": "#f4e4e7",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Elizabeth",
	   "hex": "#f2dfe2",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Fritillary",
	   "hex": "#f1dadd",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Andersen",
	   "hex": "#f0d5d8",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Shy Pink",
	   "hex": "#efd0d3",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Smoothie",
	   "hex": "#edcbcf",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Tea Rose",
	   "hex": "#ecc6cb",
	   "category": "Pink"
	 },
	 {
	   "colorName": "Ivory",
	   "hex": "#f6f4ef",
	   "category": "Off White"
	 },
	 {
	   "colorName": "Gin Fizz",
	   "hex": "#f1ede4",
	   "category": "Off White"
	 },
	 {
	   "colorName": "Canvas",
	   "hex": "#ece7da",
	   "category": "Off White"
	 },
	 {
	   "colorName": "Jicama",
	   "hex": "#e8e2d1",
	   "category": "Off White"
	 },
	 {
	   "colorName": "Champagne",
	   "hex": "#e4ddc8",
	   "category": "Off White"
	 },
	 {
	   "colorName": "Breadcrumb",
	   "hex": "#dcd2bb",
	   "category": "Off White"
	 },
	 {
	   "colorName": "Pita",
	   "hex": "#d5c8af",
	   "category": "Off White"
	 },
	 {
	   "colorName": "Sand",
	   "hex": "#f1e7dd",
	   "category": "Off White"
	 },
	 {
	   "colorName": "Oat",
	   "hex": "#e7d6c6",
	   "category": "Off White"
	 },
	 {
	   "colorName": "Trenchcoat",
	   "hex": "#ddc6af",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Pine Nut",
	   "hex": "3d4b59a",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Tuscany",
	   "hex": "#cba586",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Crimini",
	   "hex": "#ba9c83",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Crumble",
	   "hex": "#aa9380",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Marble",
	   "hex": "#efefec",
	   "category": "Off White"
	 },
	 {
	   "colorName": "Jupiter",
	   "hex": "#e2e3e0",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Earl Grey",
	   "hex": "#d5d8d5",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Hermes",
	   "hex": "#c9cdcb",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Koala",
	   "hex": "#bec3c1",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Overcast",
	   "hex": "#afb4b3",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Husky",
	   "hex": "#a0a5a5",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Dolemite",
	   "hex": "#efefed",
	   "category": "Off White"
	 },
	 {
	   "colorName": "Fondant",
	   "hex": "#dededa",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Cairn",
	   "hex": "#cecec8",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Weimaraner",
	   "hex": "#bfbeb7",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Griege",
	   "hex": "#afaea5",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Haumea",
	   "hex": "#9e9d92",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Shiitake",
	   "hex": "#8e8d80",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Rice",
	   "hex": "#efece7",
	   "category": "Off White"
	 },
	 {
	   "colorName": "Crochet",
	   "hex": "#e2ded7",
	   "category": "Off White"
	 },
	 {
	   "colorName": "Bulgar",
	   "hex": "#d5d0c8",
	   "category": "Off White"
	 },
	 {
	   "colorName": "Mercury",
	   "hex": "#c9c3ba",
	   "category": "Off White"
	 },
	 {
	   "colorName": "Fawn",
	   "hex": "#beb7ac",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Dusty Violet",
	   "hex": "#b0aaa2",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Granite",
	   "hex": "#a29d98",
	   "category": "Gray"
	 },
	 {
	   "colorName": "On the Rocks",
	   "hex": "#d7d1d2",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Charlotte's Web",
	   "hex": "#c2b9bb",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Seal",
	   "hex": "#aea2a4",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Shallot",
	   "hex": "#9a8b8d",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Cottage",
	   "hex": "#867477",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Hippopotamus",
	   "hex": "#6d5e60",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Raisin",
	   "hex": "#54494a",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Elephant",
	   "hex": "#a1a89e",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Pigeon",
	   "hex": "#8d938a",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Sloth",
	   "hex": "#797e77",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Wolfpack",
	   "hex": "#656963",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Racoon",
	   "hex": "#51544f",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Ice Box",
	   "hex": "#3c3f3b",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Vulture",
	   "hex": "#282a28",
	   "category": "Black"
	 },
	 {
	   "colorName": "Beluga",
	   "hex": "#d5d3d5",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Polly",
	   "hex": "#b6b5b9",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Lithonia",
	   "hex": "#98989d",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Wooly Scarf",
	   "hex": "#7f8388",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Steel Rail",
	   "hex": "#666e73",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Boulder",
	   "hex": "#505559",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Tephra",
	   "hex": "#3b3d40",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Smoke",
	   "hex": "#b4b4b4",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Office",
	   "hex": "#989898",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Graphite",
	   "hex": "#7d7d7d",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Ram",
	   "hex": "#555454",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Charcoal",
	   "hex": "#2d2c2c",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Carbon",
	   "hex": "#161616",
	   "category": "Black"
	 },
	 {
	   "colorName": "Black",
	   "hex": "#000000",
	   "category": "Black"
	 },
	 {
	   "colorName": "Fossil",
	   "hex": "#c1bcb9",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Taupe",
	   "hex": "#aaa39f",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Cobblestone",
	   "hex": "#938b86",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Urban Loft",
	   "hex": "#706661",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Smoky Quartz",
	   "hex": "#4d423d",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Stout",
	   "hex": "#3e342f",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Espresso",
	   "hex": "#302621",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Gravel",
	   "hex": "#70706e",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Chow-Chow",
	   "hex": "#5f615e",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Lead",
	   "hex": "#4f524f",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Hibo",
	   "hex": "#3f4543",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Meteorite",
	   "hex": "#303838",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Galaxy",
	   "hex": "#2a302f",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Obsidian",
	   "hex": "#242926",
	   "category": "Black"
	 },
	 {
	   "colorName": "Russian Blue",
	   "hex": "#848186",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Spooky",
	   "hex": "#6e6c71",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Ground Pepper",
	   "hex": "#59575c",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Soapstone",
	   "hex": "#43434a",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Slate Gray",
	   "hex": "#2e3038",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Licorice",
	   "hex": "#20232b",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Midnight",
	   "hex": "#12171f",
	   "category": "Black"
	 },
	 {
	   "colorName": "Aluminum",
	   "hex": "#959393",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Haunt",
	   "hex": "#82807f",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Dim",
	   "hex": "#706e6b",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Iron",
	   "hex": "#615e5d",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Engine",
	   "hex": "#524f4f",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Twilight",
	   "hex": "#444242",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Onyx",
	   "hex": "#363636",
	   "category": "Gray"
	 },
	 {
	   "colorName": "Stoneware",
	   "hex": "#988e8e",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Boot",
	   "hex": "#857b7a",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Mouning Dove",
	   "hex": "#736966",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Seed",
	   "hex": "#635856",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Tabby",
	   "hex": "#544747",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Pryce",
	   "hex": "#463a3a",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Soil",
	   "hex": "#382e2e",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Chocolate Malt",
	   "hex": "#ac9389",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Buckwheat",
	   "hex": "#9d8075",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Walnut",
	   "hex": "#8e6e61",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Plateau",
	   "hex": "#805d50",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Maple",
	   "hex": "#734d40",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Mahogany",
	   "hex": "#673e33",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Xocolatl",
	   "hex": "#5c3026",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Farro",
	   "hex": "#a7988e",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Pug",
	   "hex": "#96857a",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Tiramisu",
	   "hex": "#867366",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Hazelnut",
	   "hex": "#786355",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Pecan",
	   "hex": "#6b5445",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Fudge",
	   "hex": "#5e4738",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Oak",
	   "hex": "#523b2b",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Ash",
	   "hex": "#b9afa5",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Quicksand",
	   "hex": "#ad9f94",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Soba",
	   "hex": "#a29084",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Cardboard",
	   "hex": "#958476",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Teak",
	   "hex": "#897869",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Parcel",
	   "hex": "#7f6d5d",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Sepia",
	   "hex": "#756352",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Almond",
	   "hex": "#dfd0c3",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Eclair",
	   "hex": "#d5bfad",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Birch",
	   "hex": "#cbaf98",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Miso",
	   "hex": "#b89376",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Canyon",
	   "hex": "#a57854",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Iced Tea",
	   "hex": "#9d6c45",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Copper Penny",
	   "hex": "#956136",
	   "category": "Brown"
	 },
	 {
	   "colorName": "Vanilla",
	   "hex": "#f9f6ef",
	   "category": "Off White"
	 },
	 {
	   "colorName": "Tofu",
	   "hex": "#f8f2e6",
	   "category": "Off White"
	 },
	 {
	   "colorName": "Macadamia",
	   "hex": "#f7eddd",
	   "category": "Off White"
	 },
	 {
	   "colorName": "Garbanzo",
	   "hex": "#f5e9d4",
	   "category": "Off White"
	 },
	 {
	   "colorName": "Cashew",
	   "hex": "#f4e4cb",
	   "category": "Off White"
	 },
	 {
	   "colorName": "Dune",
	   "hex": "#d9cab3",
	   "category": "Off White"
	 },
	 {
	   "colorName": "Elm",
	   "hex": "#beb19b",
	   "category": "Off White"
	 },
	 {
	   "colorName": "Gardenia",
	   "hex": "#fcf5e8",
	   "category": "Off White"
	 },
	 {
	   "colorName": "Rhea",
	   "hex": "#fdf1de",
	   "category": "Off White"
	 },
	 {
	   "colorName": "Sandal",
	   "hex": "#fdecd4",
	   "category": "Off White"
	 },
	 {
	   "colorName": "Sponge Cake",
	   "hex": "#fee8ca",
	   "category": "Orange"
	 },
	 {
	   "colorName": "Garlic",
	   "hex": "#fee4bf",
	   "category": "Orange"
	 },
	 {
	   "colorName": "Biscuit",
	   "hex": "#fedfb5",
	   "category": "Orange"
	 },
	 {
	   "colorName": "Peach Sorbet",
	   "hex": "#ffdbab",
	   "category": "Orange"
	 },
	 {
	   "colorName": "Cameo",
	   "hex": "#fbfff4",
	   "category": "Green"
	 },
	 {
	   "colorName": "Crescent",
	   "hex": "#f9fbec",
	   "category": "Green"
	 },
	 {
	   "colorName": "Honeydew",
	   "hex": "#f6fbe2",
	   "category": "Green"
	 },
	 {
	   "colorName": "Lemongrass",
	   "hex": "#f4f9da",
	   "category": "Green"
	 },
	 {
	   "colorName": "Spring",
	   "hex": "#edf5b9",
	   "category": "Green"
	 },
	 {
	   "colorName": "Pistachio",
	   "hex": "#e6f198",
	   "category": "Green"
	 },
	 {
	   "colorName": "Noni",
	   "hex": "#dfed77",
	   "category": "Green"
	 },
	 {
	   "colorName": "Aspen",
	   "hex": "#f6f6f4",
	   "category": "Off White"
	 },
	 {
	   "colorName": "Crepe",
	   "hex": "#f4f4ef",
	   "category": "Off White"
	 },
	 {
	   "colorName": "Mirin",
	   "hex": "#f0f0e8",
	   "category": "Off White"
	 },
	 {
	   "colorName": "Euporie",
	   "hex": "#f0f0dd",
	   "category": "Off White"
	 },
	 {
	   "colorName": "Nix",
	   "hex": "#f4f4d8",
	   "category": "Off White"
	 },
	 {
	   "colorName": "Chilled Pear",
	   "hex": "#f0f0cb",
	   "category": "Off White"
	 },
	 {
	   "colorName": "Soybean",
	   "hex": "#ececbf",
	   "category": "Off White"
	 },
	 {
	   "colorName": "Dublin",
	   "hex": "#f1faf4",
	   "category": "Green"
	 },
	 {
	   "colorName": "Mojito",
	   "hex": "#e8f7ee",
	   "category": "Green"
	 },
	 {
	   "colorName": "Limeade",
	   "hex": "#e0f5e7",
	   "category": "Green"
	 },
	 {
	   "colorName": "Spider Mum",
	   "hex": "#d8f2e1",
	   "category": "Green"
	 },
	 {
	   "colorName": "Nana",
	   "hex": "#cfefdb",
	   "category": "Green"
	 },
	 {
	   "colorName": "Mint",
	   "hex": "#c7edd4",
	   "category": "Green"
	 },
	 {
	   "colorName": "Daylily",
	   "hex": "#beeace",
	   "category": "Green"
	 },
	 {
	   "colorName": "Pillow Mint",
	   "hex": "#f1faf9",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Cressida",
	   "hex": "#eaf8f6",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Blanche",
	   "hex": "#e3f6f3",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Seashell",
	   "hex": "#ddf3f0",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Artemis",
	   "hex": "#cfefea",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Spearmint",
	   "hex": "#c8ece7",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Wisp",
	   "hex": "#c1eae4",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Tundra",
	   "hex": "#f7fdfd",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Tonic",
	   "hex": "#f1fbfa",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Orion",
	   "hex": "#eaf9f8",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Janice",
	   "hex": "#e3f7f6",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Breeze",
	   "hex": "#dcf5f4",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Peppermint",
	   "hex": "#cef1f0",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Sedna",
	   "hex": "#c1e9ea",
	   "category": "Blue"
	 },
	 {
	   "colorName": "Andromeda",
	   "hex": "#f1ecf4",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Pheobe",
	   "hex": "#efeaf4",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Sugar Plum",
	   "hex": "#e5dfec",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Frosted Petal",
	   "hex": "#dcd5e3",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Mallory",
	   "hex": "#d2cadb",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Timewarp",
	   "hex": "#bda6c0",
	   "category": "Purple"
	 },
	 {
	   "colorName": "Monkshood",
	   "hex": "#a882a6",
	   "category": "Purple"
	 }
	];

	return colors;

});