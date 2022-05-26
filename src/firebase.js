// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFnSD_ixVzQQG4fMgjCn6J_COHZNuYlPI",
  authDomain: "react-login-d008c.firebaseapp.com",
  projectId: "react-login-d008c",
  storageBucket: "react-login-d008c.appspot.com",
  messagingSenderId: "163124978723",
  appId: "1:163124978723:web:d91a53770c125393767d96"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
