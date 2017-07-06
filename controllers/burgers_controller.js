// 3. Inside the `burgers_controller.js` file, import the following:

//    * Express
//    * `burger.js`

// 4. Create the `router` for the app, and export the `router` at the end of your file.
// Dependencies
var express = require("express");
var burgers = require("../models/burger.js");
// creating router
var router = express.Router();



// get request to show the index.handlebars on the page 
// shows all of the burgers currently in the datbase on the page
router.get("/", function(req, res) {
	burgers.selectAll(function(data) {
		var burgerObject = {
			burgers: data
		};
		console.log(burgerObject);
		res.render("index", burgerObject);
	});
});

// post request to add a new burger to the list of burgers
// redirected back the the get request to show all the burgers, including the new one on the page
router.post("/", function(req, res) {
	burgers.insertOne([
		"burger_name", "devoured"
		], [
		req.body.burger_name, req.body.devoured
		], function() {
			res.redirect("/");
		});
});

// put request to update the page when the devoured state changes from false to true
router.put("/:id", function(req, res) {
	var condition = "id = " + req.params.id;
	console.log("condition", condition);
	burgers.updateOne({
		devoured: req.body.devoured
	}, condition, function() {
		res.redirect("/");
	});
});
// export router
module.exports = router;