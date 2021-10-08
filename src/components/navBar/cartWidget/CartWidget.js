import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../../../context/cartContext';
import { Badge } from 'react-bootstrap';


const CartWidget = () =>{
    const {badge} = useContext(CartContext);

    return(
        <div>
            <Link to={process.env.PUBLIC_URL + "/cart"} className="cartWidget" data-bs-toggle="button" >
                <FontAwesomeIcon icon={faShoppingCart} size='2x' fixedWidth className="clickable"/>
                {
                    badge !== 0 &&
                    <Badge pill bg='white' text='danger' className="cartBadge">
                        {badge}
                    </Badge> 
                }
            </Link>
        </div>
    )
}

export default CartWidget;