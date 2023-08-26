import {
  auth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "./firebase.js";
const loginBtn = document.getElementById("login");

onAuthStateChanged(auth, (user) => {
  if (user) {
    if (location.pathname !== "/index.html") {
      location.href = "./index.html";
    }
    // console.log(user);
    // ...
  } else {
    if (location.pathname !== "/login.html") {
      location.replace("./login.html");
    }
    // User is signed out
    // ...
  }
});

const loginFunc = () => {
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  // const email = existingEmail.value;
  // const password = existingPass.value;

  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      location.replace("./index.html");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMessage,
      });
      console.log(errorCode);
      console.log(errorMessage);
    });
};

loginBtn.addEventListener("click", loginFunc);

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/auth.user
//     // const uid = user.uid;
//     console.log(user);
//     // ...
//   } else {
//     console.log("User is signed out");
//     // ...
//   }
// });
