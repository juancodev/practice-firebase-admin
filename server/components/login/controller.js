const store = require('./store');

const tokenUser = "";

function loginUser(idToken) {
  return new Promise((resolve, reject) => {
    store.getToken(idToken)
      .then()
      .catch((err) => console.log(err));

    resolve(idToken);
  })

}

module.exports = {
  loginUser
}