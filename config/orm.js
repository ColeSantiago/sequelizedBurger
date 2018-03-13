const connection = require('../config/connection.js');

// function to make the json object readable in mysql
function objToSql(ob) {
  const array = [];
  for (let key in ob) {
    let value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      array.push(key + "=" + value);
    }
  }
  return array.toString();
};

// each of these will put together all of the query strings for mysql with all of the necessary
// information being passed through each function
const orm = {
	selectAll: function(tableInput, cb) {
		const queryString = 'SELECT * FROM ' + tableInput + ';';
	    connection.query(queryString, function(err, result) {
	      if (err) throw err;
	      cb(result);
	    });
	},
	insertOne: function(table, cols, vals, cb) {
		let queryString = 'INSERT INTO ' + table + ' (' + cols + ')' + ' VALUES (' + vals + ')';
	    connection.query(queryString, function(err, result) {
	      if (err) throw err;
	      cb(result);
	    });
	},
	updateOne: function(table, value, condition, cb) {
		let queryString = 'UPDATE ' + table + ' SET ' + objToSql(value) + ' WHERE ' + condition;
	    connection.query(queryString, function(err, result) {
	      if (err) throw err;
	      cb(result);
	    });
	}
};

module.exports = orm;