// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzYeoRulvXuFF_Sj85crQOl_U-P-O7SR4",
  authDomain: "test-91f8c.firebaseapp.com",
  projectId: "test-91f8c",
  storageBucket: "test-91f8c.appspot.com",
  messagingSenderId: "775132358869",
  appId: "1:775132358869:web:86aa18fe4f53d804059a5c",
  measurementId: "G-EG61579SE5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);

export {app,auth};