import './ItemDetailContainer.css';
import ItemDetail from './ItemDetail/ItemDetail.js';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { db } from '../../services/firebase/firebase';
import { doc, getDoc } from 'firebase/firestore'; 

const ItemDetailContainer = (props) =>{
    const {id} = useParams();
    const [productView, setProductView] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setLoading(true);
        getDoc(doc(db, 'items', id))
        .then((querySnapshot) => {
            const product = { id: querySnapshot.id, ...querySnapshot.data()}
            setProductView(product); 
        })
        .catch((error) => {
            console.log('Error searching items', error);
        })
        .finally(() => {
            setLoading(false); 
        })
    }, [id])

    

    return(
        <div className="container">
            {
                !loading?
                <ItemDetail 
                    product={productView}
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