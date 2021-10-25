import Logo from '../../assets/logo.png';
import CartWidget from './CartWidget/CartWidget';
import NavLinks from './NavLinks/NavLinks';
import NavMobile from './NavMobile/NavMobile';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDocuments } from '../../services/firebase/firebase';
import { Col, Row } from 'react-bootstrap';


const NavBar = () =>{

    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getDocuments('categories', false, false, false, false)
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
            <Row>
                <Col as='nav' xs={3} className='nav-mobile'>
                    <NavMobile links={NavLinks} loading={loading} categories={categories}/>
                </Col>
                <Col as='header' xs={6} md={3}>
                    <Link to={process.env.PUBLIC_URL + "/"}>
                        <img src={Logo} alt='logo' className='logo' />
                    </Link>       
                </Col>
                <Col as='nav' xs={8} className="nav-PC">
                    <NavLinks links={NavLinks} loading={loading} categories={categories}/>
                </Col>
                <Col xs={3} md={1} className="icon">
                    <CartWidget/>
                </Col>
            </Row>
        </div>
        
    )
}

export default NavBar;