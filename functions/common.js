const functions = require('firebase-functions');

exports.checkAuthentication= (context) => {
	// Checking that the user is authenticated.
	if (!context.auth) {
		// Throwing an HttpsError so that the client gets the error details.
		throw new functions.https.HttpsError('failed-precondition', 'The function must be called while authenticated.');
	}
};
