
const functions = require('firebase-functions')
const admin = require('firebase-admin')

admin.initializeApp(functions.config().firebase)

// TODO: tutorial - https://medium.com/@chintansoni/firebase-cloud-functions-part-1-introduction-to-triggers-all-you-ever-wanted-8008e50ecb70

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
