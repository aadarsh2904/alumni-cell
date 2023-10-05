const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const { EventEmitter } = require('events');
const dialog = require("dialog-node");
const mongoose=require('mongoose');
const path= require("path");
const app = express();
const myEmitter = new EventEmitter();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/public')));

app.get("/",function(req,res){
  res.render("home")
});


app.listen(3000,function(){
  console.log("server is running");
})
