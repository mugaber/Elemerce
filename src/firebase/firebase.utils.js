import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBlExMWUAWOjlyteQCVn0eiIYm1lPN7osU",
  authDomain: "ecommerce-app-web.firebaseapp.com",
  databaseURL: "https://ecommerce-app-web.firebaseio.com",
  projectId: "ecommerce-app-web",
  storageBucket: "ecommerce-app-web.appspot.com",
  messagingSenderId: "271043848412",
  appId: "1:271043848412:web:44696330f27e1f0c5b6c19",
  measurementId: "G-DZQNEMKRNP"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

// activate the google auth in firebase 

export default firebase;
