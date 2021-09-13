import './ItemListContainer.css';
import ItemList from './ItemList/ItemList.js';

const ItemListContainer = (props) =>{
    return(
        <div className="container">
            <div>
                <ItemList 
                    counter={props.counter} 
                    onAdd={props.onAdd} 
                    addToCart={props.addToCart} 
                    seeDetailsView={props.seeDetailsView}
                />
            </div>
            
        </div>
    )
}

export default ItemListContainer;