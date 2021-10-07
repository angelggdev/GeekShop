import Logo from '../../assets/logo.png';
import CartWidget from './cartWidget/CartWidget';
import NavLinks from './navLinks/NavLinks';
import NavMobile from './navMobile/NavMobile';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProducts } from '../../services/firebase/firebase';


const NavBar = () =>{

    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getProducts('categories', false, false, false, false)
        .then((res) => {
            setCategories(res);
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
                <nav className='nav-mobile col-3'>
                   <NavMobile links={NavLinks} loading={loading} categories={categories}/>
                </nav>
                <header className="col-6 col-md-3">
                    <Link to={process.env.PUBLIC_URL + "/"}>
                        <img src={Logo} alt='logo' className='logo' />
                    </Link>       
                </header>
                <nav className="nav-PC col-md-8">
                    <NavLinks links={NavLinks} loading={loading} categories={categories}/>
                </nav>
                <div className="icon col-3 col-md-1">
                    <CartWidget/>
                </div>
            </div>
        </div>
        
    )
}

export default NavBar;