require('dotenv').config();
const admin = require("firebase-admin");
const {
  applicationDefault
} = require('firebase-admin/app');


const app = admin.initializeApp({
  credential: applicationDefault()
});

module.exports = app