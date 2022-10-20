import firebase from 'firebase';
import 'firebase/firebase-firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBVzYaBJCkB_3tI7w7e_LuzufqnHGKh_NY',
  authDomain: 'mymoney-a18ac.firebaseapp.com',
  projectId: 'mymoney-a18ac',
  storageBucket: 'mymoney-a18ac.appspot.com',
  messagingSenderId: '520529478637',
  appId: '1:520529478637:web:e9910556bdc8dc0eafdde4',
};

//init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
