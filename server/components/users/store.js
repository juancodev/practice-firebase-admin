const auth = require('./model');

function addUser(userData) {
  return auth.createUser(userData);
}

module.exports = {
  add: addUser
}