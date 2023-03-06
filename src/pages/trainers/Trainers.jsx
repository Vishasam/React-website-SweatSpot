import Header from '../../components/Header'
import Headerimage from '../../images/header_bg_5.jpg'
import {trainers} from '../../data'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import Trainer from '../../components/Trainers'
import './trainers.css'


const Trainers = () => {
  return (
    <>
    <Header title="Our Trainers" image={Headerimage}>
    Getting fit and staying fit takes a lot of work and motivation
    <p>HERE WE ARE!</p>
    </Header>
    
    <section className="trainers">
      <div className="container trainers__container">
        {
          trainers.map(({id, image, name, job, socials}) => {
            return<Trainer key={id} image={image} name={name} job={job} socials={
              [
              {icon: <BsInstagram/>, link: socials[0]},
              {icon: <AiOutlineTwitter/>, link: socials[1]},
              {icon: <FaFacebookF/>, link: socials[2]},
              {icon: <FaLinkedinIn/>, link: socials[3]}
            ]
          }></Trainer>
          })
        }
      </div>
    </section>
    </>

  )
}

export default Trainers