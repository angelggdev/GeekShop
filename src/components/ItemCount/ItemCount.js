import './ItemCount.css';
import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import CartContext from '../../context/cartContext';
import Button from 'react-bootstrap/Button'

const ItemCount = (props) =>{
    const { functions} = useContext(CartContext);
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
        const productToAdd = {
            ...props.product,
            'quantity':counter
        }
        functions.addItem(productToAdd);
        props.goToCart();
    }  

    return(
        <div>
            {
                props.product.stock > 0?
                <>
                    <div >
                        <div className="counter">
                            <Button variant='none' className="button" onClick={()=> {onAdd("substract")}} disabled={counter === 1? true : false} >
                                <FontAwesomeIcon icon={faMinus} size='xs' fixedWidth color={counter === 1 ? 'grey' : 'red'}/>
                            </Button>
                            <span>{counter}</span>
                            <Button variant='none' className="button" onClick={()=> {onAdd("add")}} disabled={counter === props.product.stock? true : false} >
                                <FontAwesomeIcon icon={faPlus} size='xs' fixedWidth color={counter === props.product.stock ? 'grey' : 'green'}/>
                            </Button>
                        </div>
                    </div>
                    <div className="addToCart">
                        <Button variant='none' className="addToCartButton" onClick={addProduct} >Agregar al carrito</Button>
                    </div>
                </>
                :
                <div>
                    <h5>Sin stock</h5>
                </div>
            }
        </div>
    )
  
}

export default ItemCount;