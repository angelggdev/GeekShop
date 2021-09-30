import Logo from '../../assets/logo.png';
import CartWidget from '../cartWidget/CartWidget';
import './NavBar.css';
import { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { db } from '../../services/firebase/firebase';
import { collection, getDocs } from 'firebase/firestore'; 

const NavBar = () =>{

    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getDocs(collection(db, 'categories'))
        .then((querySnapshot) => {
            const categoryList = querySnapshot.docs.map(doc => {
                return {id: doc.id, ...doc.data()}
            })
            setCategories(categoryList);
        })
        .catch((error) => {
            console.log('Error searching items', error);
        })
        .finally(() => {
            setLoading(false);
        })
    })


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
                                !loading?
                                categories.map((x, i) =>{
                                    return(
                                        <Dropdown.Item as={NavLink} key={x.id} to={`/categories/${x.name}`} activeClassName='current' className="dropdownItem clickable"> 
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