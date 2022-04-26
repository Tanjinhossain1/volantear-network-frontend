// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU9c32k1dgtktLGTTwCwFjb_07ZrP6zEM",
  authDomain: "volunteer-network-90252.firebaseapp.com",
  projectId: "volunteer-network-90252",
  storageBucket: "volunteer-network-90252.appspot.com",
  messagingSenderId: "183340701211",
  appId: "1:183340701211:web:0104f73fb773ec8f1c4abe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;