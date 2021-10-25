import './NavMobile.css';
import NavLinks from '../NavLinks/NavLinks';
import { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  
const NavMobile = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

    return (
        <>
            <Button variant="none" onClick={toggleShow} className="menuIcon me-2">
                <FontAwesomeIcon icon={faBars} size='2x' fixedWidth color='white'/>
            </Button>
            <Offcanvas className='offCanvas' show={show} onHide={handleClose} scroll='true' backdrop='true' placement='start'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="offCanvasTitle">Menú</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='offCanvasBody'>
                    <NavLinks toggleShow={toggleShow} links={props.links} loading={props.loading} categories={props.categories}/>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default NavMobile;