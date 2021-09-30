import './Item.css';
import ItemCount from './itemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Item = (props) =>{
    const [isAdded, setIsAdded] = useState(false);

    const goToCart = () => {
        setIsAdded(true);
    }

    return(
        <div className="item" >
            <h5 className="title">{props.product.title}</h5>
            <div className="imageContainer">
                <img src={props.product.pictureUrl} className="image" alt={props.product.title}/>
            </div>
            <h6 className="price">${props.product.price}</h6>
            <Link to={`/item/${props.product.id}`} className="detailsButton btn btn-secondary">Ver Detalles</Link>
            <div>
                <hr />
                {
                    !isAdded?
                    <ItemCount className="itemCount" product={props.product} goToCart={goToCart}/>
                    :
                    <div className="addToCart">
                        <Link to='/cart' className="btn btn-dark" >Terminar mi compra</Link>
                    </div>
                }
            </div>            
        </div>
    )
  
}

export default Item;