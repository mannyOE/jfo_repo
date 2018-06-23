var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var application    = require('../models/applications');
var login    = require('./loginDets');
var shortid = require('shortid');

app.use(bodyParser.json());



module.exports = {

	homeContent: function(request, response){
		response.status(200).send("Hello");
    }


}