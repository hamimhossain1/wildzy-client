// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlatLyoFuCqswqwPdmxs0TBryR4yAiwpo",
  authDomain: "wildzy-client.firebaseapp.com",
  projectId: "wildzy-client",
  storageBucket: "wildzy-client.appspot.com",
  messagingSenderId: "423953543609",
  appId: "1:423953543609:web:226e4085afa56803c4c668"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;