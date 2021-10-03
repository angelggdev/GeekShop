import Logo from '../../assets/logo.png';
import CartWidget from '../cartWidget/CartWidget';
import NavLinks from './navLinks/NavLinks';
import NavMobile from './navMobile/NavMobile';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
                <nav className='nav-mobile col-3'>
                   <NavMobile links={NavLinks} loading={loading} categories={categories}/>
                </nav>
                <header className="col-6 col-md-3">
                    <Link to='/'>
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