import './ItemListContainer.css';

const ItemListContainer = (props) =>{
    return(
        <div className="container">
            <div>
                {props.children}
            </div>
            
        </div>
    )
}

export default ItemListContainer;