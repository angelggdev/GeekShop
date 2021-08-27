import React from 'react';
import Logo from '../assets/logo2.png';
import './NavBar.css';

const NavBar = () =>{
    return(
        <div className='navBar'>
            <div className="row">
                <header className="col-4">
                    <a href='#'>
                        <img src={Logo} alt='logo' className='navBar__logo' />
                    </a>                
                </header>
                <nav className="col-8">
                    <a href='#' >Novedades</a>
                    <a href='#' >Sobre Nosotros</a>
                    <a href='#' >Productos</a>
                    <a href='#' >Contacto</a>
                </nav>
            </div>
        </div>
    )
}

export default NavBar;