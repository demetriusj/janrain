# Janrain

A Node.js module for interfacing with Janrain Engage API.

# What is Janrain?

Janrain is a leader in the social login/registration and sharing space. Their are one of the most inexpensive solutions to provide a turnkey social login and social sharing solution for your site.
They bridge the gap between your website and the social networks. Janrain makes it easy for your users to login with an existing identity profile from social networks or identity providers like Facebook, Twitter, Google and Yahoo, to speed up online registration. Users can then interact with friends and publish activity data back through their social networks. Finally you can also collect their details.

## Installation

To install via npm

    npm install janrain

To install by hand, download the module and create a symlink in `~/.node_libraries`

    $ ln -s /path/to/janrain/ ~/.node_libraries/janrain

or

    Copy the /lib/janrain.js file to your project it is the only file required.

## Setup your Janrain account

To enable social login and registration you need to have a free, pro, or enterprise account with janrain and setup your providers i.e. Facebook, Twitter, etc. Next you need to provide a callback endpoint that Janrain can POST back to. Once Janrain POST to your site you can use the Janrain API to validate the credentials and request a normalized version of their profile, contact list, etc.

You can signup for a free, pro, enterprise account at [Janrain](http://www.janrain.com/products/engage/pricing)

The signup process uses their social login so, you will need to have an account with Facebook, Google, Twitter, etc to start. You will need to confirm your information and create your account. You will need to pick your applications name. This name is visible by your users and will be presented to them each time they grant access to their 3rd party account i.e. Facebook and Twitter.

Great you are almost done. You should be at your dashboard and if not go to your dashboard. You can keep clicking the button in the upper right hand corner labeled "account" or "dashboard" and this will toggle you between your account and dashboard how clever. Click on the "Sign-In for Websites" under the "Quick Links" on the right-hand side. This will take you to the wizard to help you get the javascript code to put on your site. Before we do that, we need to choose and configure the providers that you want to offer to your users. To do this, skip the "Get the Widget" step by clicking on the "Choose Providers". If you pick providers that require additional configuration i.e. ones that have a gear next to them you will be prompted to configure them. 

Now that you have picked your providers and configured them click on the wizard step labeled "Handle Tokens" copy the "apiKey" value this is your api key and SHOULD be kept secret. You can also get this value on your main dashboard page. Optionaly If you want you can click on "Test Tool" on the right-hand side under "Resources" to validate that your configuration works. It will let you simulate signing using your configuration and display that information returned by the providers.

There is optional one last step before we get into code go to your dashboard and click on "Settings" under the "Quick Links" on the right-hand side. If you plan to use janrain on a domain other than localhost you will need to add that domain to the "Token URL Domains". There are also many different settings like "Provider Configuration" on the dashboard page. I would recommend exploring them later after you get your code up and running.

## Demo

Validate and login a user using Janrain. The social login/registration widget will post back to your site at which point you can make the auth call to validate the request on a back-channel and get the users details.

		var
			janrain = require('janrain'),
			engageAPI = janrain('{API_KEY}'); // API_KEY is the "API Key (Secret)" in your janrain dashboard

		var token = '{token_from_post}';

		engageAPI.authInfo(token, true, function(err, data) {
		  if(err) {
		    console.log('ERROR: ' + err.message);
		    return;
		  }

			// login the user to your site
			// the data contains profile, friends, provider, etc.
			// read the API docs for details.
		});

Get a users contact list in the portable [contact format](http://portablecontacts.net/). This will only work on Pro and Enterprise accounts only. 

		var
			janrain = require('janrain'),
			util = require('util'),
			engageAPI = janrain('{API_KEY}'); // API_KEY is the "API Key (Secret)" in your janrain dashboard

		var identifier = 'http://www.facebook.com/profile.php?id={XXXXXX}';

		engageAPI.getContacts(identifier, function(err, data) {
		  if(err) {
		    console.log('ERROR: ' + err.message);
		    return;
		  }

		  console.log(util.inspect(data, false, 6));
		});

## API

janrain.js is a simple wrapper around the Janrain Engage API. For details on all the options, errors, return values please read the documentation at [Janrain](https://rpxnow.com/docs). As a convention all methods are camelcase and do not map directly to Janrain REST API but the naming convention is to remove the underscore and replace it with the camelcase equlivent i.e auth_info in Janrain documentation is authInfo. 

* [authInfo](https://rpxnow.com/docs#api_auth_info)
* [getContacts](https://rpxnow.com/docs#api_get_contacts)
* [setStatus](https://rpxnow.com/docs#api_set_status)
* [map](https://rpxnow.com/docs#api_map)
* [unmap](https://rpxnow.com/docs#api_unmap)
* [mappings](https://rpxnow.com/docs#api_mappings)
* [activity](https://rpxnow.com/docs#api_activity)

#### [Errors](https://rpxnow.com/docs#api_error_responses)

## TODO
* Write Tests.
* Build better documentation.
* Make the examples 

## For additional Information

Check out Janrain documentation at [Janrain](https://rpxnow.com/docs)
Janrain Getting started Google group [Janrain Developers](http://groups.google.com/group/rpx-developers?pli=1)
Janrain on github [Github](https://github.com/janrain)

My blog [demetriusj](http://demetriusj.com/tagged/janrain)

Authors
-------

- Demetrius Johnson ([@demetriusjoh](http://twitter.com/demetriusjoh) / [demetriusj.com](http://demetriusj.com))

License
-----------

See [LICENSE](https://github.com/demetriusj/janrain/blob/master/LICENSE)

