const {
  auth
} = require('./model');

// add user in Auth
function addUser(userData) {
  return auth.createUser(userData);
}

// permissions

async function addPermissions(uid, objectRole) {
  return await auth.setCustomUserClaims(uid, objectRole);
}

// Token generate
async function customToken(uid) {
  return await auth.createCustomToken(uid);
}


function getUsers(email) {

  if (email) {
    return auth.getUserByEmail(email);
  } else {
    return auth.listUsers(100);
  }

  // return auth.getUsers([{
  //   email: 'c@gmail.com'
  // }]);

}

module.exports = {
  add: addUser,
  role: addPermissions,
  customToken: customToken,
  list: getUsers,
}