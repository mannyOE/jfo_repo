
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    Id            : {type:String, unique:true, required:true},
    applicationType    : {type: String},
    available     : {type: String},
    focusArea     : {type:String},
    url           : {type: String},
    users         : {type:Array},
    roles         : {type:Array}
});



module.exports = mongoose.model('User', userSchema);
