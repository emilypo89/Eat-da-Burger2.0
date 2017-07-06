// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");
var sequelize;


if (process.env.JAWSDB_URL) {
  var sequelize = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}


db.sequelize = sequelize;
db.Sequelize = Sequelize;