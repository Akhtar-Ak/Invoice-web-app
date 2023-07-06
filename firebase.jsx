// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA93vf_zqHdU3Aw5XBTkMgXrsBS2ZfxsPE",
  authDomain: "quickbook-3c9d0.firebaseapp.com",
  projectId: "quickbook-3c9d0",
  storageBucket: "quickbook-3c9d0.appspot.com",
  messagingSenderId: "677091467565",
  appId: "1:677091467565:web:e28d2ee6425c9d58b473a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export const db =getFirestore(app);
export default auth;