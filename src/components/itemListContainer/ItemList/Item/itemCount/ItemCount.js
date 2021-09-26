import './ItemCount.css';
import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import CartContext from '../../../../../context/cartContext';
import { Link } from 'react-router-dom'; 

const ItemCount = (props) =>{
    const { functions } = useContext(CartContext);
    const [counter, setCounter] = useState(1);

    const onAdd = (operation) => {
        if (operation === "add" && counter < props.product.stock){
        setCounter(counter + 1);
        } 
        if (operation === "substract" && counter > 1){
        setCounter(counter - 1);
        }
    }

    const addProduct = () => {
        const newProduct = {
            ...props.product,
            'quantity':counter
        }
        functions.addItems(newProduct);
    } 

    return(
        <div>
            {
                !functions.isInCart(props.product.id) ?
                <>
                    <div className="counter">
                        <div className="counter">
                            <button className="button btn" onClick={()=> {onAdd("substract")}} disabled={counter === 1? true : false} >
                                <FontAwesomeIcon icon={faMinus} size='xs' fixedWidth color={counter === 1 ? 'grey' : 'red'}/>
                            </button>
                            <span>{counter}</span>
                            <button className="button btn" onClick={()=> {onAdd("add")}} disabled={counter === props.product.stock? true : false} >
                                <FontAwesomeIcon icon={faPlus} size='xs' fixedWidth color={counter === props.product.stock ? 'grey' : 'green'}/>
                            </button>
                        </div>
                    </div>
                    <div className="addToCart">
                        <button className="btn btn-dark" onClick={addProduct} >Agregar al carrito</button>
                    </div>
                </>
                :
                <div className="addToCart">
                    <Link to='/cart' className="btn btn-dark" >Terminar mi compra</Link>
                </div>

            }
        </div>
    )
  
}

export default ItemCount;