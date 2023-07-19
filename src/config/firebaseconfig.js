// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import firebase from "firebase/app";
import "firebase/database"

import "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoL1OfoOXoke2JQVblnokxgZ3yeeX34XA",
  authDomain: "mercday-3063d.firebaseapp.com",
  projectId: "mercday-3063d",
  storageBucket: "mercday-3063d.appspot.com",
  messagingSenderId: "557738525031",
  appId: "1:557738525031:web:6f2c9d588f28e741592fc2"
};


// Initialize Firebase

  firebase.initializeApp(firebaseConfig)

 const database = firebase.firebase()

export default database;