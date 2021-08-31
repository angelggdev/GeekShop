import React from 'react';
import Logo from '../../assets/logo.png';
import CartWidget from '../cartWidget/CartWidget';
import './NavBar.css';

const NavBar = () =>{
    return(
        <div className='navBar'>
            <div className="row">
                <header className="col-3">
                    <a href='/'>
                        <img src={Logo} alt='logo' className='logo' />
                    </a>                
                </header>
                <nav className="col-6">
                    <a href='/' className="clickable link" >Novedades</a>
                    <a href='/' className="clickable link">Sobre Nosotros</a>
                    <a href='/' className="clickable link">Productos</a>
                    <a href='/' className="clickable link">Contacto</a>
                </nav>
                <div className="icon col-3">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default NavBar;