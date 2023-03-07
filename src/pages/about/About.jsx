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
    Instead of being just another gym equipment retailer, our founders wanted to be the best in the industry and set their minds to doing so!    </Header>

    <section className="about__story">
      <div className=" container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Our Story Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>
          MyFitness has a strong social media foothold and we have garnered a fitness community on Instagram that has helped us immensely. Our Youth & Fitness Icon Sahil Khan has been a true source of inspiration for this community and has helped motivate them to acquire a healthy lifestyle by making the right choice.
          </p>

        </div>
      </div>

    </section>

    <section className="about__Vision">
      <div className=" container about__vision-container">
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>
          We've spent over 50 years defining fitness and now we're reinventing it. With personal fitness profiles, both traditional and digital personal training options and diverse group exercise class offerings all delivered in a supportive manner and motivating the environment.
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
          Our mission is to PROVIDE a welcoming environment for the Austin community to improve their overall health. To EDUCATE our clients that overall health is more than just a fitness goal – it’s about community, variety, refueling, recovering, and challenging your mind and body. We EMPOWER our clients towards a greater quality of life with seasoned professionals, varied programs and disciplines, and conscious living principles all under one roof.
          </p>

        </div>
      </div>

    </section>
    </>
  )
}

export default About