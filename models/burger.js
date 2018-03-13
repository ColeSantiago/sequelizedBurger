const orm = require('../config/orm.js');

// each of these will pass on the correct table, as well as all of the needed collums, values, conditions, and callback functions
const burger = {
	selectAll: function(cb) {
		orm.selectAll('burgers', function(res) {
			cb(res);
		});
	},
	insertOne: function(cols, vals, cb) {
		orm.insertOne('burgers', cols, vals, function(res) {
			cb(res);
		});
	},
	updateOne: function(value, condition, cb) {
		orm.updateOne('burgers', value, condition, function(res) {
			cb(res);
		});
	}
};

module.exports = burger;