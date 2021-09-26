import React, { createContext, useState } from "react";


const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cartItems, setCartItems] = useState([]);
    const [badge, setBadge] = useState(0);

    const isInCart = (id) => {
        let itemIsInCart = false;
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].id === id){
                itemIsInCart = true;
            }
        }
        return itemIsInCart;
    }

    const addItems = (item) => {
        if (!isInCart(item.id)){
            let cartList = cartItems;
            cartList.push(item);
            setCartItems(cartList);
            setBadge(badge + item.quantity);
        }
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


    return(
        <CartContext.Provider
            value={{
                functions:{
                addItems,
                removeItem,
                clear,
                isInCart
                },
                badge,
                cartItems,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;