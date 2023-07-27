const auth = require('./model');

function addUser(userData) {
  return auth.createUser(userData);
}

function getUsers(email) {

  if (email) {
    return auth.getUserByEmail(email);
  }

  // return auth.getUsers([{
  //   email: 'c@gmail.com'
  // }]);

  return auth.listUsers(100);
}

module.exports = {
  add: addUser,
  list: getUsers,
}