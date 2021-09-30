import './App.css';
import NavBar from './components/navBar/NavBar';
import Footer from './components/Footer/Footer.js';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CartProvider } from './context/cartContext';
import Cart from './components/cartWidget/cart/Cart';
import About from './components/about/About';
import Contact from './components/contact/Contact';


function App() {

  const categories = [
    {
      category:"Cine-TV",
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

  return (
    <BrowserRouter className="App">
      <CartProvider>
        <NavBar categories={categories}/>
        <Switch>
          <Route exact path="/">
            <ItemListContainer 
            />
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path='/categories/:categoryName'>
            <ItemListContainer 
            />
          </Route>
          <Route path='/item/:id'>
            <ItemDetailContainer 
            />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </CartProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
