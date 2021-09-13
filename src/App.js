import {useState} from 'react';
import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  const [counter, setCounter] = useState(1);
  const [cartItems, setCartItems] = useState(0);
  const [detailsView, setDetailsView] = useState(false);
  const [productDetails, setProductDetails] = useState("");
  
  const stock = 10;
  const onAdd = (operation) => {
    if (operation === "add" && counter < stock){
      setCounter(counter + 1);
    } 
    if (operation === "substract" && counter > 1){
      setCounter(counter - 1);
    }
  }

  const addToCart = () => {
    setCartItems( cartItems + 1 );
  }

  const seeDetailsView = (id) =>{
    setDetailsView(!detailsView);
    setProductDetails(id);
  }


  return (
    <div className="App">
      <NavBar cartItems={cartItems}/>
      {
        detailsView?
        <ItemDetailContainer 
          counter={counter} 
          onAdd={onAdd} 
          addToCart={addToCart} 
          seeDetailsView={seeDetailsView} 
          productDetails={productDetails}
        />
        :
        <ItemListContainer 
          counter={counter} 
          onAdd={onAdd} 
          addToCart={addToCart} 
          seeDetailsView={seeDetailsView}
        />
      }
    </div>
  );
}

export default App;
