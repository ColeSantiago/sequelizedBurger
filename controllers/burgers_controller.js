const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

// home page: grabs everything off of the database and displays it on the html with handlebars
router.get('/', function(req, res) {
	burger.selectAll(function(data) {
		const burgersObject = {
			burgers: data
		};
		console.log(burgersObject);
    	res.render('index', burgersObject);
	});
});

// post request that will put the new burgers into the database when they are submitted
router.post('/api/burgers', function(req, res) {
	burger.insertOne(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], function(result) {
		res.json({ id: result.insertId });
	});
});

// put request that will update the burgers devoured state from false to true
router.put('/api/burgers/:id', function(req, res) {
	const condition = "id = " + req.params.id;
  	console.log("condition", condition);
  	burger.updateOne({ devoured: req.body.devoured }, condition, function(result) {
  		if (result.changedRows === 0) {
  			return res.status(404).end();
  		} else {
  			res.status(200).end();
  		}
  	});
});

module.exports = router;