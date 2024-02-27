// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection ,  addDoc } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyAl1Ck-bY8PuNnHOkjIbuNF1MlOz7fXCNs",
authDomain: "paga-tu-factura.firebaseapp.com",
projectId: "paga-tu-factura",
storageBucket: "paga-tu-factura.appspot.com",
messagingSenderId: "186022243789",
appId: "1:186022243789:web:b6e42882d4d712eb02e884"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore()


export const datos = (cod , empresa) => {
  addDoc(collection(db , 'factura') , {cod, empresa})
}