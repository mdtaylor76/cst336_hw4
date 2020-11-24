const express = require("express");
const app = express();
var fakeData = require("faker");
var randomName = fakeData.name.findName();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//routes
app.get("/", function(req, res) {
    res.render("index.html", {"active": "home", "fakeName": randomName});
});

app.get("/history", function(req, res) {
    res.render("history.html", {"active": "history", "fakeName": randomName});
});

app.get("/imperative", function(req, res) {
    res.render("imperative.html", {"active": "imperative", "fakeName": randomName});
});

app.get("/declarative", function(req, res) {
    res.render("declarative.html", {"active": "declarative", "fakeName": randomName});
});

//starting server
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Epxress server is running...");
});