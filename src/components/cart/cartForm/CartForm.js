import { useState, useContext } from 'react';
import CartContext from '../../../context/cartContext';
import './CartForm.css';


const CartForm = (props) => {
    const[name, setName] = useState('');
    const[phone, setPhone] = useState('');
    const[email, setEmail] = useState('');

    const {functions, sendingOrder} = useContext(CartContext);

    const setNameValue = (event) => {
        setName(event.target.value)
    }
    const setPhoneValue = (event) => {
        setPhone(event.target.value)
    }
    const setEmailValue = (event) => {
        setEmail(event.target.value)
    }

    const Submit = (evt) =>{
        evt.preventDefault();
        if(name !== '' && phone !== '' && email !== ''){
            functions.saveOrder(name, phone, email);
        }
        name === '' && alert('Por favor inserte Nombre y Apellido');
        phone === '' && alert('Por favor ingrese número de teléfono');
        email === '' && alert('Por favor ingrese su Email'); 
    }


    return(
        <>
            {
                !sendingOrder?
                <>
                    <h2>Datos personales:</h2>
                    <form className='cartForm'>
                        <div className="form-group">
                            <label htmlFor="name">Nombre y apellido</label>
                            <input onKeyUp={setNameValue} type="text" id="name" className="input form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <input onKeyUp={setEmailValue} type="email" id="email" className="input form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Teléfono</label>
                            <input onKeyUp={setPhoneValue} type="number" id="phone" className="input form-control" />
                        </div>
                        <br />
                        <button onClick={Submit} type="submit" className="submit btn btn-primary">Comprar</button>
                    </form>
                </>
                :
                <div>Sending order...</div>
            }
        </>
    )
}

export default CartForm;