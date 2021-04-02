const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");



const app = express()

app.use(express.static("public"));
app.set("view engine","ejs");
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json())

app.get("/",function(req,res){
  res.render("home")
});

app.get("/home",function(req,res){
  res.render("home")
});

app.get("/signup",function(req,res){
  res.render("signup")
})

app.get("/signin",function(req,res){
  res.render("signin")
})

app.get('/premium',function(req,res){
  res.render("premium")
})

app.get("/premium-payment",function(req,res){
  res.render("premium-payment")
})


app.listen(3000,function(){
  console.log("Server is running on port 3000.")
})
