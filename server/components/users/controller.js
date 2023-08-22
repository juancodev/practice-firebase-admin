const store = require('./store');

function addUser(userData) {
  return new Promise((resolve, reject) => {
    if (Object.entries(userData).length === 0) {
      console.log("[UsersController]: User doesn't have content, the user is empty");
      reject('There is no data user');
    }

    store.add(userData)
      .then((userRecord) => {
        console.log('new user ' + userRecord.uid)
        store.role(userRecord.uid, {
            role: 'student'
          })
          .then((userRole) => console.log(userRole))
      })
      .catch((error) => console.log('[UserController]: Error creating new user: ' + error));
    resolve(userData);
  });
};

//Save in Firestore

function saveUser(user) {
  return new Promise((resolve, reject) => {
    if (Object.entries(user).length === 0) {
      console.log("[UsersController]: User doesn't have content, the user is empty");
      reject('There is no user');
    }

    store.save(user);
    resolve(user);
  });
};

function getUsers(emailUser) {
  return new Promise((resolve, reject) => {
    if (emailUser) {
      resolve(
        store.list(emailUser)
        .then((getUsersResult) => {
          const uid = getUsersResult.uid;
          const userInfo = getUsersResult.providerData[0];
          const role = getUsersResult.customClaims.role;
          // getUsersResult.users.map(userRecord => console.log(userRecord))
          return {
            uid,
            userInfo,
            role
          };
        })
        .catch(error => console.log(error))
      )
    } else {
      resolve(
        store.list()
        .then((getUsersResult) => {

          // getUsersResult.users.map(userRecord => console.log(userRecord))
          return getUsersResult.users;
        })
        .catch(error => console.log(error))
      )
    }
  })
}

module.exports = {
  addUser,
  saveUser,
  getUsers,
}