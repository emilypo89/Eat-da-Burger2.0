// Dependencies
var express = require("express");
var db = require("../models");
console.log(db.Burger);
console.log(db.Customer);
// creating router
var router = express.Router();
  // get request to show the index.handlebars on the page 
  // shows all of the burgers currently in the database on the page
  router.get("/", function(req, res) {
      db.Burger.findAll({
      }).then(function(data) {
          console.log(data)    
       res.render("index", {burgers: data});
      });
  });

  // get request to show customer
  // I realized that I cannot have two get requests for the same page, but I am not sure how to fix this 
  // I want this to display the customer who devoured the burger on the devoured burgers part of the page
  router.get("/", function(req, res) {
      db.Customer.findOne({
        include: [{
        model: db.Burger
      }],
      where: {
        id: req.body.id
      }
      }).then(function(data) {
          console.log(data)    
       res.render("index", {customer: data});
      });
  });

  // post request to add a new burger to the list of burgers
  // redirected back the the get request to show all the burgers, including the new one on the page
  router.post("/", function(req, res) {
      db.Burger.create({
        burger_name: req.body.burger_name,
        devoured: req.body.devoured
      }).then(function(data){
        res.redirect("/");
      });
  });

  // post request to create a new customer
  // Having trouble with this part as well
  // See section in index.handlebars page for more notes
  router.post("/:id", function(req, res) {
      db.Customer.create({
        name: req.body.name
      }).then(function(data){
        res.redirect("/customer");
      });
  });


  // put request to update the page when the devoured state changes from false to true
  router.put("/:id", function(req, res) {
      db.Burger.update({
        devoured: req.body.devoured
      }, {
        where: {
          id: req.params.id
        }
      }).then(function(data) {
          res.redirect("/");
      });
  });
// export routers
module.exports = router;