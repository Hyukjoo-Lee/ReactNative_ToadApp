// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1ci8VN1bscpYW9Y2jhVNlO5wpgdaxdqA",
  authDomain: "toad-43336.firebaseapp.com",
  projectId: "toad-43336",
  storageBucket: "toad-43336.appspot.com",
  messagingSenderId: "138508252713",
  appId: "1:138508252713:web:4f03aa334fec1fbe0dce38",
  measurementId: "G-SE11ZG7ZXE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };
