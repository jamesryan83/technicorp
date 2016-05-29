var express = require("express");
var path = require("path");

var app = express();
app.use(express.static(__dirname + "/public"));



// home page
app.get("/", function (req, res) {
    res.sendStatus(200);  // serving static files, but send this anyway
});


// redirect everything to home page
app.all("*", function (req, res) {
    res.redirect("/");
});


// Start Server
var port = process.env.PORT || 1337;

app.listen(port, function() {
    console.log("listening on port : " + port);
});
