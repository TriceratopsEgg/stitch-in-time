const functions = require('firebase-functions');
var admin = require('firebase-admin');
var db = admin.database();

exports.pushProjectType = functions.https.onRequest(async (req, res) => {
	if (req.headers.adminkey != functions.config().admin.adminsecretkey){
		throw new functions.https.HttpsError('failed-precondition', 'The function must be called while authenticated.');
	}

	const ref = db.ref('/projectTypes');
	console.log(ref);
	var newProjectType = ref.push(req.body);
	res.json(newProjectType);
});
