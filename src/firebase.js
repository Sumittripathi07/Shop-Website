import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDqMpRSgbtdLxo8G1bupHUwP4wERpVlyVE",
    authDomain: "rn-traders-c8f70.firebaseapp.com",
    databaseURL: "https://rn-traders-c8f70-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "rn-traders-c8f70",
    storageBucket: "rn-traders-c8f70.appspot.com",
    messagingSenderId: "209701508747",
    appId: "1:209701508747:web:427775148166b9d743668e",
    measurementId: "G-VK38CKZXQX"
  };
  
  firebase.initializeApp(firebaseConfig)

  export default firebase;