// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_UQgHmCM3iUCP7DnCdx2MrYOd8Jnl2hE",
  authDomain: "netflixgpt-b6689.firebaseapp.com",
  projectId: "netflixgpt-b6689",
  storageBucket: "netflixgpt-b6689.firebasestorage.app",
  messagingSenderId: "785296648589",
  appId: "1:785296648589:web:6538985a285b0f1e83f5c4",
  measurementId: "G-KHM5RGZ5PL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);