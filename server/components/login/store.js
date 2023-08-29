const auth = require('../../firebase/firebase.auth');

async function getTokenUser(idTokenUser) {
  return await auth.verifyIdToken(idTokenUser);
}

module.exports = {
  getToken: getTokenUser
}