import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBxcEwVEJDTootzcpC_vh2MtkON_d1mzaE",
  authDomain: "to-do-app-75326.firebaseapp.com",
  projectId: "to-do-app-75326",
  storageBucket: "to-do-app-75326.firebasestorage.app",
  messagingSenderId: "538369216379",
  appId: "1:538369216379:web:de796e3f2db0c76af2f7de"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);