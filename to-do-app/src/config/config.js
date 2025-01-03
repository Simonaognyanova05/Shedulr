import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBOzv1zALoQVp8lEYvE4QciZ0h6KBudYHI",
  authDomain: "to-do-app-9c069.firebaseapp.com",
  projectId: "to-do-app-9c069",
  storageBucket: "to-do-app-9c069.firebasestorage.app",
  messagingSenderId: "331675279765",
  appId: "1:331675279765:web:e4032998baa5b6798c169c",
  measurementId: "G-4L9EZ904QR"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);