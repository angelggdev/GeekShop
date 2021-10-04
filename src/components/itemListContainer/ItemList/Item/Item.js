import './Item.css';
import ItemCount from './itemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Item = (props) =>{
    const [isAdded, setIsAdded] = useState(false);

    const goToCart = () => {
        setIsAdded(true);
    }

    return(
        <div className="item" >
            <div className="imageContainer">
                <img src={props.product.pictureUrl} className="image" alt={props.product.title}/>
            </div>
            <h5 className="title">{props.product.title}</h5>
            <h5 className="price">${props.product.price}</h5>
            <div className='itemButtons'>
                <hr />
                {
                    !isAdded?
                    <ItemCount  product={props.product} goToCart={goToCart}/>
                    :
                    <div className="addToCart">
                        <Link to='/cart' className="btn addToCartButton" >Terminar mi compra</Link>
                    </div>
                }
                <Link to={`/item/${props.product.id}`} className="seeDetails btn">
                    <FontAwesomeIcon icon={faEye} size='1x' fixedWidth color='#ff8b2b' className='itemButton'/>
                </Link>
            </div>            
        </div>
    )
  
}

export default Item;