import 'dotenv/config';
  
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: "backend-node-4a0fe",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: "146810081418", // Add this to .env if missing
  appId: process.env.FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };//ahi tengo guardada la referencia a la base de datos