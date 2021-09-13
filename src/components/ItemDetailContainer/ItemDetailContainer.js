import './ItemDetailContainer.css';
import ItemDetail from './ItemDetail/ItemDetail.js';
import {useState, useEffect} from 'react';

const ItemDetailContainer = (props) =>{
    const [productView, setProductView] = useState();
    
    const itemsObject = [
        {
            id:0,
            title:"Set de Dados",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            price: "$500",
            pictureUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Dados_4_a_20_caras.jpg"
        },
        {
            id:1,
            title:"Medias Homero Simpson",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            price: "$700",
            pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_905550-MLA46376901856_062021-F.webp"
        },
        {
            id:2,
            title:"Varita Harry Potter",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            price: "$2500",
            pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_934439-MLA47414036903_092021-F.webp"
        },
        {
            id:3,
            title:"Mate Groot",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            price: "$1700",
            pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_774122-MLA31654585075_082019-F.webp"
        },
        {
            id:4,
            title:"Funko Pop! - Raiden",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            price: "$3500",
            pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_810523-MLA41055769946_032020-F.webp"
        },
        {
            id:5,
            title:"Llavero Capitán America",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
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
        .then((res) => setProductView(res[props.productDetails]))
      }, [])

    return(
        <div className="container">
            {
                productView !== undefined?
                <ItemDetail 
                    seeDetailsView={props.seeDetailsView}
                    productDetails={props.productDetails}
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