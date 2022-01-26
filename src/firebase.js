// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAyVtSYM8YSMBx8ainike9DkBPubkQDd00",
    authDomain: "learn-firebase-react-259e5.firebaseapp.com",
    projectId: "learn-firebase-react-259e5",
    storageBucket: "learn-firebase-react-259e5.appspot.com",
    messagingSenderId: "583124504664",
    appId: "1:583124504664:web:58a4d628fc415dd4c1ba2d"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

const db = getFirestore();

export { db };
