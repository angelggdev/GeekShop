import './ItemList.css';
import Item from './Item/Item';

const ItemList = (props) =>{
    
    
    return(
        <div className="itemList">
            {
                props.itemList.length !== 0 &&
                props.itemList.map((x, i) =>{
                    return(
                        <Item 
                            key={x.id}
                            product={x}
                        />
                    )
                })
            }
        </div>
        
                
    )
  
}

export default ItemList;