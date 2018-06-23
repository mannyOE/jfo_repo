var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var application    = require('../models/applications');
var login    = require('./loginDets');
var shortid = require('shortid');

app.use(bodyParser.json());

var web = require('./web');
var cms = require('./cms');



module.exports = function(app){
    app.post('/web/sendmail', web.acceptVolunteer);
    app.get('/cms/', cms.homeContent);

}
