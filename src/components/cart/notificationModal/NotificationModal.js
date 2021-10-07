import './NotificationModal.css';
import { useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import CartContext from '../../../context/cartContext';

const NotificationModal = () => {
    const {functions, showModal, notification} = useContext(CartContext);

    return(
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
    )
}

export default NotificationModal;