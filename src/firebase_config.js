import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBJ_J7oBgd4OY1Q31t1TrTAoUMXrCCSbNo",
    authDomain: "captain-gemini.firebaseapp.com",
    databaseURL: "https://captain-gemini-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "captain-gemini",
    storageBucket: "captain-gemini.appspot.com",
    messagingSenderId: "1030022871437",
    appId: "1:1030022871437:web:2a695347691bde2954e5c4",
    measurementId: "G-6Y33F8NTHD"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };