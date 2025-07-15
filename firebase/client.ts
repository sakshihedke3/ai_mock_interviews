import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIBsXtehNfES1mFBB8uihSW_5TOQWbZho",
  authDomain: "prepedge-da86c.firebaseapp.com",
  projectId: "prepedge-da86c",
  storageBucket: "prepedge-da86c.firebasestorage.app",
  messagingSenderId: "367491266663",
  appId: "1:367491266663:web:6ca7c8e49308ace5fafcc2",
  measurementId: "G-T4438ZNCRD"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);