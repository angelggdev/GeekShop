import './ItemListContainer.css';
import ItemList from './ItemList/ItemList.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';


const ItemListContainer = (props) =>{
    const [itemList, setItemList] = useState([]);
    const {categoryId} = useParams();

    
    useEffect(()=>{
        new Promise((resolve)=>{
            setTimeout(() => {
                resolve(props.products);
            }, 2000)
        }
        )
        .then((res) => {
            if(!categoryId){
                setItemList(res);
            } else {
                let categoryList = [];
                for (let index = 0; index < res.length; index++) {
                    if (res[index].categoryId === parseInt(categoryId)){
                        categoryList.push(res[index]);
                    }
                }
                setItemList(categoryList)
            }
        })
        return () =>{
            setItemList([]);
        }
    }, [categoryId]) 
    

    return(
        <div className="container">
            <div>
                <ItemList 
                    itemList={itemList}
                    counter={props.counter} 
                    onAdd={props.onAdd} 
                    addToCart={props.addToCart} 
                />
            </div>
            
        </div>
    )
}

export default ItemListContainer;