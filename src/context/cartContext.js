import React, { createContext, useState } from "react";
import { 
    collection, addDoc, getDoc, doc ,
    Timestamp, writeBatch 
 } from "@firebase/firestore";
import { db } from '../services/firebase/firebase';


const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cartItems, setCartItems] = useState([]);
    const [badge, setBadge] = useState(0);
    const [sendingOrder, setSendingOrder] = useState(false);
    const [notification, setNotification] = useState('');
    const [showModal, setShowModal] = useState(false);


    const isInCart = (id) => {
        let itemIsInCart = false;
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].id === id){
                itemIsInCart = true;
            }
        }
        return itemIsInCart;
    }

    const removeItem = (itemId) => {
        let cartList = [];
        let quantity ;
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].id !== itemId){
                cartList.push(cartItems[i]);
            } else {
                quantity = cartItems[i].quantity
            }
        }
        setCartItems(cartList);
        setBadge(badge - quantity);
    }

    const clear = () => {
        setCartItems([]);
        setBadge(0);
    }

    const getTotal = () => {
        let priceSum = 0;
        for (let i = 0; i < cartItems.length; i++) {
            priceSum += (cartItems[i].price)*(cartItems[i].quantity)
        }
        return priceSum;
    }

    const saveOrder = (name, phone, email) => {
        setSendingOrder(true)
        const items = []
        cartItems.forEach((item)=>{
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
            price: getTotal()
        }

        const batch = writeBatch(db);
        const outOfStock = [];

        orderToSave.items.forEach((prod, i) => {
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
            .then(() => {
                if(outOfStock.length === 0){
                    addDoc(collection(db, 'orders'), orderToSave)
                    .then((res) => {
                        batch.commit()
                        .then(() => {
                            setNotification(`¡La orden se ha ejecutado con éxito! El id de su orden es ${res.id}`);
                        })
                        .catch((error) => {
                            setNotification('¡Oops! Hubo un error al procesar la orden');
                        })
                        .finally(() => {
                            setSendingOrder(false);
                            setCartItems([]);
                            setBadge(0);
                            setShowModal(true);
                        })
                    })
                } else {
                    setNotification(`¡Oops! Parece que nos quedamos sin stock ${outOfStock.length >1? `de los productos ${outOfStock.map((x, i) => `${x.title}, `)}` : `del producto ${outOfStock[0].title}`}. ¡Lo sentimos mucho!`)
                    setShowModal(true);
                    setSendingOrder(false);
                }
            })
        })

    }


    return(
        <CartContext.Provider
            value={{
                functions:{
                removeItem,
                clear,
                isInCart,
                setCartItems,
                setBadge,
                saveOrder,
                getTotal,
                setShowModal
                },
                badge,
                cartItems,
                sendingOrder,
                notification,
                showModal
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;