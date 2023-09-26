const store = require('./store');

function userLogged(idToken) {
  return new Promise((resolve, reject) => {
    store.getToken(idToken)
      .then((user) => console.log(user.admin))
      .catch((err) => console.log(err));

    resolve(idToken);
  })

}

module.exports = {
  userLogged
}