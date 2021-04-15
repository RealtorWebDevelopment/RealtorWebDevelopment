import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var customer = new Schema({
    FirstName: String,
    LastName: String,
    postal_code: Number,
    phone_number: Number,
    email: String,
    password: String
});

module.exports = mongoose.model('Customer', customer);