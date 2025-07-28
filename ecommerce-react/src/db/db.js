import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJSaT4HpkXz_IzlzuWPjLlRGS-oi5CgdA",
    authDomain: "ecommerce-react-abete.firebaseapp.com",
    projectId: "ecommerce-react-abete",
    storageBucket: "ecommerce-react-abete.firebasestorage.app",
    messagingSenderId: "472353854189",
    appId: "1:472353854189:web:ee24c4b39604b25c7732e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore();

export default db;