import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'


const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam deleniti, impedit optio consequuntur vel itaque dolores quia facere aperiam quae? Ad minus architecto harum voluptates minima earum sint, facere odio.
    </Header>

    <section className="about__story">
      <div className=" container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Our Story Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>
          Gymnasia apparatus like barbells, jumping board, running path, tennis-balls, cricket field, and fencing area are used as exercises. In safe weather, outdoor locations are the most conducive to health.[2] Gyms were popular in ancient Greece. Their curricula included self-defense, gymnastica medica, 
          or physical therapy to help the sick and injured, and for physical fitness and sports, from boxing to dancing to skipping rope
          </p>
          <p>
          Gymnasia also had teachers of wisdom and philosophy. Community gymnastic events were done as part of the celebrations during various village festivals. In ancient Greece there was a phrase of contempt, "He can neither swim nor write.
          " After a while, however, Olympic athletes began training in buildings specifically designed for them
          </p>
        </div>
      </div>

    </section>

    <section className="about__Vision">
      <div className=" container about__vision-container">
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>
          Gymnasia apparatus like barbells, jumping board, running path, tennis-balls, cricket field, and fencing area are used as exercises. In safe weather, outdoor locations are the most conducive to health.[2] Gyms were popular in ancient Greece. Their curricula included self-defense, gymnastica medica, 
          or physical therapy to help the sick and injured, and for physical fitness and sports, from boxing to dancing to skipping rope
          </p>
          <p>
          Gymnasia also had teachers of wisdom and philosophy. Community gymnastic events were done as part of the celebrations during various village festivals. In ancient Greece there was a phrase of contempt, "He can neither swim nor write.
          " After a while, however, Olympic athletes began training in buildings specifically designed for them
          </p>
        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt="Our Vision Image" />
        </div>
      </div>

    </section>

    <section className="about__mission">
      <div className=" container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="Our Mission Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>
          Gymnasia apparatus like barbells, jumping board, running path, tennis-balls, cricket field, and fencing area are used as exercises. In safe weather, outdoor locations are the most conducive to health.[2] Gyms were popular in ancient Greece. Their curricula included self-defense, gymnastica medica, 
          or physical therapy to help the sick and injured, and for physical fitness and sports, from boxing to dancing to skipping rope
          </p>
          <p>
          Gymnasia also had teachers of wisdom and philosophy. Community gymnastic events were done as part of the celebrations during various village festivals. In ancient Greece there was a phrase of contempt, "He can neither swim nor write.
          " After a while, however, Olympic athletes began training in buildings specifically designed for them
          </p>
        </div>
      </div>

    </section>
    </>
  )
}

export default About