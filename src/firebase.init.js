// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAcVg8i5s5mnf1hL9fqQmBUiirxSbQqLdw",
    authDomain: "ass-11-perfume-world.firebaseapp.com",
    projectId: "ass-11-perfume-world",
    storageBucket: "ass-11-perfume-world.appspot.com",
    messagingSenderId: "519735871957",
    appId: "1:519735871957:web:c740714c04be126a3e555c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;