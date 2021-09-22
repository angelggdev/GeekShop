import './ItemCount.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const ItemCount = (props) =>{
    const [counter, setCounter] = useState(1);
    const [cartProducts, setCartProducts] = useState([]);

    let productsToAdd = [];

    const onAdd = (operation) => {
        if (operation === "add" && counter < props.product.stock){
        setCounter(counter + 1);
        } 
        if (operation === "substract" && counter > 1){
        setCounter(counter - 1);
        }
    }

    const addItemToCart = () => {
        props.addToCart();
        productsToAdd.push({...props.product, 'quantity':counter});
        console.log(productsToAdd);
        setCartProducts(productsToAdd);
    }

    return(
        <div>
            <div className="counter">
                {   
                    cartProducts.length === 0?
                    <div className="counter">
                        <button className="button btn" onClick={()=> {onAdd("substract")}} disabled={counter === 1? true : false} >
                            <FontAwesomeIcon icon={faMinus} size='xs' fixedWidth color={counter === 1 ? 'grey' : 'red'}/>
                        </button>
                        <span>{counter}</span>
                        <button className="button btn" onClick={()=> {onAdd("add")}} disabled={counter === props.product.stock? true : false} >
                            <FontAwesomeIcon icon={faPlus} size='xs' fixedWidth color={counter === props.product.stock ? 'grey' : 'green'}/>
                        </button>
                    </div>
                    :
                    <div>
                        <p>
                            ¡Continúa al carrito para finalizar tu compra!
                        </p>
                    </div>
                }
            </div>
            <div className="addToCart">
                <button className="btn btn-dark" onClick={addItemToCart} >Agregar al carrito</button>
            </div>
        </div>
    )
  
}

export default ItemCount;