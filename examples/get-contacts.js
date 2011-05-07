/*!
 * Janrain RPX Example
 * 
 * Copyright(c) 2011 Demetrius Johnson
 * MIT Licensed
 */

/* **YOU WILL NEED TO UPDATE YOUR janrainAPIKey.
 * You can find your key under your account settings.
 */

var
	janrain = require('janrain'),
	util = require('util'),
	janrainAPIKey = '{YOUR_API_KEY}',
	engageAPI = janrain(janrainAPIKey);

/*
 * This is the identifier returned by janrain API below is an example
 * of what a identifier can look like.
 */
var identifier = 'http://www.facebook.com/profile.php?id={XXXXXX}';

engageAPI.getContacts(identifier, function(err, data) {
	if(err) {
		console.log('ERROR: '+err.message);
		return;
	}

	console.log(util.inspect(data,false,6));
})
