const express = require('express');
const router = express.Router();
const models = require('../models/index.js');
const Burger = require('../models/burger.js');

// home page: grabs everything off of the database and displays it on the html with handlebars
router.get('/', function(req, res) {
	models.Burger.findAll({}).then(function(result) {
		res.render('index', {
			Burger: result
		});
	});
});

// post request that will put the new burgers into the database when they are submitted
router.post('/api/burgers', function(req, res) {
	models.Burger.create({
		burger_name:req.body.burger_name,
		devoured: false,
	});
});

// put request that will update the burgers devoured state from false to true
router.put('/api/burgers/:id', function(req, res) {
	const condition = "id = " + req.params.id;
  	console.log("condition", condition);
  	models.Burger.update({ 
  		devoured: true,
  	}, { where: { id: req.params.id }}).then(function(result) {
  		if (result.changedRows === 0) {
  			return res.status(404).end();
  		} else {
  			res.status(200).end();
  		}
  	});
});

module.exports = router;