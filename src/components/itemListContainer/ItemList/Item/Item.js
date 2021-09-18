import './Item.css';
import ItemCount from './itemCount/ItemCount';
import { Link } from 'react-router-dom';

const Item = (props) =>{


    return(
        <div className="item" >
            <h5 className="title">{props.title}</h5>
            <div className="imageContainer">
                <img src={props.pictureUrl} className="image" alt="article"/>
            </div>
            <h6 className="price">{props.price}</h6>
            <Link to={`/item/${props.id}`} className="detailsButton btn btn-secondary">Ver Detalles</Link>
            <div>
                <hr />
                <ItemCount className="itemCount" counter={props.counter} onAdd={props.onAdd} addToCart={props.addToCart}/>
            </div>            
        </div>
    )
  
}

export default Item;