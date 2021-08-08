import firebase from "firebase"

//import config details from Firebase

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db =firebaseApp.firestore();

const auth = firebaseApp.auth();

export {db, auth};