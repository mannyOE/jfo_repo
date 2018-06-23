var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var application    = require('../models/applications');
var login    = require('./loginDets');
var shortid = require('shortid');

app.use(bodyParser.json());



module.exports = function(app){

	

	app.get('/', (req, res)=>{
		res.send('Hey');
    });

    function findStats(){
        var stats = {};
        stats.users = 0
        stats.bds = 0;
        stats.devs = 0;
        stats.uiux = 0;
        stats.strat = 0;
        stats.fin =0;

        application.find({}, (error, result)=>{
            if(!error){
               result.forEach(app=>{
                   
                   stats.users += app.users.length;
                   stats.bds += app.users.filter(e=>e.role=='0').length;
                   stats.devs += app.users.filter(e=>e.role=='1').length;
                   stats.uiux += app.users.filter(e=>e.role=='2').length;
                   stats.strat += app.users.filter(e=>e.role=='3').length;
                   stats.fin += app.users.filter(e=>e.role=='4').length;
                });
            }
            console.log(stats);
            return stats;  
        })
    }
    
    app.post('/application/update', (request, response)=>{
        var body = request.body;
        if(body.Id){
            var go = false;
            if(body.type == '1'){
                if(login.ALLOWED_INDI > login.TAKENINDI){
                    go = true;
                }
            }else if(body.type == '2'){
                if(login.ALLOWED_TEAM > login.TAKENTEAM){
                    go = true;
                }
            }
            
            if(go){
                application.update({Id: body.Id}, {$set: body}, (error, rsp)=>{
                    if(!error){
                        if(body.status == '0'){
                            if(body.type == '2'){
                                login.TAKENTEAM-=1;
                            }else{
                                login.TAKENINDI-=1;
                            }
                        }
                        if(body.status == '1'){
                            if(body.type == '2'){
                                login.TAKENTEAM+=1;
                            }else{
                                login.TAKENINDI+=1;
                            }
                        }
                        response.send({
                            status: true,
                            message: "update successfull"
                        });
                    }else{
                        response.send({
                            status: false,
                            message: "update Failed"
                        });
                    }
                });
            }else{
                response.send({
                    status: false,
                    message: "Application Closed For This Type"
                }); 
            }
        }else{
            var go = false;
            if(body.type == '1'){
                if(login.ALLOWED_INDI > login.TAKENINDI){
                    go = true;
                }
            }else if(body.type == '2'){
                if(login.ALLOWED_TEAM > login.TAKENTEAM){
                    go = true;
                }
            }
            if(go){
                body.Id = shortid.generate();
                application.create(body, (error, rsp)=>{
                    if(!error){
                        response.send({
                            status: true,
                            message: "Application successfull"
                        });
                    }else{
                        response.send({
                            status: false,
                            message: "Application Failed"
                        });
                    }
                })
            }else{
                response.send({
                    status: false,
                    message: "Application Closed For This Type",
                    
                }); 
            }
            
        }
    });

    app.get('/application', (req, res)=>{
        var go = false;
        var closed = [];
            if(login.ALLOWED_INDI > login.TAKENINDI){
                go = true;
                closed.push('1');
            }
            if(login.ALLOWED_TEAM > login.TAKENTEAM){
                go = true;
                closed.push('2')
            }
        
        
            response.send({
                status: false,
                message: "Application Closed",
                closed: closed
            }); 
    });

    app.get('/application/all_application', (request, response)=>{
        var stats = {};
        stats.users = 0
        stats.bds = 0;
        stats.devs = 0;
        stats.uiux = 0;
        stats.strat = 0;
        stats.fin =0;

        application.find({}, (error, result)=>{
            if(!error){
               result.forEach(app=>{
                   
                   stats.users += app.users.length;
                   stats.bds += app.users.filter(e=>e.role=='0').length;
                   stats.devs += app.users.filter(e=>e.role=='1').length;
                   stats.uiux += app.users.filter(e=>e.role=='2').length;
                   stats.strat += app.users.filter(e=>e.role=='3').length;
                   stats.fin += app.users.filter(e=>e.role=='4').length;
                });


                response.send({
                    status: true,
                    message: "fetched successfully",
                    result: result,
                    stats: stats
                });
            }
            
        })
    });
    app.get('/application/accepted', (request, response)=>{
        var stats = {};
        stats.users = 0
        stats.bds = 0;
        stats.devs = 0;
        stats.uiux = 0;
        stats.strat = 0;
        stats.fin =0;
        application.find({}, (error, result)=>{
            if(!error){
               result.forEach(app=>{
                   
                   stats.users += app.users.length;
                   stats.bds += app.users.filter(e=>e.role=='0').length;
                   stats.devs += app.users.filter(e=>e.role=='1').length;
                   stats.uiux += app.users.filter(e=>e.role=='2').length;
                   stats.strat += app.users.filter(e=>e.role=='3').length;
                   stats.fin += app.users.filter(e=>e.role=='4').length;
                });


                application.find({status: 1}, (error, result)=>{
                    if(!error){
                        response.send({
                            status: true,
                            message: "fetched successfully",
                            result: result,
                            stats: stats,
                        });
                    }
                })
            }
            
        })
        
        
    });
    app.get('/application/rejects', (request, response)=>{
        var stats = {};
        stats.users = 0
        stats.bds = 0;
        stats.devs = 0;
        stats.uiux = 0;
        stats.strat = 0;
        stats.fin =0;
        application.find({}, (error, result)=>{
            if(!error){
               result.forEach(app=>{
                   
                   stats.users += app.users.length;
                   stats.bds += app.users.filter(e=>e.role=='0').length;
                   stats.devs += app.users.filter(e=>e.role=='1').length;
                   stats.uiux += app.users.filter(e=>e.role=='2').length;
                   stats.strat += app.users.filter(e=>e.role=='3').length;
                   stats.fin += app.users.filter(e=>e.role=='4').length;
                });

                application.find({status: 0}, (error, result)=>{
                    if(!error){
                        response.send({
                            status: true,
                            message: "fetched successfully",
                            result: result,
                            stats: stats
                        });
                    }
                })
                
            }
            
        })
        
    });
    app.get('/application/unattended', (request, response)=>{
        var stats = {};
        stats.users = 0
        stats.bds = 0;
        stats.devs = 0;
        stats.uiux = 0;
        stats.strat = 0;
        stats.fin =0;
        application.find({}, (error, result)=>{
            if(!error){
               result.forEach(app=>{
                   
                   stats.users += app.users.length;
                   stats.bds += app.users.filter(e=>e.role=='0').length;
                   stats.devs += app.users.filter(e=>e.role=='1').length;
                   stats.uiux += app.users.filter(e=>e.role=='2').length;
                   stats.strat += app.users.filter(e=>e.role=='3').length;
                   stats.fin += app.users.filter(e=>e.role=='4').length;
                });


                application.find({status: 2}, (error, result)=>{
                    if(!error){
                        response.send({
                            status: true,
                            message: "fetched successfully",
                            result: result,
                            stats: stats
                        });
                    }
                })
            }
            
        })
    });

    app.post('/application/filter', (request, response)=>{
        var query = request.body;        
        application.find(query, (error, result)=>{
            if(!error){
                response.send({
                    status: true,
                    message: "fetched successfully",
                    result: result,
                });
            }
        })
    });


    app.post('/login', (request, response)=>{
        var username, password;
        username = request.body.username;
        password = request.body.password;
       
        
        if(username === login.USERNAME && password === login.PASSWORD){
            response.send({
                message: "Logged In",
                status: true,
            })            
        }else{
            response.send({
                message: "Incorrect Details",
                status: false,
            })
        }
    });


}
