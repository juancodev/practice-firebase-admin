import {
  initializeApp
}
from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyAD7ocAYXeaoywqVVAkYPk0kgCwg-0gshQ",
  authDomain: "practice-firebaseapp-juancodev.firebaseapp.com",
  projectId: "practice-firebaseapp-juancodev",
  storageBucket: "practice-firebaseapp-juancodev.appspot.com",
  messagingSenderId: "729628102073",
  appId: "1:729628102073:web:87cd1ba4994d03bdde3a68"
};

const app = initializeApp(firebaseConfig);

export {
  app
};