import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVGwkFQMEGlKKPW4tUaRx33rxMJNe-c7U",
  authDomain: "quzar-io.firebaseapp.com",
  projectId: "quzar-io",
  storageBucket: "quzar-io.firebasestorage.app",
  messagingSenderId: "1031395201015",
  appId: "1:1031395201015:web:654187995d4185b51268f2"
};

// Prevent re-initialization in Next.js dev mode (HMR)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);
export const auth = getAuth(app);
