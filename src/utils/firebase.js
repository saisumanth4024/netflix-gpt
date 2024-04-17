// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUjBJTnRi6qOSfHz9x7D7Ovlkk8msF0k0",
  authDomain: "netflixgpt-b1d08.firebaseapp.com",
  projectId: "netflixgpt-b1d08",
  storageBucket: "netflixgpt-b1d08.appspot.com",
  messagingSenderId: "382631770617",
  appId: "1:382631770617:web:30e89055c0b250b238a528",
  measurementId: "G-PSH1K2TBKZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
