import './ItemList.css';
import Item from './Item/Item';

const ItemList = (props) =>{
    return(
        <div className="itemList">
            {
                props.itemList.length !== 0 ?
                props.itemList.map((x, i) =>{
                    return(
                        <Item 
                            key={x.id}
                            product={x}
                        />
                    )
                })
                :
                <div className='notFound'>
                    <h1>No se encontraron productos en la categoría seleccionada</h1>
                </div>
            }
        </div>       
    )
}

export default ItemList;