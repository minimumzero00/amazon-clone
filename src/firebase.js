import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'; //성준이형꺼
import 'firebase/compat/auth'; //성준이형꺼

const firebaseConfig = {
    apiKey: "AIzaSyBgWIH4Dc7g0FDBHUPBzpEXPx8ORhPIwTY",
    authDomain: "clone-a859f.firebaseapp.com",
    projectId: "clone-a859f",
    storageBucket: "clone-a859f.appspot.com",
    messagingSenderId: "800794525361",
    appId: "1:800794525361:web:f0c0f95a142fa1f89eec90",
    measurementId: "G-6F7SVM70T0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db , auth };