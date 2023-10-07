import {
  getAuth,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
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

const loginUser = async (token) => {
  const userLoggedSuccess = await fetch('http://localhost:3100/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  });

  const user = await userLoggedSuccess.json();
  return user;
}



const auth = getAuth(app);

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

  if (roleAdmin.checked) {
    roleUser.removeAttribute('checked');
    userLogged.role = roleAdmin.name;
  } else {
    roleAdmin.removeAttribute("checked");
    userLogged.role = roleUser.name;
  }

  //login
  TODO: // 👇🏼 validate token in routers
    setPersistence(auth, browserSessionPersistence)
    .then(() => {
      return signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          const token = userCredentials._tokenResponse.idToken;
          console.log(token);
          // const authorization = `Bearer ${token}`;
          loginUser(token)
            .then((user) => {
              console.log(user)
              // window.location.href = 'http://localhost:3100/products';
            }) // 👈🏼 token
          const user = userCredentials.user;
          console.log(user);
        })
    })
    .catch((error) => console.log(error));

  // register
  // registerNewUser(userLogged)
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((error) => console.log(error))
})