// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection , addDoc , doc, setDoc , getDocs, updateDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALTRZJmDYRSKZVrEWhdyUrRAcaoCHI6WY",
  authDomain: "data-base-paga-tu-factura.firebaseapp.com",
  projectId: "data-base-paga-tu-factura",
  storageBucket: "data-base-paga-tu-factura.appspot.com",
  messagingSenderId: "1096077144976",
  appId: "1:1096077144976:web:502ff303d3145dad12f915"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app); // Pass 'app' to getFirestore

export const getTask = () => getDocs(collection(db, 'task'))
