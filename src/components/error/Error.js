import './Error.css';
import NotFound from '../../assets/error.jpg';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='errorContainer container'>
            <div className='errorText'>
                <h1>404</h1>
                <h2>Algo malió sal</h2>
                <Link to={process.env.PUBLIC_URL + '/'} className='error-homeLink'>
                    Volver al inicio
                </Link>
            </div>
            <div>
                <img src={NotFound} alt='error' className='errorImage'/>
            </div>
        </div>
    )
}

export default Error;