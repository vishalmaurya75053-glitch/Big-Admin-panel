// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBOR_hJGJHHe8tyFVZdVYPuWYCiP2HANvY",
  authDomain: "big-hack-7e648.firebaseapp.com",
  databaseURL: "https://big-hack-7e648-default-rtdb.firebaseio.com",
  projectId: "big-hack-7e648",
  storageBucket: "big-hack-7e648.firebasestorage.app",
  messagingSenderId: "548309261317",
  appId: "1:548309261317:web:5bf9adfbbbe6e29dfd506c",
  measurementId: "G-T2Y6TRGMHF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };