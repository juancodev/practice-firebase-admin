import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js'
import {
  app
} from '../firebase/firebase.config.client.js';

const signin = document.getElementById('signin');

const auth = getAuth(app);

TODO: // 👇🏼 validate token in routers
  signin.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

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
      })
      .catch((error) => console.log(error));

  })