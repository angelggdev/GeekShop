import { Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavLinks = (props) => {

    return(
        <>
            <NavLink exact to={process.env.PUBLIC_URL + "/"} onClick={props.toggleShow} activeClassName='current' className="clickable link">Inicio</NavLink>
            <NavLink to={process.env.PUBLIC_URL + "/about"} onClick={props.toggleShow} activeClassName='current' className="clickable link">Nosotros</NavLink>
            <Dropdown className='categoriesContainer'>
                <Dropdown.Toggle variant="none" className="categories clickable link" id="dropdown-basic">
                    Categorías  
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdownMenu">
                    {
                        !props.loading?
                        props.categories.map((x, i) =>{
                            return(
                                <Dropdown.Item as={NavLink} key={x.id} to={process.env.PUBLIC_URL + `/categories/${x.key}`} onClick={props.toggleShow} activeClassName='current' className="dropdownItem clickable"> 
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
            <NavLink to={process.env.PUBLIC_URL + "/contact"} onClick={props.toggleShow} activeClassName='current' className="clickable link">Contacto</NavLink>
        </>
    )
}

export default NavLinks;