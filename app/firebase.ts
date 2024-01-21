// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCG5Mwk8zbLgJwp2lAj1J_-BHOt55XCSN8",
  authDomain: "demonext-ts-tailwind-firestore.firebaseapp.com",
  projectId: "demonext-ts-tailwind-firestore",
  storageBucket: "demonext-ts-tailwind-firestore.appspot.com",
  messagingSenderId: "651579384138",
  appId: "1:651579384138:web:fe473d7e8045dd38f4e1b3",
  measurementId: "G-VNJPB3EVEW"
};

// Firebaseアプリの初期化
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { app, db, collection, addDoc, getDocs };
