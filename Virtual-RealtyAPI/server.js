var express=require('express');
var fs=require('fs');
var app=express();
const dirName='C:\Users\Aditya\Desktop\WebDevelopment\virtual-realty';

var bodyParser =require('body-parser');
var mongoose=require('mongoose');
var cors=require('cors');


var db = mongoose.connect('mongodb://localhost:27017/smartechomes');

//var Customer=require('./model/customer');
var Customer_Registration=require('./model/customer_registration');
var Project=require('./model/projects');

const path='./Images/Logo.jpg';

app.use(cors({origin: true, credentials: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/',function(req,res){
    res.send('Success')
});

app.listen(8000,function(){
    console.log('Virtual Realtor API is running in Port: 8000');
});

app.post('/api/RealtorLogin',function(req,res){
  var email=req.body.email;
  var password=req.body.password;
       // var customer= new Customer_Registration();
    console.log(req.body);

Customer_Registration.find({email: email,password: password},function(err,cust){
  if(err){
    return res.status(500).send("error");
  }
  else {
    if(!cust){
           res.status(404).send();
      }
      else {
           res.status(200).send();
      }
    }

  })
});


app.post('/api/Register',function(req,res){
    //   res.send('Success');
    var registration=new Customer_Registration(req.body);
      console.log(req.body)
    registration.save(function(err,savedregistration){
        if(err){
            res.status(500).send({error:'Could not save product'});
        }
        else{
            res.status(200).send(savedregistration);

        }
    })
                  });

  app.post('/api/Projects',function(req,res)
  {
    var project=new Project(req.body);
    project.image1.data=fs.readFileSync(path);
    project.image2.data=fs.readFileSync(path);
    console.log(req.body);
    project.save(function(err,savedproject){
      if(err){
        res.status(500).send({error:'Could not save product'});
      }
      else {
        {
            res.status(200).send(savedproject);
        }
      }
    })
  });

  app.get('/api/RealEstate',function(req,res)
  {
    var project=new Project();
    Project.find(function(err,projects){
      if(err){
        res.status(500).send({error:'Could not get product'});
      }
      else {
        {
          // console.log(projects);
            res.status(200).send(projects);
        }
      }
    })
  });
