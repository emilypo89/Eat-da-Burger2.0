// Require the sequelize library
var Sequelize = require("sequelize");
// Require the connection to the database (connection.js)
var sequelize = require("../config/connection.js");

// burger model
var Burger = sequelize.define("burgers", {
	burger_name: {
		type: Sequelize.STRING
	},
	devoured: {
		type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false
	}
});


// Sync model with DB
Burger.sync();

// Export the book model for other files to use

module.exports = Burger;