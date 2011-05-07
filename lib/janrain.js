/*!
 * Janrain
 * 
 * Copyright(c) 2011 Demetrius Johnson
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var
	https = require('https'),
  Crypto = require("crypto");
	EscapePOSTData = require('querystring').stringify;

exports = module.exports = janrain;

exports.version = '0.0.1';

/**
 * Make a call to janrain's RESTFul API.
 * 
 */

function makeCall(method, args, callback) {
	var content = EscapePOSTData(args);
	var janrainAPI = https.request({
		host:'rpxnow.com',
		port:443,
		path:'/api/v2/'+method,
		method:'POST',
    headers: {
      'Content-Length': content.length,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
	}, function(res) {
		var jsonData = '';
	  res.setEncoding('utf8');
	  res.on('data', function (chunk) {
	  	jsonData += chunk;
	  });
	  res.on('end', function() {
	  	var data = JSON.parse(jsonData);
	  	if(data.stat == 'fail') {
	  		callback(new Error(data.err.msg), data);
	  	} else {
		  	callback(null, data);
	  	}
	  });
	});
	
	janrainAPI.on('error', function(err) {
		callback(err);
	});
	
	janrainAPI.write(content);
	janrainAPI.end();
}

/**
 * Refer to Janrain documentation https://rpxnow.com/docs for more info.
 */

function janrain(EngageAPIKey) {
	return {
		authInfo: function(token, extended, callback) {makeCall('auth_info', {apiKey:EngageAPIKey, token:token, extended:extended}, callback);},
		getContacts: function(identifier, callback) {makeCall('get_contacts', {apiKey:EngageAPIKey, identifier:identifier}, callback);},
		setStatus: function(identifier, status, location, truncate, callback) {makeCall('set_status', {apiKey:EngageAPIKey, identifier:identifier, status:status, location:location, truncate:truncate}, callback);},
		map: function(identifier, primaryKey, overwrite, callback) {makeCall('map', {apiKey:EngageAPIKey, identifier:identifier, primaryKey:primaryKey, overwrite:overwrite}, callback);},
		unmap: function(identifier, all_identifiers, primaryKey, unlink, callback) {makeCall('unmap', {apiKey:EngageAPIKey, identifier:identifier, all_identifiers:all_identifiers, primaryKey:primaryKey, unlink:unlink}, callback);},
		mappings: function(primaryKey, callback) {makeCall('mappings', {apiKey:EngageAPIKey, primaryKey:primaryKey}, callback);},
		activity: function(identifier, activity, truncate, location, callback) {makeCall('activity', {apiKey:EngageAPIKey, activity:activity, truncate:truncate, location:location}, callback);},
	};
}
