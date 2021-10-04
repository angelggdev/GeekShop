import './ItemDetail.css';
import ItemCount from '../../itemListContainer/ItemList/Item/itemCount/ItemCount';
import { Link } from 'react-router-dom';
import {useState} from 'react';

const Item = (props) =>{
    const [isAdded, setIsAdded] = useState(false);

    const goToCart = () => {
        setIsAdded(true);
    }

    return(
        <div className="box">
            <div className="itemDetail" >
                <h5 className="titleDetail">{props.product.title}</h5>
                <div className="imageContainerDetail">
                    <img src={props.product.pictureUrl} className="imageDetail" alt={props.product.title}/>
                </div>
                <div className="descriptionDetail">
                    <p>{props.product.description}</p>
                </div>
                <h6 className="priceDetail">${props.product.price}</h6>
                <div className="buttons">
                <Link to='/' className="detailsButtonDetail btn">Menos Detalles</Link>
                    <div>
                        <hr />
                        {
                            !isAdded?
                            <ItemCount className="itemCountDetail"
                                product={props.product}
                                goToCart={goToCart}
                            />
                            :
                            <div className="addToCart">
                                <Link to='/cart' className="btn addToCartButton" >Terminar mi compra</Link>
                            </div>
                        }
                    </div> 
                </div>        
            </div>
        </div>
    )
  
}

export default Item;