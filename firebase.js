import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: 'AIzaSyBwDU-KckNTpZkeL8KoIw0MHYjPQxCAZGQ',
    authDomain: 'react-native-chat-bf2eb.firebaseapp.com',
    projectId: 'react-native-chat-bf2eb',
    storageBucket: 'react-native-chat-bf2eb.appspot.com',
    messagingSenderId: '948719084317',
    appId: '1:948719084317:web:0b396e0dbb10309571b7f4',
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };