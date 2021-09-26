import './Cart.css';
import {useContext, useEffect, useState} from 'react';
import CartContext from '../../../context/cartContext';
import CartItem from './cartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
    const {functions, cartItems} = useContext(CartContext);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let priceSum = 0;
        for (let i = 0; i < cartItems.length; i++) {
            priceSum += (cartItems[i].price)*(cartItems[i].quantity)
        }
        setTotalPrice(priceSum);
    }, [cartItems])

    return(
        <div className="cartContainer container">
            <h1>Carrito</h1>
            {
                cartItems.length !== 0 ?
                <div>
                    {
                        cartItems.map((x, i) =>{
                            return(
                                <CartItem
                                    key={i}
                                    product={x}
                                />
                            ) 
                        })
                    }
                    <div>
                        <h3>Precio Total: <strong>${totalPrice}</strong></h3>
                        <button className="btn btn-dark" onClick={functions.clear}>Limpiar</button>
                    </div>
                </div>
                :
                <h2>Tu carrito está vacío, ir al <Link to='/' className="cartLink">Inicio</Link></h2>
            }
        </div>
    )
}

export default Cart