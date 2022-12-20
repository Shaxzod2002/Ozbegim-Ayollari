// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6xATbUeBB_XnWg3igemUaXZC0CIAkuAs",
  authDomain: "o-zbegim-ayollari.firebaseapp.com",
  projectId: "o-zbegim-ayollari",
  storageBucket: "o-zbegim-ayollari.appspot.com",
  messagingSenderId: "235136524808",
  appId: "1:235136524808:web:85059f9a7162aa9965a7bd",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
// project-235136524808