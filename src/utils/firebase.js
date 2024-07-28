// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-a0b1d.firebaseapp.com",
  projectId: "taskmanager-a0b1d",
  storageBucket: "taskmanager-a0b1d.appspot.com",
  messagingSenderId: "593406547975",
  appId: "1:593406547975:web:1427e6d07a8868025032a2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
