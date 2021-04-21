var express=require('express');
var app=express();
const dirName='C:\Users\Aditya\Desktop\WebDevelopment\virtual-realty';

var bodyParser =require('body-parser');
var mongoose=require('mongoose');
var cors=require('cors');


var db = mongoose.connect('mongodb://localhost:27017/smartechomes');

var Customer=require('./model/customer');
var Customer_Registration=require('./model/registration');


app.use(cors({origin: true, credentials: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/',function(req,res){
    res.send('Success')
});

app.listen(8000,function(){
    console.log('Virtual Realtor API is running in Port: 8000');
});

app.post('/api/RealtorLogin',function(req,res,next){
    //   res.send('Success');
    var customer=new Customer();
    console.log(req.body);
//     Customer.find(function(err,savedCustomer){
//          if(err){
//             res.status(500).send({error:'Could not save product'});
//         }
//         else{
//           //console.log(savedCustomer);
//           res.status(200).send(savedCustomer);
// }
//           });
Customer.find(req.body,function(err,cust){
  if(err){
    res.json(err);
  }
  else {
    {
      console.log(cust);
    res.status(200).send(cust);
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
