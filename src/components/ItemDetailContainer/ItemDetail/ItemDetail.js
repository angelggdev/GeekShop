import './ItemDetail.css';
import ItemCount from '../../itemCount/ItemCount';
import { Link } from 'react-router-dom';
import {useState} from 'react';
import Button from 'react-bootstrap/Button'

const Item = (props) =>{
    const [isAdded, setIsAdded] = useState(false);

    const goToCart = () => {
        setIsAdded(true);
    }

    return(
        <div className="box">
            {
                props.product.title?
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
                    <Button variant='none' className="detailsButtonDetail">
                        <Link to={process.env.PUBLIC_URL + "/"}>Menos Detalles</Link>
                    </Button>
                        <div>
                            <hr />
                            {
                                !isAdded?
                                <ItemCount className="itemCountDetail"
                                    product={props.product}
                                    goToCart={goToCart}
                                />
                                :
                                <Button variant='none' className="addToCart">
                                    <Link to={process.env.PUBLIC_URL + "/cart"} className="addToCartButton" >Terminar mi compra</Link>
                                </Button>
                            }
                        </div> 
                    </div>        
                </div>
                :
                <div className='notFound'>
                    <h1>Producto no encontrado</h1>
                </div>
            }
        </div>
    )
  
}

export default Item;