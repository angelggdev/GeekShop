import './Cart.css';
import {useContext, useEffect, useState} from 'react';
import CartContext from '../../context/cartContext';
import CartItem from './cartItem/CartItem';
import CartForm from './cartForm/CartForm';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

const Cart = () => {
    const {functions, cartItems, showModal, notification} = useContext(CartContext);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let priceSum = functions.getTotal();
        setTotalPrice(priceSum);
    }, [cartItems, functions])

    return(
        <div className="cartContainer container">
            <h1>Carrito</h1>
            {
                cartItems.length !== 0 ?
                <div>
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
                    <div className='cartContainerBottom'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <h3>Precio Total: <span className='totalPrice'>${totalPrice}</span></h3>
                                <button className="cartButton btn" onClick={functions.clear}>Limpiar</button>
                                <br />
                                <Link to={process.env.PUBLIC_URL + "/"} className="cartButton btn">Agregar más productos</Link>
                            </div>
                            <div className='col-md-6'>
                                <CartForm/>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <h2>Tu carrito está vacío, <Link to={process.env.PUBLIC_URL + "/"} className="cartLink">agregar productos</Link>.</h2>
            }
            <Modal show={showModal} onHide={() => functions.setShowModal(!showModal)}>
                <Modal.Header closeButton>
                <Modal.Title>
                    Resultado de la compra
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {notification}
                </Modal.Body>
                <Modal.Footer>
                    <Button className='cartButton' variant="none" onClick={() => functions.setShowModal(!showModal)}>
                        Aceptar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Cart