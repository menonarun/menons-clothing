import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyB9Gh4ttYr4kwoKwLKAJVh_woeR5cbujEE",
    authDomain: "clothing-app-6c73d.firebaseapp.com",
    databaseURL: "https://clothing-app-6c73d.firebaseio.com",
    projectId: "clothing-app-6c73d",
    storageBucket: "",
    messagingSenderId: "856176676574",
    appId: "1:856176676574:web:9984bacbd2e0831a"
  };

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promt:'select_account'});
  export const signInWithGoogle =()=>auth.signInWithPopup(provider);

  export default firebase;  