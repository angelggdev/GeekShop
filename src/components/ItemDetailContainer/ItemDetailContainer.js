import './ItemDetailContainer.css';
import ItemDetail from './ItemDetail/ItemDetail.js';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { getDocuments } from '../../services/firebase/firebase';
import { Container, Spinner } from 'react-bootstrap';

const ItemDetailContainer = (props) =>{
    const {id} = useParams();
    const [productView, setProductView] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setLoading(true);
        getDocuments('items', true, false, false, id)
        .then((res) => {
            setProductView(res); 
        })
        .catch((error) => {
            console.log('Error searching items', error);
        })
        .finally(() => {
            setLoading(false); 
        })
    }, [id])

    

    return(
        <Container>
            {
                !loading?
                <ItemDetail 
                    product={productView}
                />
                :
                <div className="loading">
                    <Spinner animation="grow" />
                </div>
            
            }
        </Container>  
    )
}

export default ItemDetailContainer;