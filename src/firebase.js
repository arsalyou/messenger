
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwePt0qOY2fEu2NANiUlq-C33k4PgYkeM",
  authDomain: "message-15fe6.firebaseapp.com",
  projectId: "message-15fe6",
  storageBucket: "message-15fe6.appspot.com",
  messagingSenderId: "667117393515",
  appId: "1:667117393515:web:216b59fe57e5d9ce30032e",
  measurementId: "G-5P1YHJJLZB"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

// Option 1: Access Firebase services via the defaultProject variable
const auth = firebaseApp.auth();
const db = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider;

export default db;
export {auth, provider};