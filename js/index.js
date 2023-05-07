// Sử dụng để setup kết nối tới cơ sở dữ liệu bên ngoài
import { initializeApp } from "firebase/app";

const init = () => {
    console.log("Windows Loaded");
    // Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdOeE7Hi0QeC9L9fjlGOgdlzM_T4II8rY",
  authDomain: "haha-yes-f2d6f.firebaseapp.com",
  projectId: "haha-yes-f2d6f",
  storageBucket: "haha-yes-f2d6f.appspot.com",
  messagingSenderId: "288852192920",
  appId: "1:288852192920:web:b14fa35eb625828dd4eaed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  
    view.setActiveScreen("loginScreen");
  }
  
  
  window.onload = init;