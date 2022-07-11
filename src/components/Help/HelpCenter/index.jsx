import { Link, useParams } from 'react-router-dom'
import data from '../../../assets/data.json'

const HelpCenter = () => {
    const { id } = useParams();

    return (
        <div className="how-to__container">
            <h2>{data[id].title}</h2>

            <div className="how-to__container__content">
            {data[id].contents.map((content, index) => (
                <p key={index}>{content}</p>
            ))}
            </div>
            <Link to="/" className='main-btn'>Retour à l'accueil</Link>
        </div>
    );
}
export default HelpCenter