import {useState} from 'react';
import './App.css';
import NavBar from './components/navBar/NavBar';
import Footer from './components/Footer/Footer.js';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {

  const [cartItems, setCartItems] = useState(0);


  const categories = [
    {
      category:"Cine/TV",
      id:0
    },
    {
      category:"Juegos de Mesa",
      id:1
    },
    {
      category:"Videojuegos",
      id:2
    }
  ]
  const products = [
    {
      id:0,
      title:"Set de Dados",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      price: "$500",
      pictureUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Dados_4_a_20_caras.jpg",
      categoryId:1,
      stock:10
    },
    {
      id:1,
      title:"Medias Homero Simpson",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      price: "$700",
      pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_905550-MLA46376901856_062021-F.webp",
      categoryId:0,
      stock:20
    },
    {
      id:2,
      title:"Varita Harry Potter",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      price: "$2.500",
      pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_934439-MLA47414036903_092021-F.webp",
      categoryId:0,
      stock:3
    },
    {
      id:3,
      title:"Mate Groot",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      price: "$1.700",
      pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_774122-MLA31654585075_082019-F.webp",
      categoryId:0,
      stock:10
    },
    {
      id:4,
      title:"Funko Pop! - Raiden",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      price: "$3.500",
      pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_810523-MLA41055769946_032020-F.webp",
      categoryId:2,
      stock:5
    },
    {
      id:5,
      title:"Llavero Capitán America",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      price: "$500",
      pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_913941-MLA43493853441_092020-F.webp",
      categoryId:0,
      stock:20
    },
    {
      id:6,
      title:"Funda Nintendo Switch - Link's Awakening",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      price: "$6.400",
      pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_757701-MLA32969213037_112019-F.webp",
      categoryId:2,
      stock:5
    },
    {
      id:7,
      title:"Manual de monstruos - D&D 5ta Ed.",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      price: "$13.990",
      pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_645695-MLA31115125736_062019-F.webp",
      categoryId:1,
      stock:10
    }
]

  const addToCart = () => {
    setCartItems( cartItems + 1 );
  }


  return (
    <BrowserRouter className="App">
      <NavBar products={products} cartItems={cartItems} categories={categories}/>
      <Switch>
        <Route exact path="/">
          <ItemListContainer 
            products={products}
            addToCart={addToCart}
          />
        </Route>
        <Route path='/categories/:categoryId'>
          <ItemListContainer 
            products={products}
            addToCart={addToCart} 
          />
        </Route>
        <Route path='/item/:id'>
          <ItemDetailContainer 
            products={products}
            addToCart={addToCart} 
          />
        </Route>
        <Route path='/cart'>
          <p>carrito</p>
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
