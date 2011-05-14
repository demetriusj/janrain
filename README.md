# Janrain

A Node.js module for interfacing with Janrain Engage API.

Janrain is a leader in the social login/registration and sharing space. Their are one of the most inexpensive solutions to provide a turnkey social login and social sharing solution for your site.
They bridge the gap between your website and the social networks. Janrain makes it easy for your users to login with an existing identity profile from social networks or identity providers like Facebook, Twitter, Google and Yahoo, to speed up online registration. Users can then interact with friends and publish activity data back through their social networks. Finaly you can also collect their details.

v0.0.1

### DISCLAIMER

## Installation

Janrain examples depends on [express](http://github.com/visionmedia/express) but the library does not.

To install via npm

    npm install janrain

To install by hand, download the module and create a symlink in `~/.node_libraries`

    $ ln -s /path/to/janrain/ ~/.node_libraries/janrain

Or

    Copy the /lib/janrain.js file to your project it is the only file required.

## Getting Ready

To enable social login and registration you need to have a free, pro, or enterprise account with janrain and setup your providers i.e. Facebook, Twitter, etc. Next you need to provide a callback endpoint that Janrain can POST back to. Once Janrain POST to your site you can use the Janrain API to validate the credentials and request a normalized version of their profile, contact list, etc.

You can signup for a free, pro, enterprise account at [Janrain](http://www.janrain.com/products/engage/pricing)

The signup process uses their social login so, you will need to have an account with Facebook, Google, Twitter, etc to start. You will need to confirm your information and create your account. You will need to pick your applications name. This name is visible by your users and will be presented to them each time they grant access to their 3rd party account i.e. Facebook and Twitter.

Great you are almost done. You should be at your dashboard and if not go to your dashboard. You can keep clicking the button in the upper right hand corner labeled "account" or "dashboard" and this will toggle you between your account and dashboard how clever. Click on the "Sign-In for Websites" under the "Quick Links" on the right-hand side. This will take you to the wizard to help you get the javascript code to put on your site. Before we do that, we need to choose and configure the providers that you want to offer to your users. To do this, skip the "Get the Widget" step by clicking on the "Choose Providers". If you pick providers that require additional configuration i.e. ones that have a gear next to them you will be prompted to configure them. 

Now that you have picked your providers and configured them click on the wizard step labeled "Handle Tokens" copy the "apiKey" value this is your api key and SHOULD be kept secret. You can also get this value on your main dashboard page. Optionaly If you want you can click on "Test Tool" on the right-hand side under "Resources" to validate that your configuration works. It will let you simulate signing using your configuration and display that information returned by the providers.

There is optional one last step before we get into code go to your dashboard and click on "Settings" under the "Quick Links" on the right-hand side. If you plan to use janrain on a domain other than localhost you will need to add that domain to the "Token URL Domains". There are also many different settings like "Provider Configuration" on the dashboard page. I would recommend exploring them later after you get your code up and running.

## Usage




## TODO
* Write Tests.
* Build better documcations.
* Make the examples 

Authors
-------

- Demetrius Johnson ([@demetriusjoh](http://twitter.com/demetriusjoh) / [demetriusj.com](http://demetriusj.com))

License
-----------

See [LICENSE](https://github.com/demetriusj/janrain/blob/master/LICENSE)

