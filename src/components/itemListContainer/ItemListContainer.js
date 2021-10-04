import './ItemListContainer.css';
import ItemList from './ItemList/ItemList.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getProducts } from '../../services/firebase/firebase';


const ItemListContainer = (props) =>{
    const [itemList, setItemList] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryName} = useParams();

    useEffect(() => {
        setLoading(true);
        getProducts('category', '==', categoryName)
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
        <div className="itemListContainer container-fluid">
            {   
                !loading?
                <div>
                    <ItemList 
                        itemList={itemList}
                    />
                </div>
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

export default ItemListContainer;