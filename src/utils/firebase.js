// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKIb-jSb9xCeJpQue18bAw7C8VClftmZQ",
  authDomain: "netflixgpt-ac3c2.firebaseapp.com",
  projectId: "netflixgpt-ac3c2",
  storageBucket: "netflixgpt-ac3c2.appspot.com",
  messagingSenderId: "967873855656",
  appId: "1:967873855656:web:cc06c31e36947087ee029d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
