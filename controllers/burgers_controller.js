
// Dependencies
var express = require("express");
var db = require("../models");
console.log(db.Burger);
// creating router
var router = express.Router();


module.exports = function(app) {
	// get request to show the index.handlebars on the page 
	// shows all of the burgers currently in the database on the page
	router.get("/", function(req, res) {
		console.log(req);
		db.Burger.findAll({}).then(function(data) {
			console.log(data)
			// var burgerObject = ;	
	     res.render("index", {burgerObject: data});
	    });
	});

	// post request to add a new burger to the list of burgers
	// redirected back the the get request to show all the burgers, including the new one on the page
	router.post("/", function(req, res) {
	    Burger.create({
	      burger_name: req.body.name,
	      devoured: req.body.devoured
	    }).then(function(data){
	      res.redirect("/");
	    });
	});

	// put request to update the page when the devoured state changes from false to true
	router.put("/:id", function(req, res) {
		Burger.update({
		  devoured: req.body.devoured,
		}, {
		  where: {
		    id: req.body.id
		  }
		}).then(function(data) {
			res.redirect("/");
		});
	});
}
