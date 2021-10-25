import './Item.css';
import ItemCount from '../../../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button'

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
                    <Button variant='none' className="addToCart">
                        <Link to={process.env.PUBLIC_URL + "/cart"} className="addToCartButton" >Terminar mi compra</Link>
                    </Button>
                }
                <Button variant='none' className="seeDetails">
                    <Link to={process.env.PUBLIC_URL + `/item/${props.product.id}`} >
                        <FontAwesomeIcon icon={faEye} size='1x' fixedWidth color='#ff8b2b' className='itemButton'/>
                    </Link>
                </Button>
            </div>            
        </div>
    )
  
}

export default Item;