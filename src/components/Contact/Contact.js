import { Container, Row, Col, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button'
import './Contact.css';

const Contact = () => {

    const Submit = (evt) =>{
        evt.preventDefault();
    }

    return(
        <Container className="container">        
            <main className="mainContact">
            <h1>¡Contactanos!</h1>
            <Row >
                <Col as='form' xs={12} md={9}>
                    <Form>
                        <Form.Group>
                            <Form.Label>Nombre y apellido</Form.Label>
                            <Form.Control type="text" className="input" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" className="input" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Asunto</Form.Label>
                            <Form.Control type="text" className="input" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Mensaje</Form.Label>
                            <Form.Control as='textarea' cols="40" rows="5" className="input"></Form.Control>
                        </Form.Group>
                        <Button variant='none' onClick={Submit} type="submit" className="submit">Enviar</Button>
                    </Form>
                </Col>
                <Col as='aside' xs={12} md={3} className="contactDataContact">
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faMapMarkerAlt} size='lg' fixedWidth color='#ff8b2b' />
                            <p>Córdoba, Argentina</p>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faPhone} size='lg' fixedWidth color='#ff8b2b' />
                            <p>3515555555</p>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faEnvelope} size='lg' fixedWidth color='#ff8b2b' />
                            <p>info@gmail.com</p>
                        </li>
                    </ul>
                </Col>
            </Row>
            <section>
                <iframe className="maps" title="Mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217954.25340982!2d-64.33443211516237!3d-31.399377041048517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432985f478f5b69%3A0xb0a24f9a5366b092!2zQ8OzcmRvYmE!5e0!3m2!1ses-419!2sar!4v1633303996316!5m2!1ses-419!2sar" width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy"></iframe>
            </section>
            </main>
        </Container>

    )
}

export default Contact;