import './ItemListContainer.css';
import ItemList from './ItemList/ItemList.js';

const ItemListContainer = (props) =>{
    return(
        <div className="container">
            <div>
                <ItemList counter={props.counter} onAdd={props.onAdd} addToCart={props.addToCart}/>
            </div>
            
        </div>
    )
}

export default ItemListContainer;