import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQmMrlvNz0DZB5FBdSj8DT5ooBYhh5SYo",
  authDomain: "trabajofinalreact-e90bc.firebaseapp.com",
  projectId: "trabajofinalreact-e90bc",
  storageBucket: "trabajofinalreact-e90bc.appspot.com",
  messagingSenderId: "406484046827",
  appId: "1:406484046827:web:17eddcf5654b7813f07fae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)