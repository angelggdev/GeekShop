import './Cart.css';
import {useContext} from 'react';
import CartContext from '../../context/cartContext';
import CartItem from './CartItem/CartItem';
import CartForm from './CartForm/CartForm';
import { Link } from 'react-router-dom';
import NotificationModal from './NotificationModal/NotificationModal';
import { Container, Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'

const Cart = () => {
    const {functions, cartItems} = useContext(CartContext);

    return(
        <Container className="cartContainer">
            <h1>Carrito</h1>
            {
                cartItems.length !== 0 ?
                <div>
                    <Row>
                        <Col md={8}>
                            {
                                cartItems.map((x, i) =>{
                                    return(
                                        <CartItem
                                            key={i}
                                            product={x}
                                        />
                                    ) 
                                })
                            }
                        </Col>
                        <Col md={4} className='cartContainerPrice'>
                            <h3>Precio Total: <span className='totalPrice'>${functions.getTotal()}</span></h3>
                            <Button variant='none' className="cartButton" onClick={functions.clear}>Limpiar</Button>
                            <Button variant='none' className='cartButton'><Link to={process.env.PUBLIC_URL + "/"} className='cartButtonLink'>Agregar más productos</Link></Button>
                            
                        </Col>
                    </Row>
                    <div className='cartContainerBottom'>
                        <CartForm/>
                    </div>
                </div>
                :
                <h2>Tu carrito está vacío, <Link to={process.env.PUBLIC_URL + "/"} className="cartLink">agregar productos</Link>.</h2>
            }
            <NotificationModal />
        </Container>
    )
}

export default Cart