var Deal = require('./models/Deal.js');
var Proof = require('./models/Proof.js');
var DesignRequest = require('./models/DesignRequest.js');

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

		//Design Requests API -------------------------------------------------


		    /* POST /design-requests */
		    app.post('/api/design-requests', function(req, res, next) {
		      DesignRequest.create(req.body, function (err, designRequest) {
		        if (err) return next(err);
		        res.json(designRequest);
		      });
		    });

		    /* PUT /design-requests:id */
		    app.put('/api/design-requests/:id', function(req, res, next) {
		      DesignRequest.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, post) {
		        if (err) return next(err);
		        res.json(post);
		      });
		    });

		    /* GET /design-requests:id */
		    app.get('/api/design-requests/:id', function(req, res) {
		        // use mongoose to get all songs in the database
		        DesignRequest.findById(req.params.id, function(err, designRequest) {
		            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
		            if (err)
		            	res.send(err);
		            res.json(designRequest);
		        });
		    });

		    /* GET /design-requests */
		    app.get('/api/design-requests', function(req, res){
				DesignRequest.findOne(req.query, function(error, designRequests){
		            res.send(designRequests);
		        });
		    });

		//DEALS API ------------------------------------------------------------
		    // get all deals
		    app.get('/api/deals', function(req, res) {
		        // use mongoose to get all songs in the database
		        Deal.find(function(err, deals) {
		            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
		            if (err)
		            	res.send(err);
		            res.json(deals); // return all songs in JSON format
		        });
		    });

		    // get one deal by id
		    app.get('/api/deal/:id', function(req, res) {
		        // use mongoose to get all songs in the database
		        Deal.findById(req.params.id, function(err, deal) {
		            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
		            if (err)
		            	res.send(err);
		            res.json(deal);
		            console.log(deal); // return all songs in JSON format
		        });
		        console.log(deal);
		    });

		    // create song and send back all songs after creation
		    app.post('/api/deals', function(req, res) {

		        // create a songs, information comes from AJAX request from Angular
		        Deal.create({
		        	designer : req.body.designer,
		        	client : {
		        		fName : req.body.fName,
		        		lName: req.body.lName},
		        		dealID: req.body.dealID,
		        		pipeline: req.body.pipeline,
		        		created: req.body.created
		        	}, function(err, todo) {
		        		if (err)
		        			res.send(err);

		            // get and return all the songs after you create another
		            Deal.find(function(err, deals) {
		            	if (err)
		            		res.send(err);
		            	res.json(deals);
		            });
		        });

		    });

		    

		    //PROOFS API ------------------------------------------------------------
		        // get all proofs
		        app.get('/api/proofs', function(req, res) {
		            // use mongoose to get all songs in the database
		            Proof.find(function(err, proofs) {
		                // if there is an error retrieving, send the error. nothing after res.send(err) will execute
		                if (err)
		                	res.send(err);
		                res.json(proofs); // return all songs in JSON format
		            });
		        });

		        // get one proof by id
		        app.get('/api/proof/:id', function(req, res) {
		            // use mongoose to get all songs in the database
		            Proof.findById(req.params.id, function(err, proof) {
		                // if there is an error retrieving, send the error. nothing after res.send(err) will execute
		                if (err)
		                	res.send(err);
		                res.json(proof);
		                console.log(proof);
		            });
		        });

		        // get proofs by parent deal id
		        app.get('/api/proof-by-deal/:dealID', function(req, res) {
		            // use mongoose to get all songs in the database
		            Proof.find({'deal' : req.params.dealID}, function(err, proofs) {
		                // if there is an error retrieving, send the error. nothing after res.send(err) will execute
		                if (err)
		                	res.send(err);
		                res.json(proofs);
		                 // return all songs in JSON format
		             });
		        });

		        // create song and send back all songs after creation
		        app.post('/api/proofs', function(req, res) {

		            // create a songs, information comes from AJAX request from Angular
		            Proof.create({
		            	image: req.body.image,
		            	deal: req.body.deal
		            }, function(err, todo) {
		            	if (err)
		            		res.send(err);

		                // get and return all the songs after you create another
		                Proof.find(function(err, proofs) {
		                	if (err)
		                		res.send(err);
		                	res.json(proofs);
		                });
		            });

		        });

		        app.put('/api/proofs/:id', function (req, res) {
		          var proofID = req.params.id;
		          var update = req.body;
		          Proof.findOneAndUpdate({_id: proofID}, update, function(err, proof){
		            if (err) { return console.log("create error: " + err); }
		            res.json(proof);
		          });
		        });

		        // app.put('/api/proofs/:id', function(req, res) {

		        //     // create a songs, information comes from AJAX request from Angular
		        //     console.log("response " + req.body.response);
		        //     Proof.update(
		            	
		        //     req.body, function(err, todo) {
		        //     	if (err)
		        //     		res.send(err);
		        //     	else{

		        //         // get and return all the songs after you create another
		        //         Proof.find(function(err, proofs) {
		        //         	if (err)
		        //         		res.send(err);
		        //         	else
		        //         	res.json(proofs);
		        //         });}
		        //     });

		        // });

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};