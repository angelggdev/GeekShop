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
                    <NavLink to='/novedades' activeClassName='current' className="clickable link" >Novedades</NavLink>
                    <NavLink to='/about' activeClassName='current' className="clickable link">Sobre Nosotros</NavLink>
                    <Dropdown>
                        <Dropdown.Toggle variant="dark" className="categories clickable" id="dropdown-basic">
                            Categorías  
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdownMenu">
                            {
                                props.categories.map((x, i) =>{
                                    return(
                                        <Dropdown.Item key={i} className="dropdownItem"> 
                                            <NavLink to={`/categories/${x.id}`} activeClassName='current' className="clickable">
                                                {x.category}
                                            </NavLink>
                                        </Dropdown.Item>
                                    )
                                })
                            } 
                        </Dropdown.Menu>
                    </Dropdown>
                     <NavLink to='/contacto' activeClassName='current' className="clickable link">Contacto</NavLink>
                </nav>
                <div className="icon col-3">
                    <CartWidget cartItems={props.cartItems}/>
                </div>
            </div>
        </div>
        
    )
}

export default NavBar;