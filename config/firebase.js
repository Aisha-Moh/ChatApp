import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAXTqyJ4fUTEC69oLnCPEerFJIalP1opwc",
  authDomain: "chatapp-v2-8b18e.firebaseapp.com",
  projectId: "chatapp-v2-8b18e",
  storageBucket: "chatapp-v2-8b18e.appspot.com",
  messagingSenderId: "928266043432",
  appId: "1:928266043432:web:752c46538e9d78cbfeb51d",
};
// initialize firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore();
export const db = getFirestore(app);
