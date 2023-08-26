import { auth, onAuthStateChanged, signOut } from "./firebase.js";

const signoutBtn = document.getElementById("signout");

onAuthStateChanged(auth, (user) => {
  if (user) {
    // console.log(location.pathname);
    if (location.pathname !== "/index.html") {
      location.href = "./index.html";
    }
    console.log(user);
    // ...
  } else {
    // if (location.pathname !== "/signup.html")
    //  {
    location.replace("./login.html");
    // }
    // console.log("user not found");
    // User is signed out
    // ...
  }
});

// console.log(signoutBtn);

const signoutFunc = () => {
  signOut(auth)
    .then(() => {})
    .catch((error) => {
      // An error happened.
      // console.log(error);
    });
};

signoutBtn.addEventListener("click", signoutFunc);
