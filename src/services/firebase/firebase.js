import * as firebase from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import { 
    collection, 
    getDocs, 
    query, 
    where, 
    getDoc, 
    doc,
    addDoc,
    Timestamp,
    writeBatch
} from 'firebase/firestore';

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


export const createOrder = (name, phone, email, products, totalPrice) => {
    return new Promise ((resolve, reject) => {
        const items = []
        products.forEach((item)=>{
            items.push(
                {
                    id: item.id,
                    title: item.title,
                    price: item.price*item.quantity,
                    quantity: item.quantity
                }
            )
        })
        const orderToSave = {
            buyer: {
                name: name,
                phone: phone,
                email: email
            },
            items: items,
            date: Timestamp.fromDate(new Date()),
            price: totalPrice
        }
    
        const batch = writeBatch(db);
        const outOfStock = [];
    
        async function checkStock () {
            for (const item of orderToSave.items) {
                await getDoc(doc(db, 'items', item.id))
                .then(DocumentSnapshot => {
                    if(DocumentSnapshot.data().stock >= item.quantity) {
                        batch.update(doc(db, 'items', DocumentSnapshot.id), {
                            stock: DocumentSnapshot.data().stock - item.quantity
                        })
                    } else {
                        outOfStock.push({...DocumentSnapshot.data(), id: DocumentSnapshot.id})
                    }
                })
            }
            /* orderToSave.items.forEach((prod, i) => {
                getDoc(doc(db, 'items', prod.id))
                .then(DocumentSnapshot => {
                    if(DocumentSnapshot.data().stock >= orderToSave.items[i].quantity) {
                        batch.update(doc(db, 'items', DocumentSnapshot.id), {
                            stock: DocumentSnapshot.data().stock - orderToSave.items[i].quantity
                        })
                    } else {
                        outOfStock.push({...DocumentSnapshot.data(), id: DocumentSnapshot.id})
                    }
                })
            }) */
        }
        checkStock()
        .then(() => {
            let notification;
            if(outOfStock.length === 0){
                addDoc(collection(db, 'orders'), orderToSave)
                .then((res) => {
                    batch.commit()
                    .then(() => {
                        notification = <p>¡La orden se ha ejecutado con éxito! <br /> El id de su orden es {res.id}</p>;
                        resolve(['success', notification]);
                    })
                })
                .catch((err) => {
                    reject(['error', `¡Oops! Hubo un error al procesar la orden, por favor intente de nuevo`])
                })
            } else {
                notification = `¡Oops! Parece que nos quedamos sin stock ${outOfStock.length >1? `de los productos ${outOfStock.map((x, i) => `${x.title}, `)}` : `del producto ${outOfStock[0].title}`}. ¡Lo sentimos mucho!`;
                resolve(['error', notification]);
            }        
        })
    })
}