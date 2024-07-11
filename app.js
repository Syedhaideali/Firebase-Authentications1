 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import{
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword,
  }
   from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
   import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
   }
   from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
  const firebaseConfig = {
    apiKey: "AIzaSyBl6hvJDqCU49IOb2V9HwlZ0Emmq6cE8Z0",
    authDomain: "hi-webdev.firebaseapp.com",
    projectId: "hi-webdev",
    storageBucket: "hi-webdev.appspot.com",
    messagingSenderId: "102721225042",
    appId: "1:102721225042:web:aaed70b2d958de56d87a8b",
    measurementId: "G-B7ZPNKMEYT"
  };

  const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
console.log("app-->", app);
console.log("auth-->", auth);
console.log("db", db);



const email = document.getElementById("signupEmail");
const password = document.getElementById("signupPass");
const signupBtn = document.getElementById("signupBtn");

const loginEmail = document.getElementById("loginEmail");
const loginPass = document.getElementById("loginPass");
const loginBtn = document.getElementById("loginBtn");

const authContainer = document.getElementById("authContainer");
const user_container = document.getElementById("user_container");

const userEmail = document.getElementById("userEmail");
const logoutBtn = document.getElementById("logoutBtn");

signupBtn.addEventListener('click', createUserAccount);
loginBtn.addEventListener('click', login);
logoutBtn.addEventListener('click', logout);

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("user is logged in!");
    const uid = user.uid;
    authContainer.style.display = "none";
    user_container.style.display = "block";
    userEmail.innerHTML = user.email;
  } else {
    console.log("user is not logged in!");
    authContainer.style.display = "block";
    user_container.style.display = "none";
  }
});


function createUserAccount() {
// console.log("email =>", signupEmail.value);
// console.log("pass =>", signupPass.value);
createUserWithEmailAndPassword(auth, signupEmail.value, signupPass.value)
.then((userCredential) => {
  const user = userCredential.user;
  console.log("user =>", user);
  // ...
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  alert(errorMessage);
  // ..
});
}


function login() {
//console.log("email =>", loginEmail.value);
// console.log("pass =>", loginPass.value);//
signInWithEmailAndPassword(auth, loginEmail.value, loginPass.value)
.then((userCredential) => {
  const user = userCredential.user;
  console.log("user =>", user);
  // ...
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  alert(errorMessage);
});
}

function logout() {
signOut(auth).then(() => {
// Sign-out successful.
}).catch((error) => {
// An error happened.
});

}