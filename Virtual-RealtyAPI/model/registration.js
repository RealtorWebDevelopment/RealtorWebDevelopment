var mongoose =require('mongoose');
var Schema = mongoose.Schema;

var customer_registration = new Schema({
    email: {type: String,required: true},
    password: {type: String,required: true},
    firstname: String,
    lastname: String,
    zipcode: Number,
    phonenumber: Number

});

module.exports = mongoose.model('Customer_Registration', customer_registration);
