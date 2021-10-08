import * as firebase from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import { collection, getDocs, query, where, getDoc, doc } from 'firebase/firestore'; 

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

export const getDocuments = (col, isOneItem, filter, operator, compareTo) => {
    let firebasePromise;
    if(isOneItem){
        firebasePromise = getDoc(doc(db, col, compareTo))
    } else {
        if(!compareTo) {
            firebasePromise = getDocs(collection(db, col))
        } else {
            firebasePromise = getDocs(query(collection(db, col), where(filter, operator, compareTo)));
        } 
    }
    
    return new Promise ((resolve, reject) => {
        firebasePromise
        .then((querySnapshot) => {
            resolve(() => {
                if(isOneItem){
                    const item = { id: querySnapshot.id, ...querySnapshot.data()}
                    return item;
                } else{
                    const items = querySnapshot.docs.map(doc => {
                    return {id: doc.id, ...doc.data()}
                    })
                    return items;
                }
            })
        })
        .catch((error) => {
            reject(() => error);
        })
    })
}