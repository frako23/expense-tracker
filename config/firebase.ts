// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "@firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCaS7Uv_X1KP3tGmvzgxEUUDOz-LrzYUxA",
    authDomain: "expense-tracker-869c6.firebaseapp.com",
    projectId: "expense-tracker-869c6",
    storageBucket: "expense-tracker-869c6.firebasestorage.app",
    messagingSenderId: "78082369695",
    appId: "1:78082369695:web:032ca2112c19ffb2f81aaa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//auth
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

//db
export const firestore = getFirestore(app);