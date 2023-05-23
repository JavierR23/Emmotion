// Import the functions you need from the SDKs you need
const firebase = require('firebase/app');
require('firebase/firestore');

const firebaseConfig = {
  // Tu configuración de Firebase aquí
  apiKey: "fJUCQuCOtrT0PDV05BcchdthmX6p9dgOU3f3TwAi",

  authDomain: "emotionr-8ec41.firebaseapp.com",

  databaseURL: "https://emotionr-8ec41-default-rtdb.firebaseio.com/",

  projectId: "emotionr-8ec41",

  storageBucket: "emotionr-8ec41.appspot.com",

  messagingSenderId: "700411728008",

  appId: "1:700411728008:web:f58ca1c26fc03a10700f3d",
  
  measurementId: "G-LNT1ETWSBZ"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

