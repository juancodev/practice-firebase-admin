// loginUser
const {
  getAuth
} = require('firebase-admin/auth');
const app = require('./../../firebase/firebase.config');

const auth = getAuth(app);

module.exports = {
  auth
};