import './ItemDetail.css';
import ItemCount from '../../itemListContainer/ItemList/Item/itemCount/ItemCount';

const Item = (props) =>{


    return(
        <div className="box">
            <div className="itemDetail" >
                <h5 className="titleDetail">{props.title}</h5>
                <div className="imageContainerDetail">
                    <img src={props.pictureUrl} className="imageDetail" alt="article"/>
                </div>
                <div className="descriptionDetail">
                    <p>{props.description}</p>
                </div>
                <h6 className="priceDetail">{props.price}</h6>
                <div class="buttons">
                <button className="detailsButtonDetail btn btn-secondary" onClick={props.seeDetailsView}>Menos Detalles</button>
                    <div>
                        <hr />
                        <ItemCount className="itemCountDetail" counter={props.counter} onAdd={props.onAdd} addToCart={props.addToCart}/>
                    </div> 
                </div>        
            </div>
        </div>
    )
  
}

export default Item;