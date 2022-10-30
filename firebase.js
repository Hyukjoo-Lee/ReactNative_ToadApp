import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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
