import { Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavLinks = (props) => {

    return(
        <>
            <NavLink exact to='/' onClick={props.toggleShow} activeClassName='current' className="clickable link">Inicio</NavLink>
            <NavLink to='/about' onClick={props.toggleShow} activeClassName='current' className="clickable link">Nosotros</NavLink>
            <Dropdown>
                <Dropdown.Toggle variant="none" className="categories clickable link" id="dropdown-basic">
                    Categorías  
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdownMenu">
                    {
                        !props.loading?
                        props.categories.map((x, i) =>{
                            return(
                                <Dropdown.Item as={NavLink} key={x.id} to={`/categories/${x.name}`} onClick={props.toggleShow} activeClassName='current' className="dropdownItem clickable"> 
                                    {x.name}
                                </Dropdown.Item>
                            )
                        })
                        :
                        <Dropdown.Item className="dropdownItem clickable">
                            <p>Loading...</p>
                        </Dropdown.Item>
                    } 
                </Dropdown.Menu>
            </Dropdown>
            <NavLink to='/contact' onClick={props.toggleShow} activeClassName='current' className="clickable link">Contacto</NavLink>
        </>
    )
}

export default NavLinks;