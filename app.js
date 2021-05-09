// jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const _ = require('lodash');


const app = express();

app.set ('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));


const year = new Date().getFullYear();
// console.log(year);

app.get("/", function(req, res){
  res.render("home");
});

app.get("/mum", function(req, res){
  res.render("mum", {thisYear: year} );
});

app.get("/lesley", function(req, res){
  res.render("lesley", {thisYear: year});
});

app.get("/kibenon", function(req, res){

});

app.get("/kibiwot", function(req, res){

});

let port = process.env.PORT;
if (port == null || port == "" ){
  port = 3000;
}

app.listen( port, function(){
  console.log("Server started om port 3000");
});
