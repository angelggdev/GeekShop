import { useState, useContext, useEffect } from 'react';
import CartContext from '../../../context/cartContext';
import './CartForm.css';


const CartForm = (props) => {
    const {functions, sendingOrder} = useContext(CartContext);
    const[name, setName] = useState('');
    const[phone, setPhone] = useState('');
    const[email, setEmail] = useState('');
    const[formIsValid, setFormIsValid] = useState(false);

    useEffect(() => {
        const validateName = () => {
            let regName = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/ ;

            if(regName.test(name)){
                return true;
            } else {
                return false;
            }
            
        }
        const validatePhone = () => {
            if(phone.length >= 10){
                return true
            } else {
                return false;
            }
        }
        const validateEmail = () => {
            let atPosition = email.lastIndexOf('@');
            let dotPosition = email.lastIndexOf('.');
            if (!(atPosition < dotPosition && atPosition > 0 && email.indexOf('@@') === -1 && dotPosition > 2 && (email.length - dotPosition) > 2)) {
                return false
            } else {
                return true
            }
        }
        if(validateName() && validatePhone() && validateEmail()){
            setFormIsValid(true);
        } else {
            setFormIsValid(false);
        }
    }, [name, phone, email])
    
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
        if(formIsValid){
            functions.saveOrder(name, phone, email);
        }
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
                            <input 
                                onChange={setNameValue} 
                                placeholder='Nombre Apellido' 
                                type="text" 
                                id="name" 
                                className="input form-control" 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <input 
                                onChange={setEmailValue}
                                placeholder='nombre@gmail.com' 
                                type="email" 
                                id="email" 
                                className="input form-control" 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Teléfono</label>
                            <input 
                                onChange={setPhoneValue} 
                                placeholder='3515555555' 
                                type="number" 
                                id="phone" 
                                className="input form-control" 
                            />
                        </div>
                        <br />
                        <button 
                            onClick={Submit} 
                            disabled={formIsValid ? false: true}
                            type="submit" 
                            className={formIsValid? "submit btn btn-primary" : "submit btn btn-dark"}
                        >
                            Comprar
                        </button>
                    </form>
                </>
                :
                <div>Sending order...</div>
            }
        </>
    )
}

export default CartForm;