import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDGqjPo6EJmWHpBM3G1QAutPUyzm2cHCxU",
    authDomain: "chat-in-realtime.firebaseapp.com",
    projectId: "chat-in-realtime",
    storageBucket: "chat-in-realtime.appspot.com",
    messagingSenderId: "261229847297",
    appId: "1:261229847297:web:d5dbb1f922e1dede29b100"
  };


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }