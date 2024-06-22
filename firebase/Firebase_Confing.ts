import { initializeApp, getApp } from "firebase/app";
import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkbCxDAleJgsmwURK8aomReuR0H0MNzSs",
  authDomain: "k-store-app.firebaseapp.com",
  projectId: "k-store-app",
  storageBucket: "k-store-app.appspot.com",
  messagingSenderId: "185116595877",
  appId: "1:185116595877:web:0f94becd026e373b0c5f4c",
  measurementId: "G-N3F5H7JY30",
};

// Initialize Firebase

// initialize Firebase App
const app = initializeApp(firebaseConfig);
// initialize Firebase Auth for that app immediately
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

 
export { app, auth, getApp, getAuth };