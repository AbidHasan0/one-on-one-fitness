// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyBMRjzdhSBHDY-2_2VoJ53wlz5LXcNrbCs",
   authDomain: "one-on-one-fitness-9b849.firebaseapp.com",
   projectId: "one-on-one-fitness-9b849",
   storageBucket: "one-on-one-fitness-9b849.appspot.com",
   messagingSenderId: "1064667532837",
   appId: "1:1064667532837:web:300976eb82365c9d6cb9cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;