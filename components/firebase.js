// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDpBe0_SQcuB_R8QGmVlBKLKi7PQuMsWHk",
    authDomain: "leetcodeboard-a4354.firebaseapp.com",
    projectId: "leetcodeboard-a4354",
    storageBucket: "leetcodeboard-a4354.appspot.com",
    messagingSenderId: "295643806492",
    appId: "1:295643806492:web:ccfd0568d142ea869998d9",
    measurementId: "G-KQ36M989W9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore, analytics };