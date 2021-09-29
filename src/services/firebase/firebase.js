import * as firebase from 'firebase/app';
import {getFirestore} from 'firestore/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDkZoKmtxD5C21wK-gK_Y3K46Mk3zVcsBY",
    authDomain: "geek-shop-4f202.firebaseapp.com",
    projectId: "geek-shop-4f202",
    storageBucket: "geek-shop-4f202.appspot.com",
    messagingSenderId: "897582697618",
    appId: "1:897582697618:web:a0b3bf26c3336829f2ea4b"
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () =>{
    return app
}

export const db = getFirestore(app);