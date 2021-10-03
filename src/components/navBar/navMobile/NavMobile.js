import './NavMobile.css';
import NavLinks from '../navLinks/NavLinks';
import { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
  
const NavMobile = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

    return (
        <>
            <Button variant="none" onClick={toggleShow} className="menuIcon me-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
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