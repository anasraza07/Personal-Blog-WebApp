import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
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

const signupBtn = document.getElementById("signup");

const firstName = document.getElementById("fName");
const lastName = document.getElementById("lName");
const userEmail = document.getElementById("user-email");
const userPass = document.getElementById("user-password");
const userRepeatPass = document.getElementById("user-repeat-password");

const signupFunc = () => {
  const user = auth.currentUser;
  let displayName = "";
  if (user !== null) {
    displayName = firstName + lastName;
  }
  let password = "";
  if (userPass.value === userRepeatPass.value) {
    password = userPass.value;
  } else {
    console.log("password doesn't match");
  }
  const email = userEmail.value;
  //   console.log(email, password);
  createUserWithEmailAndPassword(auth, email, password, displayName)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("user: ", user);
      location.replace("./login.html");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
};
// console.log(signupBtn);

signupBtn.addEventListener("click", signupFunc);
