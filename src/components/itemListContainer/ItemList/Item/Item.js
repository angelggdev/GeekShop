import './Item.css';
import ItemCount from './itemCount/ItemCount';

const Item = (props) =>{


    return(
        <div className="item" >
            <h5 className="title">{props.title}</h5>
            <div className="imageContainer">
                <img src={props.pictureUrl} className="image" alt="article"/>
            </div>
            <h6 className="price">{props.price}</h6>
            <button className="detailsButton btn btn-secondary" onClick={() => {props.seeDetailsView(props.id)}}>Ver Detalles</button>
            <div>
                <hr />
                <ItemCount className="itemCount" counter={props.counter} onAdd={props.onAdd} addToCart={props.addToCart}/>
            </div>            
        </div>
    )
  
}

export default Item;