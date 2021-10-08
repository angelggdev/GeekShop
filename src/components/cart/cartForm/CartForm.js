import Button from 'react-bootstrap/Button';
import { useState, useContext, useEffect } from 'react';
import { Form , Spinner} from 'react-bootstrap';
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
        <div className='cartFormContainer'>
            {
                !sendingOrder?
                <>
                    <h2>Datos personales:</h2>
                    <Form className='cartForm'>
                        <Form.Group>
                            <Form.Label>Nombre y apellido</Form.Label>
                            <Form.Control 
                                onChange={setNameValue} 
                                placeholder='Nombre Apellido' 
                                type="text" 
                                className='input'
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control 
                                onChange={setEmailValue}
                                placeholder='nombre@gmail.com' 
                                type="email"
                                className='input'
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control 
                                onChange={setPhoneValue} 
                                placeholder='3515555555' 
                                type="number" 
                                className='input'
                            />
                        </Form.Group>
                        <br />
                        <Button
                            variant={formIsValid? "none" : "dark"}
                            onClick={Submit} 
                            disabled={formIsValid ? false: true}
                            type="submit" 
                            className="submit"
                        >
                            Comprar
                        </Button>
                    </Form>
                </>
                :
                <div className="sendingOrder">
                    <h3>Sending order...</h3>
                    <Spinner animation="grow" />
                </div>
            }
        </div>
    )
}

export default CartForm;