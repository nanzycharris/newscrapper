// Web Scraper Homework Solution Example
// (be sure to watch the video to see
// how to operate the site in the browser)
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

// Require our dependencies
var express = require("express");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");

// Set up our port to be either the host's designated port, or 3000
var PORT = process.env.PORT || 3000;

// Instantiate our Express App
var app = express();

// Require our routes
var routes = require("./routes");

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect Handlebars to our Express app
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Have every request go through our route middleware
app.use(routes);

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI);

// Listen on the port
app.listen(PORT, function () {
    console.log("Listening on port: " + PORT);
});






//=================================================

// // Require dependencies
// var express = require('express');
// var mongoose = require('mongoose');
// var expressHandlebars = require('express-handlebars');
// var bodyParser = require('body-parser');

// // Set up our port
// var PORT = process.env.PORT || 3000;

// // Instantiate our Express app
// var app = express();

// // Set up an Express router
// var router = express.Router();

// // Require our routes file pass our router object
// require("./config/routes")(router);

// // Designate our public folder as a static directory
// app.use(express.static(__dirname + "/public"));

// // Connect Handlebars to our Express app
// app.engine("handlebars", expressHandlebars({
//     defaultLayout: "main"
// }));
// app.set("view engine", "handlebars");

// // Use bodyParser in our app
// app.use(bodyParser.urlencoded({
//     extended: false
// }));

// // Have every request go through our router middleware
// app.use(router);

// // If deployed, use the deployed database, otherwise use the local mongoHeadlines database
// var db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// // Connect mongoose to our database
// mongoose.connect(db, function (error) {
//     if (error) {
//         console.log(error);
//     }
//     else {
//         console.log("mongoose connection is successful")
//     }
// });

// // Listen on the port
// app.listen(PORT, function () {
//     console.log("Listening on port: " + PORT)
// });