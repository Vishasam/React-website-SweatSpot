import Image from '../images/values.jpg'
import SectionHead from './SectionHead'
import {GiCutDiamond} from 'react-icons/gi'
import {values} from '../data'
import Card from '../UI/Card'

const Values = () => {
  return (
    <section className='values'>
        <div className="container values__container">
            <div className="values__left">
                <img src={Image} alt="Values image" />
            </div>
            <div className="values__right">
                <SectionHead icon={<GiCutDiamond/>} title="Values"/>
                <p>
                To enhance the quality of life in the communities, we serve through our fitness philosophy, facilities, programs, and products and to instill in the lives of people everywhere the value of health and fitness 
                </p>
                <div className="values__wrapper">
                    {
                        values.map(({id, icon, title, desc}) => {
                            return <Card key={id} className="values__value">
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{desc}</small>
                            </Card>
                        })
                    }
                </div>

            </div>
        </div>
    </section>
  )
}

export default Values