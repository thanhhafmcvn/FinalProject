// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBz1oSQWOCgqGfjqW0ET9Bs-6jzcgWX5ug",
  authDomain: "final-project-mindx.firebaseapp.com",
  projectId: "final-project-mindx",
  storageBucket: "final-project-mindx.appspot.com",
  messagingSenderId: "805321268395",
  appId: "1:805321268395:web:48c8e668cbae469005abee",
  measurementId: "G-3FLL08W0QV",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
