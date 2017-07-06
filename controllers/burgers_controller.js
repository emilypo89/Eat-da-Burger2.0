
// Dependencies
var express = require("express");
var Burger = require("../models/burger.js");
// creating router
var router = express.Router();



// get request to show the index.handlebars on the page 
// shows all of the burgers currently in the datbase on the page
router.get("/", function(req, res) {
	Burger.findAll({}).then(function(result) {
      res.render("index", result);
    })
});

// post request to add a new burger to the list of burgers
// redirected back the the get request to show all the burgers, including the new one on the page
router.post("/", function(req, res) {
    Burger.create({
      burger_name: req.body.name,
      devoured: req.body.devoured
    }).then(function(result){
      res.redirect("/");
    });
});

// put request to update the page when the devoured state changes from false to true
router.put("/:id", function(req, res) {
	Burger.update({
	  devoured: req.body.devoured,
	}, {
	  where: {
	    id: {
	      $eq: req.body.id
	    }
	  }
	}).then(function(result) {
		res.redirect("/");
	});
});

// export router
module.exports = router;