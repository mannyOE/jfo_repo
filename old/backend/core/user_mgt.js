var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var users    = require('../users');

app.use(bodyParser.json());



module.exports = function(app){

	// login script
	app.post('/login',(req, res)=>{
	    res.send(
	        {
	            name: req.body.username
	        }
	    );
	});


	// signup script
	app.post('/create', (req, res)=>{
		let data = req.body;
		if(!data){
			res.send({status:false,message:"no data submitted"});
			return;
		}
		users.create()
	});

	app.get('/', (req, res)=>{
		res.send('Hey');
	});

}
