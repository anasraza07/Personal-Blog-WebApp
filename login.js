import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import {
  getAuth,
  //   createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdmfz8IEw9u7Db1LZEQ4IwryCFCPxM0kQ",
  authDomain: "personal-blogging-app-7caf2.firebaseapp.com",
  projectId: "personal-blogging-app-7caf2",
  storageBucket: "personal-blogging-app-7caf2.appspot.com",
  messagingSenderId: "973704966697",
  appId: "1:973704966697:web:0c6d9f1d96f89b27bce238",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginBtn = document.getElementById("login");
// console.log(loginBtn);

const existingEmail = document.getElementById("existing-email");
const existingPass = document.getElementById("existing-pass");

const loginFunc = () => {
  const email = existingEmail.value;
  const password = existingPass.value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      location.replace("./index.html");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
};

loginBtn.addEventListener("click", loginFunc);

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log(user, uid);
    // ...
  } else {
    // User is signed out
    // ...
  }
});
