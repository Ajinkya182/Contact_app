

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChmrtvF_OrDgf7QieQQLBR3fT2fDHGLXo",
  authDomain: "fbase-9818a.firebaseapp.com",
  projectId: "fbase-9818a",
  storageBucket: "fbase-9818a.appspot.com",
  messagingSenderId: "800510445513",
  appId: "1:800510445513:web:d3bab5214701d30cc04a18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
