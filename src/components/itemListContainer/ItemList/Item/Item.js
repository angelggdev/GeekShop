import './Item.css';
import ItemCount from './itemCount/ItemCount';
import { Link } from 'react-router-dom';

const Item = (props) =>{
    


    return(
        <div className="item" >
            <h5 className="title">{props.product.title}</h5>
            <div className="imageContainer">
                <img src={props.product.pictureUrl} className="image" alt="article"/>
            </div>
            <h6 className="price">${props.product.price}</h6>
            <Link to={`/item/${props.product.id}`} className="detailsButton btn btn-secondary">Ver Detalles</Link>
            <div>
                <hr />
                <ItemCount className="itemCount" product={props.product}/>
            </div>            
        </div>
    )
  
}

export default Item;