'use strict';
module.exports = (sequelize, DataTypes) => {
  var Guest = sequelize.define('Guest', {
    guest_name: DataTypes.STRING
  }, {});
  Guest.associate = function(models) {
    // associations can be defined here
  };
  return Guest;
};