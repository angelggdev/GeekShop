import * as firebase from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import { collection, getDocs, query, where, getDoc, doc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
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