import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js'
import {
  app
} from '../firebase/firebase.config.client.js';

const signIn = document.getElementById('signIn');

const registerNewUser = async (userData) => {
  const aNewUserData = await fetch('http://localhost:3100/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  const user = await aNewUserData.json();
  return user;
}



const auth = getAuth(app);

TODO: // 👇🏼 validate token in routers
  signIn.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    const roleAdmin = event.target.admin;
    const roleUser = event.target.user;
    const userLogged = {
      email,
      password
    }

<<<<<<< HEAD
    if (roleAdmin.checked) {
      roleUser.removeAttribute('checked');
      userLogged.role = roleAdmin.name;
    } else {
      roleAdmin.removeAttribute("checked");
      userLogged.role = roleUser.name;
    }


    // signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredentials) => {
    //     console.log(userCredentials._tokenResponse.idToken);
    //     const user = userCredentials.user;
    //     console.log(user);
    //   })
    //   .catch((error) => console.log(error));

    // register
    registerNewUser(userLogged)
      .then((response) => {
        console.log(response);
=======
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        fetch('http://localhost:3100/login', {
          method: 'POST',
          headers: {
            authorization: 'Bearer ' + userCredentials._tokenResponse.idToken,
            'Content-Type': 'application/json',
          },
        })
        console.log(userCredentials._tokenResponse.idToken);
        const user = userCredentials.user;
        console.log(user);
>>>>>>> refs/remotes/origin/main
      })
      .catch((error) => console.log(error))
  })