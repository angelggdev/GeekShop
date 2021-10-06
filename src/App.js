import './App.css';
import NavBar from './components/navBar/NavBar';
import Footer from './components/Footer/Footer.js';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CartProvider } from './context/cartContext';
import Cart from './components/cart/Cart';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Error from './components/error/Error';


function App() {


  return (
    <BrowserRouter className="App">
      <CartProvider>
        <NavBar/>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + "/"}>
            <ItemListContainer 
            />
          </Route>
          <Route path={process.env.PUBLIC_URL + "/about"}>
            <About/>
          </Route>
          <Route path={process.env.PUBLIC_URL + "/categories/:categoryName"}>
            <ItemListContainer 
            />
          </Route>
          <Route path={process.env.PUBLIC_URL + "/item/:id"}>
            <ItemDetailContainer 
            />
          </Route>
          <Route path={process.env.PUBLIC_URL + "/cart"}>
            <Cart />
          </Route>
          <Route path={process.env.PUBLIC_URL + "/contact"}>
            <Contact />
          </Route>
          <Route exact path='*'>
            <Error />
          </Route>
        </Switch>
      </CartProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
