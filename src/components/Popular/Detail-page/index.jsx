import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import data from '../../../assets/data.json'

const PopularDetailPage = () => {
    const { id } = useParams();

  return (
    <section className="booking-detail">
        <div className="booking-container">
            <h1>{data.populars[id].name}</h1>
            <div className="stars-container">
                <FontAwesomeIcon icon={faStar} className={data.populars[id].rating>=1 ? 'blue-star' : 'grey-star'}/>
                <FontAwesomeIcon icon={faStar} className={data.populars[id].rating>=2 ? 'blue-star' : 'grey-star'}/>
                <FontAwesomeIcon icon={faStar} className={data.populars[id].rating>=3 ? 'blue-star' : 'grey-star'}/>
                <FontAwesomeIcon icon={faStar} className={data.populars[id].rating>=4 ? 'blue-star' : 'grey-star'}/>
                <FontAwesomeIcon icon={faStar} className={data.populars[id].rating>=5 ? 'blue-star' : 'grey-star'}/>
            </div>

            <p>{data.populars[id].description? data.populars[id].description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis tortor eget neque ultricies volutpat quis non elit. Quisque sodales vel felis et facilisis. Morbi augue elit, venenatis sit amet lobortis et, auctor sit amet libero. Curabitur vestibulum, quam in ornare aliquam, neque nunc scelerisque nisi, ac aliquam lorem quam et felis. Donec molestie ex nec est viverra, sed vulputate turpis suscipit. Mauris risus orci, feugiat non ligula eget, consectetur condimentum tortor. Curabitur lobortis sapien ligula, eget porttitor urna auctor nec. Praesent et urna at nulla molestie fermentum. Aliquam at egestas nibh, nec ultrices sem. Vestibulum hendrerit placerat nunc quis porta. Suspendisse mollis eros eu venenatis accumsan. Praesent non venenatis sem. Suspendisse imperdiet, elit a tincidunt finibus, ante dolor pretium nunc, fringilla vestibulum leo quam vitae tortor. Curabitur sed ex et dui mattis venenatis.'}</p>
            <p>Nuit ?? partir de <strong>{data.populars[id].price}???</strong></p>

            <div className="main-btn-container">
                <Link to="/" className='main-btn'>Retour ?? l'accueil</Link>
            </div>
        </div>
        <div className="img-container">
            <img src={data.populars[id].imgUrl} alt={data.populars[id].imgAlt} />
        </div>
    </section>
  );
}

export default PopularDetailPage;