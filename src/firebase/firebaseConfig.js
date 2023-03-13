// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCa20piCfObzh80uTdRVNflCeMfcGMWUhk",
    authDomain: "fb-papabearsupply.firebaseapp.com",
    projectId: "fb-papabearsupply",
    storageBucket: "fb-papabearsupply.appspot.com",
    messagingSenderId: "730830890690",
    appId: "1:730830890690:web:5209de36e0bd2b899cbd5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore ( app );

