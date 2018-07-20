var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var application    = require('../models/applications');
var login    = require('./loginDets');
var shortid = require('shortid');

app.use(bodyParser.json());

const sendmail      = require('sendmail')({
	logger: {
		debug: console.log,
			info
	:
		console.info,
			warn
	:
		console.warn,
			error
	:
		console.error
	}
,
	silent: false,

		devPort      : 587, // Default: False
	devHost: 'localhost' // Default: localhost
});
var _ip = "http://babajfo4houseofrepresentatives.com:2300/";

var Email = function(data) {
	console.log('data',data);
	const sendmail = require('sendmail')();	
	

		sendmail({
				from: 'babaJFO4HouseOfAssemblly <volunteer@babajfohouseofrepresentatives.com>',
				to: data.to,
				subject: data.subject,
				html: data.contents
			}, function (err, reply) {
				console.log(err + data + reply)
				if (!err) {
					console.log("Mail sent to " + data.to);
				} else {
					console.log("Error sending mail to " + data.to, err);
				}
				// console.dir(reply);
				console.log(err + data + reply)

			}
		);

} 



module.exports = {

	acceptVolunteer: function(request, response){
		var dt = {};
		var bdy = request.body;
		dt.ip = _ip;
		dt.contents = bdy.name+' with phone number : '+bdy.phone+' and Email: '+bdy.email+' living at '+bdy.address+', wishes to volunteer';
		dt.subject = "New Volunteer Application";
		dt.to = "jfo4hor@mailinator.com";
		dt.from = "volunteers@babajfo@houseofrepresentatives.com";
		Email(dt);
		response.status(200).send({
			status: true,
			message: "Submitted Successfully"
		});
	},
	
	

}