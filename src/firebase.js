import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase setup
const firebaseConfig = {
  apiKey: "YOUR_REAL_API_KEY",
  authDomain: "reactapp3-90e8a.firebaseapp.com",
  projectId: "reactapp3-90e8a",
  storageBucket: "reactapp3-90e8a.firebasestorage.app",
  messagingSenderId: "623232558913",
  appId: "YOUR_REAL_APP_ID"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);