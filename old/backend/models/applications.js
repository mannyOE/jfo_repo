
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

var applicationSchema = new Schema({
    Id            : {type:String, unique:true, required:true},
    type    : {type: String},
    teamName            : {type: String},
    available     : {type: String},
    focus     : {type:String},
    url           : {type: String},
    users         : {type:Array},
    roles         : {type:Array},
    status        : {type: Number, default: 2},
});



module.exports = mongoose.model('Applications', applicationSchema);
