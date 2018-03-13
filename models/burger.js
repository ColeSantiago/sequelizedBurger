module.exports = function(sequelize, datatypes) {
	const Burger = sequelize.define('Burger', {
		burger_name: datatypes.STRING,
		devoured: {
	    	type: datatypes.BOOLEAN,
	    	defaultValue: false
    	}
	});
	return Burger;
};