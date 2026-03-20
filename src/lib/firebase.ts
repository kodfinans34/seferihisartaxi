import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCh4ekOSLytHP8iViNkNVBh9KJpEQADu74",
  authDomain: "taksi-14aab.firebaseapp.com",
  projectId: "taksi-14aab",
  storageBucket: "taksi-14aab.firebasestorage.app",
  messagingSenderId: "218533353881",
  appId: "1:218533353881:web:0fb59cd3dec985bed99b08",
  measurementId: "G-PLGE9F55F2"
};

// Initialize Firebase (prevent duplicate init in dev mode)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
