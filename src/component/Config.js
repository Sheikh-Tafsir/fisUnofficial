import firebase from 'firebase/compat/app';
import {initializeApp} from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBP7cQ50tQAh2YDjYlcd84ukrz7zxxL_Mg",
    authDomain: "iutfis.firebaseapp.com",
    databaseURL: "https://iutfis-default-rtdb.firebaseio.com",
    projectId: "iutfis",
    storageBucket: "iutfis.appspot.com",
    messagingSenderId: "551309305847",
    appId: "1:551309305847:web:a087bf574e9c6672cc70f2",
    measurementId: "G-EB8J4S1YV3"
}

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}
export { firebase };