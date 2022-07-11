import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import data from '../../../assets/data.json'

const HostingDetailPage = () => {
    const { id } = useParams();

  return (
    <section className="booking-detail">
        <div className="booking-container">
            <h1>{data.bookings[id].name}</h1>
            <div className="stars-container">
                <FontAwesomeIcon icon={faStar} className={data.bookings[id].rating>=1 ? 'blue-star' : 'grey-star'}/>
                <FontAwesomeIcon icon={faStar} className={data.bookings[id].rating>=2 ? 'blue-star' : 'grey-star'}/>
                <FontAwesomeIcon icon={faStar} className={data.bookings[id].rating>=3 ? 'blue-star' : 'grey-star'}/>
                <FontAwesomeIcon icon={faStar} className={data.bookings[id].rating>=4 ? 'blue-star' : 'grey-star'}/>
                <FontAwesomeIcon icon={faStar} className={data.bookings[id].rating>=5 ? 'blue-star' : 'grey-star'}/>
            </div>

            <p>{data.bookings[id].description? data.bookings[id].description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis tortor eget neque ultricies volutpat quis non elit. Quisque sodales vel felis et facilisis. Morbi augue elit, venenatis sit amet lobortis et, auctor sit amet libero. Curabitur vestibulum, quam in ornare aliquam, neque nunc scelerisque nisi, ac aliquam lorem quam et felis. Donec molestie ex nec est viverra, sed vulputate turpis suscipit. Mauris risus orci, feugiat non ligula eget, consectetur condimentum tortor. Curabitur lobortis sapien ligula, eget porttitor urna auctor nec. Praesent et urna at nulla molestie fermentum. Aliquam at egestas nibh, nec ultrices sem. Vestibulum hendrerit placerat nunc quis porta. Suspendisse mollis eros eu venenatis accumsan. Praesent non venenatis sem. Suspendisse imperdiet, elit a tincidunt finibus, ante dolor pretium nunc, fringilla vestibulum leo quam vitae tortor. Curabitur sed ex et dui mattis venenatis.'}</p>
            <p>Nuit à partir de <strong>{data.bookings[id].price}€</strong></p>
            
            <Link to="/" className='main-btn'>Retour à l'accueil</Link>
        </div>
        <div className="img-container">
            <img src={data.bookings[id].imgUrl} alt={data.bookings[id].imgAlt} />
        </div>
    </section>
  );
}

export default HostingDetailPage;