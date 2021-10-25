import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CartProvider } from './context/cartContext';
import Cart from './components/Cart/Cart';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Error from './components/Error/Error';


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
          <Route path={process.env.PUBLIC_URL + "*"}>
            <Error />
          </Route>
        </Switch>
      </CartProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
