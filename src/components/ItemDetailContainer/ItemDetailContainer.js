import './ItemDetailContainer.css';
import ItemDetail from './ItemDetail/ItemDetail.js';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router';

const ItemDetailContainer = (props) =>{
    const {id} = useParams();
    const [productView, setProductView] = useState();

    useEffect(()=>{
        new Promise((resolve)=>{
            setTimeout(() => {
                resolve(props.products);
            }, 2000)
            }
        )
        .then((res) => setProductView(res[id]))
      }, [])

    return(
        <div className="container">
            {
                productView !== undefined?
                <ItemDetail 
                    counter={props.counter} 
                    onAdd={props.onAdd} 
                    addToCart={props.addToCart} 
                    id={productView.id}
                    title={productView.title}
                    description={productView.description}
                    price={productView.price}
                    pictureUrl={productView.pictureUrl}
                />
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

export default ItemDetailContainer;