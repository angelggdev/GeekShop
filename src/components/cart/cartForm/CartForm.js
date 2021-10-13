import Button from 'react-bootstrap/Button';
import { useState, useContext } from 'react';
import { Form , Spinner} from 'react-bootstrap';
import CartContext from '../../../context/cartContext';
import { useFormik } from 'formik';
import './CartForm.css';



const CartForm = (props) => {
    const {functions, sendingOrder} = useContext(CartContext); 
    const [disableSubmit, setDisableSubmit] = useState(true);   
    
    const validate = values => {
        const errors = {};
        
        if (!values.name) {
            errors.name = 'Required';
        } else if (values.name.length > 40) {
            errors.name = 'Must be 40 characters or less';
        }
        
        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
    
        if (!values.emailCopy) {
            errors.emailCopy = 'Required';
        } else if (values.email !== values.emailCopy) {
            errors.emailCopy = `The email adresses don't match`;
        }
    
        if (!values.phone) {
            errors.phone = 'Required';
        } else if (values.phone.toString().length < 10) {
            errors.phone = 'Invalid phone number';
        }

        if(Object.keys(errors).length === 0 
            && formik.touched.name) {
            setDisableSubmit(false);
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          emailCopy: '',
          phone: ''
        },
        validate,
        onSubmit: values => {
            functions.saveOrder(values.name, values.phone, values.email);
        },
    });

    return(
        <div className='cartFormContainer'>
            {
                !sendingOrder?
                <>
                    <h2>Datos personales:</h2>
                    <Form onSubmit={(e) => {e.preventDefault(); formik.handleSubmit(e)}} className='cartForm'>
                        <Form.Group>
                            <Form.Label>
                                Nombre y apellido
                                {formik.touched.name && formik.errors.name ? (
                                    <span className='formAlert'>{formik.errors.name}</span>
                                ) : null}
                            </Form.Label>
                            <Form.Control 
                                id='name'
                                name='name'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                                placeholder='Nombre Apellido' 
                                type="text" 
                                className='input'
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                E-mail
                                {formik.touched.email && formik.errors.email ? (
                                <span className='formAlert'>{formik.errors.email}</span>
                                ) : null}
                            </Form.Label>
                            <Form.Control 
                                id='email'
                                name='email'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                placeholder='nombre@gmail.com' 
                                type="email"
                                className='input'
                                />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Confirm E-mail
                                {formik.touched.emailCopy && formik.errors.emailCopy ? (
                                <span className='formAlert'>{formik.errors.emailCopy}</span>
                            ) : null}
                            </Form.Label>
                            <Form.Control 
                                id='emailCopy'
                                name='emailCopy' 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.emailCopy}
                                placeholder='nombre@gmail.com' 
                                type="email"
                                className='input'
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Teléfono
                                {formik.touched.phone && formik.errors.phone ? (
                                <span className='formAlert'>{formik.errors.phone}</span>
                                ) : null}
                            </Form.Label>
                            <Form.Control 
                                id='phone'
                                name='phone'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phone}
                                placeholder='3515555555' 
                                type="number" 
                                className='input'
                            />
                        </Form.Group>
                        <Button
                            variant={ disableSubmit? "dark" : "none"}
                            disabled={ disableSubmit ? true: false}
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