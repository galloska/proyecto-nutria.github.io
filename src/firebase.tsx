import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAd1umFFun1Z4nnZ8PmPEzHQ4XpD-vUczM",
  authDomain: "nutria-system.firebaseapp.com",
  databaseURL: "https://nutria-system.firebaseio.com",
  projectId: "nutria-system",
  storageBucket: "nutria-system.appspot.com",
  messagingSenderId: "699042785509",
  appId: "1:699042785509:web:48cfcf48015e9f64adcc0c"
};

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();