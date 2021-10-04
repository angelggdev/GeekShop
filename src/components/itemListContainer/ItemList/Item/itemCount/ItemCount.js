import './ItemCount.css';
import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import CartContext from '../../../../../context/cartContext';

const ItemCount = (props) =>{
    const { functions, cartItems, badge } = useContext(CartContext);
    const [counter, setCounter] = useState(1);
    const [itemIsInCart, setItemIsInCart] = useState(false); 

    useEffect(() => {
        setItemIsInCart(functions.isInCart(props.product.id));
    }, []) 

    const onAdd = (operation) => {
        if (operation === "add" && counter < props.product.stock){
        setCounter(counter + 1);
        } 
        if (operation === "substract" && counter > 1){
        setCounter(counter - 1);
        }
    }

    const addProduct = () => {
        const newProduct = {
            ...props.product,
            'quantity':counter
        }
        if (!itemIsInCart){
            let cartList = cartItems;
            cartList.push(newProduct);
            functions.setCartItems(cartList); 
        } else {
            let cartList = cartItems;
            for (let i = 0; i < cartList.length; i++) {
                if(cartList[i].id === newProduct.id){
                    cartList[i].quantity =  cartList[i].quantity + counter;
                }
            }
            functions.setCartItems(cartList);
        }
        functions.setBadge(badge + newProduct.quantity)
        props.goToCart();
    }  

    return(
        <div>
            <div className="counter">
                <div className="counter">
                    <button className="button btn" onClick={()=> {onAdd("substract")}} disabled={counter === 1? true : false} >
                        <FontAwesomeIcon icon={faMinus} size='xs' fixedWidth color={counter === 1 ? 'grey' : 'red'}/>
                    </button>
                    <span>{counter}</span>
                    <button className="button btn" onClick={()=> {onAdd("add")}} disabled={counter === props.product.stock? true : false} >
                        <FontAwesomeIcon icon={faPlus} size='xs' fixedWidth color={counter === props.product.stock ? 'grey' : 'green'}/>
                    </button>
                </div>
            </div>
            <div className="addToCart">
                <button className="btn addToCartButton" onClick={addProduct} >Agregar al carrito</button>
            </div>
        </div>
    )
  
}

export default ItemCount;