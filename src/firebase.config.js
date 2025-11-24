// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjaS9ExmJFedkwnt-lz6tBYNW3bDNzU0M",
  authDomain: "intense-zoo-446612-k4.firebaseapp.com",
  projectId: "intense-zoo-446612-k4",
  storageBucket: "intense-zoo-446612-k4.firebasestorage.app",
  messagingSenderId: "817967355818",
  appId: "1:817967355818:web:0b01777fddb1af28117dd3",
  measurementId: "G-FPTXS1XCCS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;