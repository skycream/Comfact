var express = require("express");
var fs = require("fs");
var app = express();
var path = require("path");
var template = require("./lib/news_main.js");
var login_template = require("./lib/login.js");
var news_result_template = require("./lib/news_result.js");
//route , routing
app.get("/", (req, res) => {
  fs.readdir("./src/", (e, filelist) => {
    console.log(filelist);
    var title = "Welcome";
    var desc = "This is Description";
    var subject = "${subject}";
    var publisher = "${publisher}";
    var list = template.list(filelist);
    var html = template.HTML(subject, publisher, list);
    res.send(html);
  });
});

app.get("/login", (req, res) => {
  let html = login_template.HTML();
  res.send(html);
});

app.get("/currency/:cid", (req, res) => {
  var filteredId = path.parse(req.params.cid).base;
  let html = news_result_template.HTML(req.params.cid);
  res.send(html);
});

app.listen(8080, () => {
  console.log("Project Comfact is testing now.");
});
