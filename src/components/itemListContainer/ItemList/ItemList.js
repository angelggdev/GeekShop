import './ItemList.css';
import Item from './Item/Item';

const ItemList = (props) =>{
    
    
    return(
        <div className="itemList">
            {
                props.itemList.length !== 0?
                props.itemList.map((x, i) =>{
                    return(
                        <Item 
                            key={x.id}
                            addToCart={props.addToCart}
                            product={x}
                            /* id={x.id}
                            title={x.title}
                            price={x.price}
                            pictureUrl={x.pictureUrl} */
                        />
                    )
                })
                :
                <div className="loading">
                    <div className="spinner-border " role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            
            }
        </div>
        
                
    )
  
}

export default ItemList;