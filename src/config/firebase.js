import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDr7zH3i1fIxWufxuRHpwNzTGsNJVqGUrU",
  authDomain: "speakeasy-203c7.firebaseapp.com",
  projectId: "speakeasy-203c7",
  storageBucket: "speakeasy-203c7.appspot.com",
  messagingSenderId: "657403888220",
  appId: "1:657403888220:web:5d8e49dbfd6c15a7c55c99",
  measurementId: "G-222P8FC0ZJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
