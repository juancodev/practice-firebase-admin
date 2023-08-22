const {
  auth,
  db
} = require('./model');

// add user in Auth
function addUser(userData) {
  return auth.createUser(userData);
}

// permissions

async function addPermissions(uid, objectRole) {
  return await auth.setCustomUserClaims(uid, objectRole);
}

// save user in Firestore
async function saveUserInFiretore(userData) {
  const docRef = db.collection('users')
  return await docRef.add(userData);
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
  save: saveUserInFiretore,
  role: addPermissions,
  list: getUsers,
}