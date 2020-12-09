
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB6VKfMf23rucoG7usajtHpStBnLJf3Wus",
    authDomain: "facebook-fa8c3.firebaseapp.com",
    projectId: "facebook-fa8c3",
    storageBucket: "facebook-fa8c3.appspot.com",
    messagingSenderId: "352297444186",
    appId: "1:352297444186:web:63997d0ee429ca8b858963",
    measurementId: "G-H9731QXBTY"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

// Option 1: Access Firebase services via the defaultProject variable
const auth = firebaseApp.auth();
const db = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider;

export default db;
export {auth, provider};