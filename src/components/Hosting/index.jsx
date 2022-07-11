import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import data from '../../assets/data.json';
import Popular from '../Popular';

const Hosting = () => {
    return (
      <section id="booking">
        <div className="booking-container">
            <h2>Hébergements à Marseille</h2>
            <div className="hosting-container"> 
              {Object.keys(data.bookings).map((booking, index) => (
                <div key={index} className="hosting-card">
                  <Link to={`hosting/${data.bookings[booking].slug}`}>
                    <figure className="img-container">
                      <img src={data.bookings[booking].imgUrl} alt={data.bookings[booking].imgAlt} /> 
                      <figcaption>
                        <h3>{data.bookings[booking].name}</h3>
                        <p>Nuit à partir de <strong>{data.bookings[booking].price}€</strong></p>
                        <div className="stars-container">
                          <FontAwesomeIcon icon={faStar} className={data.bookings[booking].rating>=1 ? 'blue-star' : 'grey-star'}/>
                          <FontAwesomeIcon icon={faStar} className={data.bookings[booking].rating>=2 ? 'blue-star' : 'grey-star'}/>
                          <FontAwesomeIcon icon={faStar} className={data.bookings[booking].rating>=3 ? 'blue-star' : 'grey-star'}/>
                          <FontAwesomeIcon icon={faStar} className={data.bookings[booking].rating>=4 ? 'blue-star' : 'grey-star'}/>
                          <FontAwesomeIcon icon={faStar} className={data.bookings[booking].rating>=5 ? 'blue-star' : 'grey-star'}/>
                        </div>
                      </figcaption>
                    </figure>
                  </Link>
                </div>
              ))}
            </div>
            <button className="see-more-btn" aria-label="See more accomodations">
              <h3>Afficher plus</h3>
            </button>
        </div>
        <Popular />
      </section>
    )
}

export default Hosting;