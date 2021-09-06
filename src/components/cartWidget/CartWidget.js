import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css';



const CartWidget = (props) =>{
    return(
        <div>
            <button className="cartWidget btn position-relative" data-bs-toggle="button" >
                <FontAwesomeIcon icon={faShoppingCart} size='2x' fixedWidth color='antiquewhite' className="clickable"/>
                {
                    props.cartItems !== 0 &&
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {props.cartItems}
                    </span> 
                }
            </button>
        </div>
    )
}

export default CartWidget;