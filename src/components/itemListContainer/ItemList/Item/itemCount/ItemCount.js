import './ItemCount.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const ItemCount = (props) =>{


    return(
        <div>
            <div className="counter">
                <button className="button btn" onClick={()=> {props.onAdd("substract")}} disabled={props.counter === 1? true : false} >
                    <FontAwesomeIcon icon={faMinus} size='xs' fixedWidth color={props.counter === 1 ? 'grey' : 'red'}/>
                </button>
                <p>{props.counter}</p>
                <button className="button btn" onClick={()=> {props.onAdd("add")}} disabled={props.counter === 10? true : false} >
                    <FontAwesomeIcon icon={faPlus} size='xs' fixedWidth color={props.counter === 10 ? 'grey' : 'green'}/>
                </button>
            </div>
            <button className="btn btn-dark" onClick={props.addToCart}>Agregar al carrito</button>
        </div>
    )
  
}

export default ItemCount;