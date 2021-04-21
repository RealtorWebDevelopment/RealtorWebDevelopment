var mongoose =require('mongoose');
var Schema = mongoose.Schema;

var customer = new Schema({
    email: String,
    password: String
});

module.exports = mongoose.model('Customer', customer);