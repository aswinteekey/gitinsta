import Firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

//import seed file here


const config = {
 apiKey: "AIzaSyDFg2IV6Bzpr5rB6NSi6E2rRBnmGhDpVAw",
  authDomain: "again-5b708.firebaseapp.com",
  databaseURL: "https://again-5b708-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "again-5b708",
  storageBucket: "again-5b708.appspot.com",
  messagingSenderId: "922203314030",
  appId: "1:922203314030:web:3e74ed734aa41b1a6dd37f" 
};
const firebase = Firebase.initializeApp(config)
const {FieldValues}=Firebase.firestore;

//call seed file only once


export{firebase,FieldValues};
