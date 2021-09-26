import './ItemListContainer.css';
import ItemList from './ItemList/ItemList.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';


const ItemListContainer = (props) =>{
    const [itemList, setItemList] = useState([]);
    const {categoryId} = useParams();

    
    useEffect(()=>{
        //cuando cambio categoryId se dispara la promesa luego de renderizar la app
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
            //cuando cambia categoryId se dispara un re-render de la app
            setItemList([]);
        }
    }, [categoryId]) 
    

    return(
        <div className="container-fluid">
            <div>
                <ItemList 
                    itemList={itemList}
                />
            </div>
        </div>
    )
}

export default ItemListContainer;