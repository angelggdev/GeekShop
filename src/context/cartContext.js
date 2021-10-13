import React, { createContext, useState } from "react";
import { createOrder } from '../services/firebase/firebase';


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

    const addItem = (item) => {
        if (!isInCart(item.id)){
            let cartList = cartItems;
            cartList.push(item);
            setCartItems(cartList); 
        } else {
            let cartList = cartItems;
            for (let i = 0; i < cartList.length; i++) {
                if(cartList[i].id === item.id){
                    cartList[i].quantity =  cartList[i].quantity + item.quantity;
                }
            }
            setCartItems(cartList);
        }
        setBadge(badge + item.quantity)
    }

    const saveOrder = (name, phone, email) => {
        setSendingOrder(true)
        createOrder(name, phone, email, cartItems, getTotal())
        .then((res) => {
            setNotification(res);
            setCartItems([]);
            setBadge(0);
        })  
        .catch((err) => {
            setNotification(err);
        })          
        .finally(() => {
            setSendingOrder(false);
            setShowModal(true);
        })
    }


    return(
        <CartContext.Provider
            value={{
                functions:{
                removeItem,
                clear,
                saveOrder,
                getTotal,
                setShowModal,
                addItem
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