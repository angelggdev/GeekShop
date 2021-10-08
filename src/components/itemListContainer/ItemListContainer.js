import './ItemListContainer.css';
import ItemList from './ItemList/ItemList.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getDocuments } from '../../services/firebase/firebase';
import { Container, Spinner } from 'react-bootstrap';


const ItemListContainer = (props) =>{
    const [itemList, setItemList] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryName} = useParams();

    useEffect(() => {
        setLoading(true);
        getDocuments('items', false, 'category', '==', categoryName)
        .then((res) => {
            setItemList(res);
        })
        .catch((error) =>{
            console.log(error);
        })
        .finally(() => {
            setLoading(false);
        })
    }, [categoryName]); 
    

    return(
        <Container className="itemListContainer">
            {   
                !loading?
                <div>
                    <ItemList 
                        itemList={itemList}
                    />
                </div>
                :
                <div className="loading">
                    <Spinner animation="grow" />
                </div>
            }
        </Container>
    )
}

export default ItemListContainer;