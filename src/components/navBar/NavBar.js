import Logo from '../../assets/logo.png';
import CartWidget from '../cartWidget/CartWidget';
import './NavBar.css';
import { Dropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const NavBar = (props) =>{

    return(
        <div className='navBar'>
            <div className="row">
                <header className="col-3">
                    <Link to='/'>
                        <img src={Logo} alt='logo' className='logo' />
                    </Link>       
                </header>
                <nav className="col-6">
                    <NavLink exact to='/' activeClassName='current' className="clickable link">Inicio</NavLink>
                    <NavLink to='/about' activeClassName='current' className="clickable link">Nosotros</NavLink>
                    <Dropdown>
                        <Dropdown.Toggle variant="dark" className="categories clickable" id="dropdown-basic">
                            Categorías  
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdownMenu">
                            {
                                props.categories.map((x, i) =>{
                                    return(
                                        <Dropdown.Item as={NavLink} key={i} to={`/categories/${x.category}`} activeClassName='current' className="dropdownItem clickable"> 
                                            {x.category}
                                        </Dropdown.Item>
                                    )
                                })
                            } 
                        </Dropdown.Menu>
                    </Dropdown>
                     <NavLink to='/contact' activeClassName='current' className="clickable link">Contacto</NavLink>
                </nav>
                <div className="icon col-3">
                    <CartWidget/>
                </div>
            </div>
        </div>
        
    )
}

export default NavBar;