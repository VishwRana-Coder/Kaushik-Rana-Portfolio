// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSDsVMPhZ983cvhRlPf_SJRJpPa-R5Xs8",
  authDomain: "kaushik-portfolio-4c7d5.firebaseapp.com",
  projectId: "kaushik-portfolio-4c7d5",
  storageBucket: "kaushik-portfolio-4c7d5.appspot.com",
  messagingSenderId: "454723170440",
  appId: "1:454723170440:web:49a5cdc690361d14796f3d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db, collection, addDoc };