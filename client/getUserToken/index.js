import {
  getAuth,
  onAuthStateChanged
} from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js'
import {
  app
} from '../firebase/firebase.config.client.js';

function getTokenUserClient() {
  onAuthStateChanged(getAuth(app), async user => user.accessToken)
}