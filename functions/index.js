const functions = require('firebase-functions');

const admin = require('firebase-admin');
// Fetch the service account key JSON file contents
const serviceAccount = require('./keys/stitchintimekey.json');
// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: 'https://stitchintime-3f21d.firebaseio.com'
});

const { pushProjectType } = require('./admin');

// exports.addMessage = functions.https.onCall((data, context) => {
// 	// Message text passed from the client.
// 	const text = data.text;
// 	// Authentication / user information is automatically added to the request.
// 	const uid = context.auth.uid;
// 	const name = context.auth.token.name || null;
// 	// const picture = context.auth.token.picture || null;
// 	const email = context.auth.token.email || null;
// 	// returning result.
// 	return {
// 		firstNumber: text,
// 		secondNumber: uid,
// 		operator: '+',
// 		operationResult: name + email,
// 	};
// });

exports.adminPushProjectType = pushProjectType;
