var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var application    = require('../models/applications');
var login    = require('./loginDets');
var shortid = require('shortid');

app.use(bodyParser.json());

var cms = require('./cms');



module.exports = function(app){
    app.get('/cms/', cms.homeContent);
    app.get('/cms/carousel', cms.homeContent);
    app.get('/cms/blog', cms.homeContent);
    app.get('/cms/blog', cms.homeContent);

}
