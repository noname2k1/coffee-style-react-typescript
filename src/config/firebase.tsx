// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
    getAuth,
    GoogleAuthProvider,
    // FacebookAuthProvider,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyCEwUAe8ahopqvk01-o291a3iRs6OQfqYA',
    authDomain: 'fir-coffee-e692b.firebaseapp.com',
    projectId: 'fir-coffee-e692b',
    storageBucket: 'fir-coffee-e692b.appspot.com',
    messagingSenderId: '776298915144',
    appId: '1:776298915144:web:367f9c599280b22a26ff7d',
    measurementId: 'G-NLNQPR98D6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
// export const facebookProvider = new FacebookAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
