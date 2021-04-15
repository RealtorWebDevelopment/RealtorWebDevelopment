var express=require("express");
var bodyParser =require("body-parser");
var mongoose=require("mongoose");

var db = mongoose.connect('mongodb://localhost/smartechomes');
var app=express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/',function(req,res){
    res.send("Virtual Realtor");
});

app.listen(3003,function(){
    console.log("Virtual Realtor API is running in Port 3003");
});

app.post('/login',function(req,res){
   res.send("Success");
    console.log(req.body)
    
});