import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
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

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
};
