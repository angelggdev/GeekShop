import './ItemListContainer.css';
import ItemList from './ItemList/ItemList.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { db } from '../../services/firebase/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore'; 

const ItemListContainer = (props) =>{
    const [itemList, setItemList] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryName} = useParams();

    useEffect(() => {
        if(!categoryName){
            setLoading(true);
            getDocs(collection(db, 'items'))
            .then((querySnapshot) => {
                const products = querySnapshot.docs.map(doc => {
                    return {id: doc.id, ...doc.data()}
                })
                setItemList(products);
            })
            .catch((error) => {
                console.log('Error searching items', error);
            })
            .finally(() => {
                setLoading(false);
            })
        } else {
            setLoading(true);
            getDocs(query(collection(db, 'items'), where('category', '==', categoryName)))
            .then((querySnapshot) => { 
                const products = querySnapshot.docs.map(doc => {
                    return {id: doc.id, ...doc.data()}
                })
                setItemList(products);
            })
            .catch((error) => {
                console.log('Error searching items', error);
            })
            .finally(() => {
                setLoading(false);
            })
        }
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