var mongoose =require('mongoose');
var Schema = mongoose.Schema;

var project = new Schema({
    name: String,
    address: String,
    description: String,
    image1: {
       data: Buffer,
      contentType: String
    },

    image2: {
      data: Buffer,
      contentType: String
    }
});

module.exports = mongoose.model('Project', project);
