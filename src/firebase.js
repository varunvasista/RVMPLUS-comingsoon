// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"; // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzq5THqK8PtHrBLregIbz2knzBKeQjOGQ",
  authDomain: "rvmplus-c826a.firebaseapp.com",
  projectId: "rvmplus-c826a",
  storageBucket: "rvmplus-c826a.appspot.com",
  messagingSenderId: "170950964681",
  appId: "1:170950964681:web:8fc054ac44a5cef630a418",
  measurementId: "G-W5XLH6BXJZ"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
export { storage, db };
