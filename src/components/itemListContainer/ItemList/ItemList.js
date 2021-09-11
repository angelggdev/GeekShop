import './ItemList.css';
import {useState, useEffect} from 'react';
import Item from './Item/Item';

const ItemList = (props) =>{
    const [itemList, setItemList] = useState([]);
    
    const itemsObject = [
        {
            id:0,
            title:"Set de Dados",
            description:"",
            price: "$500",
            pictureUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Dados_4_a_20_caras.jpg"
        },
        {
            id:1,
            title:"Medias Homero Simpson",
            description:"",
            price: "$700",
            pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_905550-MLA46376901856_062021-F.webp"
        },
        {
            id:2,
            title:"Varita Harry Potter",
            description:"",
            price: "$2500",
            pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_934439-MLA47414036903_092021-F.webp"
        },
        {
            id:3,
            title:"Mate Groot",
            description:"",
            price: "$1700",
            pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_774122-MLA31654585075_082019-F.webp"
        },
        {
            id:4,
            title:"Funko Pop! - Raiden",
            description:"",
            price: "$3500",
            pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_810523-MLA41055769946_032020-F.webp"
        },
        {
            id:5,
            title:"Llavero Capitán America",
            description:"",
            price: "$500",
            pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_913941-MLA43493853441_092020-F.webp"
        },
    ]

    useEffect(()=>{
        new Promise((resolve)=>{
            setTimeout(() => {
                resolve(itemsObject);
            }, 2000)
            }
        )
        .then((res) => setItemList(res))
      }, [])

    return(
        <div className="itemList">
            {
                itemList[0]?
                itemList.map((x, i) =>{
                    return(
                        <Item 
                            key={x.id}
                            counter={props.counter} 
                            onAdd={props.onAdd} 
                            addToCart={props.addToCart}
                            title={x.title}
                            price={x.price}
                            pictureUrl={x.pictureUrl}
                        >

                        </Item>
                    )
                })
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

export default ItemList;