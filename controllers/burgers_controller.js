const express = require('express');
const router = express.Router();
const models = require('../models/index.js');
let sequelizeConnection = models.sequelize;
sequelizeConnection.sync();

// home page: grabs everything off of the database and displays it on the html with handlebars
router.get('/', function(req, res) {
	models.burger.findAll({
		include: [{model: models.guest}],
		order: ['burger_name']
	}).then(function(result) {
		res.render('index', {
			burger: result
		});
	});
});

// post request that will put the new burgers into the database when they are submitted
router.post('/api/burgers', function(req, res) {
	models.burger.create({
		burger_name:req.body.burger_name,
		devoured: false,
	});
});

// put request that will update the burgers devoured state from false to true
router.post('/api/burgers/:burgerId/', function(req, res) {
	if (req.body.burgerEater === null || req.body.burgerEater.length === 0) {
		res.redirect('/');	
	} else {
		models.guest.create({
			guest_name: req.body.burgerEater,
			burgerId: req.params.burgerId,
		});
	  	models.burger.update({ 
	  		devoured: true,
	  	}, { where: { id: req.params.burgerId }
	  	}).then(function(result) {
	  		if (result.changedRows === 0) {
	  			return res.status(404).end();
	  		} else {
	  			res.redirect('/');
	  		}
	  	});
  	}
});

module.exports = router;