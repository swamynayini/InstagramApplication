// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBs1xtabpfPUG0qHh4ISDiiF62WknLz_NY",
  authDomain: "instagram-bdd4a.firebaseapp.com",
  projectId: "instagram-bdd4a",
  storageBucket: "instagram-bdd4a.appspot.com",
  messagingSenderId: "252088354279",
  appId: "1:252088354279:web:4c46aa5005c11e8e32a942",
  measurementId: "G-7LNCFFMFCK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();