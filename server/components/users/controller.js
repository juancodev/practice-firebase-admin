const store = require('./store');

function addUser(userData) {
  return new Promise((resolve, reject) => {
    if (Object.entries(userData).length === 0) {
      console.log("[UsersController]: User doesn't have content, the user is empty");
      reject('There is no data user');
    }

    store.add(userData)
      .then((userRecord) => console.log('new user ' + userRecord.uid))
      .catch((error) => console.log('[UserController]: Error creating new user: ' + error));
    resolve(userData);
  });
};

function getUsers(emailUser) {
  return new Promise((resolve, reject) => {
    resolve(
      store.list(emailUser)
      .then((getUsersResult) => {
        // getUsersResult.users.map(userRecord => console.log(userRecord))
        return getUsersResult.users;
      })
      .catch(error => console.log(error))
    );
  })
}

module.exports = {
  addUser,
  getUsers,
}