import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css';



const CartWidget = () =>{
    return(
        <div>
            <button className="cartWidget btn position-relative" data-bs-toggle="button" >
                <FontAwesomeIcon icon={faShoppingCart} size='2x' fixedWidth color='antiquewhite' className="clickable"/>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">4</span>
            </button>
        </div>
    )
}

export default CartWidget;