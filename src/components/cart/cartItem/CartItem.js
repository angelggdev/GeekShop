import './CartItem.css';
import {useContext} from 'react';
import CartContext from '../../../context/cartContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button'

const CartItem = (props) =>{
    const {functions} = useContext(CartContext);

    return(
        <div className="cartItem" >
            <h5 className="cartTitle">
                <Link to={process.env.PUBLIC_URL + `/item/${props.product.id}`} className="cartLink">
                    {props.product.title}
                </Link>
            </h5>
            <div className="flex">
                <h6 className="cartPrice">${props.product.price}</h6>
                <div>
                    <h6>x {props.product.quantity}</h6>
                </div>
                <Button variant='none' className="removeButton" onClick={() => functions.removeItem(props.product.id)}>
                    <FontAwesomeIcon icon={faTrashAlt} size='lg' color='antiquewhite' className="clickable"/>
                </Button>
            </div>
            
        </div>
    )
  
}

export default CartItem;