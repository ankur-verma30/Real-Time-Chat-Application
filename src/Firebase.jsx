// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBSPcoYhqRVvdsiPI8dtBAcmEMtpCLZjAo",
  authDomain: "instachatter-c9ede.firebaseapp.com",
  projectId: "instachatter-c9ede",
  storageBucket: "instachatter-c9ede.appspot.com",
  messagingSenderId: "17656609133",
  appId: "1:17656609133:web:51ef9ddd9631591d404264"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);