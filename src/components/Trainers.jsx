import Card from '../UI/Card'

const Trainers = ({image, name, job, socials}) => {
  return (
    <Card className="trainers">
        <div className="trainers__img">
            <img src={image} alt={name} />
        </div>
        <h3>{name}</h3>
        <p>{job}</p>
        <div className="trainers__socials">
            {
                socials.map(({icon, link}, index) => {
                    return <a key={index} href={link} target="_blank" rel='noreffer noopener'>{icon}</a>
                })
            }
        </div>

    </Card>
  )
}

export default Trainers