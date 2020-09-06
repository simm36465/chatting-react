import firebase from "firebase";

const firebaseApp =firebase.initializeApp({

        apiKey: "AIzaSyBSOJAkCFoJpjWO06T1bZ6731sKdHGS1U8",
        authDomain: "messenger-11419.firebaseapp.com",
        databaseURL: "https://messenger-11419.firebaseio.com",
        projectId: "messenger-11419",
        storageBucket: "messenger-11419.appspot.com",
        messagingSenderId: "1069084056149",
        appId: "1:1069084056149:web:f89fce1b0bb8c2087f92dc",
        measurementId: "G-B58V81WZMW"
      
    });
    const db = firebaseApp.firestore();
    export default db;