// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import{getAuth, createUserWithEmail, signInWithEmail} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import {getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBnmw6svOxZB-Iyxdb1HMlCDu4O_ZbDUhE",
  authDomain: "online-shopping-ca257.firebaseapp.com",
  projectId: "online-shopping-ca257",
  storageBucket: "online-shopping-ca257.firebasestorage.app",
  messagingSenderId: "953003188941",
  appId: "1:953003188941:web:25a3f47cc396308cc23f84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const signUp=document.getElementById('newsletter');
signUp.addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.getElementById('newsletter').value;
    const auth=getAuth();
    const db=getFirestore();

    createUserWithEmail(auth, email)
    .then((userCredential) => {
        const user=userCredential.user;
        const userData={
            email: email
        };
    })

})