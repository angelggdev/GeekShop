import './About.css';
import TeamPicture from '../../assets/about.jpg'; 
import { Row, Col, Container } from 'react-bootstrap';

const About = () => {

    return(
        <Container className="about">
            <Row>
                <Col xs={12} md={6} className="aboutImage">
                    <img src={TeamPicture} alt="team" className="teamPicture"/>
                </Col>
                <Col xs={12} md={6} className="text">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <p>Reiciendis quo facilis similique odio saepe earum id quis laudantium? Nulla repudiandae voluptas sequi placeat, quia enim perspiciatis nesciunt earum, beatae facere totam eius vel porro mollitia ratione tempore labore. Saepe, asperiores facere? Sequi a maxime qui molestias neque at distinctio repudiandae adipisci illo, nam ipsum ad aliquid est quae incidunt quis in.</p>
                    <p> Recusandae numquam quia aspernatur vel voluptatem deserunt maiores nihil repellendus asperiores impedit suscipit commodi natus reiciendis est sunt autem fugiat quos similique et ratione distinctio, repellat molestiae culpa illo? Vitae eum illum laboriosam velit fugiat minus tenetur facere dignissimos.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default About;

