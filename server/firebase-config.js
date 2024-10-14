const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json'); // Your Firebase service account key

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://<YOUR_FIREBASE_PROJECT>.firebaseio.com"
});

module.exports = admin;
