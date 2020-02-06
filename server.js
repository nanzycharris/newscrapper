// Start with dependencies
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var logger = require("morgan");

// Initialize Express app
var express = require("express");
var app = express();

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(process.cwd() + "/public"));

// Require handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Set up our local host port
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Listening on PORT " + port);
});

// Connection to MongoDB
//const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/scraper_news";

mongoose.connect("mongodb://localhost/newscrapper");

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
    console.log("Connected to Mongoose!");
});

// var routes = require("./controller/controller.js");
// app.use("/", routes);

