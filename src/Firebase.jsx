// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSPcoYhqRVvdsiPI8dtBAcmEMtpCLZjAo",
  authDomain: "instachatter-c9ede.firebaseapp.com",
  projectId: "instachatter-c9ede",
  storageBucket: "instachatter-c9ede.appspot.com",
  messagingSenderId: "17656609133",
  appId: "1:17656609133:web:51ef9ddd9631591d404264"
};

// Initialize Firebase
let app;
try {
  app = initializeApp(firebaseConfig);
  console.log("Firebase initialized successfully");
} catch (error) {
  console.error("Error initializing Firebase", error);
}
export const auth =getAuth(app);
export const db=getFirestore(app);