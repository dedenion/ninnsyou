// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjxzrIWM95etfEEEM-g-8jb7WSqDprCgk",
  authDomain: "fir-login-tutorial-740f7.firebaseapp.com",
  projectId: "fir-login-tutorial-740f7",
  storageBucket: "fir-login-tutorial-740f7.appspot.com",
  messagingSenderId: "137415997691",
  appId: "1:137415997691:web:fc550f7984e3863111985e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth,provider};
