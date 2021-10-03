import './About.css';
import TeamPicture from '../../assets/about.jpg'; 

const About = () => {

    return(
        <div className="about container">
            <div className="row">
                <div className="aboutImage col-12 col-md-6">
                    <img src={TeamPicture} alt="team" className="teamPicture"/>
                </div>
                <div className="text col-12 col-md-6">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <p>Reiciendis quo facilis similique odio saepe earum id quis laudantium? Nulla repudiandae voluptas sequi placeat, quia enim perspiciatis nesciunt earum, beatae facere totam eius vel porro mollitia ratione tempore labore. Saepe, asperiores facere? Sequi a maxime qui molestias neque at distinctio repudiandae adipisci illo, nam ipsum ad aliquid est quae incidunt quis in.</p>
                    <p> Recusandae numquam quia aspernatur vel voluptatem deserunt maiores nihil repellendus asperiores impedit suscipit commodi natus reiciendis est sunt autem fugiat quos similique et ratione distinctio, repellat molestiae culpa illo? Vitae eum illum laboriosam velit fugiat minus tenetur facere dignissimos.</p>
                </div>
            </div>
        </div>
    )
}

export default About;

