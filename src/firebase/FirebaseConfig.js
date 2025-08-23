// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGcD_I-52QNz3TnQptn3dC0YsAQD8FmcI",
  authDomain: "portfolio-2a60f.firebaseapp.com",
  projectId: "portfolio-2a60f",
  storageBucket: "portfolio-2a60f.firebasestorage.app",
  messagingSenderId: "652721301924",
  appId: "1:652721301924:web:3a8052d406202769373931"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

export default app;