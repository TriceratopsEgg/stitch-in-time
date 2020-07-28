const functions = require('firebase-functions');
const { checkAuthentication } = require('./common');

exports.createProject = functions.https.onCall((data, context) => {
	checkAuthentication(context);

	// fetch project type details

	// check that required fields are supplied

	// store result in database
    
	// return stored project
});