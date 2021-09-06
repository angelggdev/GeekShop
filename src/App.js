import {useState} from 'react';
import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemCount from './components/itemCount/ItemCount';

function App() {

  const [counter, setCounter] = useState(1);
  const [cartItems, setCartItems] = useState(0);
  
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

  return (
    <div className="App">
      <NavBar cartItems={cartItems}/>
      <ItemListContainer >
        <ItemCount counter={counter} onAdd={onAdd} addToCart={addToCart}/>
      </ItemListContainer>
    </div>
  );
}

export default App;
