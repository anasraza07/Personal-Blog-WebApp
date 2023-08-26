import { auth, createUserWithEmailAndPassword } from "./firebase.js";

const signupBtn = document.getElementById("signup");
const signupFunc = () => {
  const firstName = document.getElementById("fName");
  const lastName = document.getElementById("lName");
  const email = document.getElementById("email");
  const firstPassword = document.getElementById("password");
  const repeatPassword = document.getElementById("repeat-password");
  // const user = auth.currentUser;
  // let displayName = "";
  // if (user !== null) {
  //   displayName = firstName + lastName;
  // }
  let password = " ";
  if (firstPassword.value === repeatPassword.value)
    password = firstPassword.value;
  else {
    console.log("password doesn't match");
  }
  console.log(email.value, password);

  createUserWithEmailAndPassword(auth, email.value, password)
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
signupBtn.addEventListener("click", signupFunc);
