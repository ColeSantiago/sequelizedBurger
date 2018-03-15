const express = require('express');
const router = express.Router();
const models = require('../models/index.js');
let sequelizeConnection = models.sequelize;
sequelizeConnection.sync();

// home page: grabs everything off of the database and displays it on the html with handlebars
router.get('/', function(req, res) {
	models.burger.findAll({
		include: [{model: models.guest}]
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
});

router.post('/api/guests', function(req, res) {

});

module.exports = router;