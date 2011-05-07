/*!
 * Janrain RPX Example
 * 
 * Copyright(c) 2011 Demetrius Johnson
 * MIT Licensed
 */

/**
 * Module dependencies.
 */
 
var
	connect = require('connect'),
	janrain = require('janrain'),
	express = require('express');

var app = express.createServer();

/* **YOU WILL NEED TO UPDATE YOUR janrainAccount and janrainAPIKey.
 * The janrain domain is assigned to you when you create an account
 * for example foo.rpxnow.com or bar.rpxnow.com where foo and bar would
 * be the domain you use. You can find the details under your account settings.
 */
var
	janrainAccount = '{YOUR_DOMAIN}',
	janrainAPIKey = '{YOUR_API_KEY}',
	engageAPI = janrain(janrainAPIKey);

/*
 * You will need a basic page that hosts janrain
 * client side scripts to start the sign-in/connect
 * process.
 */
app.get('/', function(req, res){
	res.render('index.ejs', {
		locals: {
			host: 'localhost:8080',
			domain: janrainAccount
		},
		layout:false
	});
});

/*
 * After the user sign-in/connects janrain widget will reload the
 * page and post details about the newly authicated user.
 * 
 * this only works for PRO accounts
 */
app.post('/rpx', connect.bodyDecoder(), function(req, res){

	// STEP1: Get the token from 
	var token = req.body.token;
	if(!token || token.length != 40 ) {
		res.send('Bad Token!');
		return;
	}

	// STEP2: get the auth info using the janrain API call
	engageAPI.authInfo(token, true, function(err, data) {
		if(err) {
			res.send(err.message + ( data ? ('  --  ' + JSON.stringify(data)) : ''));
			return;
		}
		
		res.send(JSON.stringify(data));
	});
});

app.listen(8080);
