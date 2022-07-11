import { HashLink as Link } from 'react-router-hash-link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

import data from '../../assets/data.json';

const Popular = () => {
    return (
      <aside className="popular-container">
        <header>
          <h2>Les plus populaires</h2>
          <FontAwesomeIcon icon={faStar} />
        </header>

        <div className="popular-card-container">
          {Object.keys(data.populars).map((popular, index) => (
            <div key={index} className="popular-card">
              <Link to={`popular/${data.populars[popular].slug}`}>
                <figure className="img-container">
                  <img src={data.populars[popular].imgUrl} alt={data.populars[popular].imgAlt} />
                  <figcaption>
                    <h3>{data.populars[popular].name}</h3>
                    <p>Nuit à partir de <strong>{data.populars[popular].price}€</strong></p>
                    <div className="stars-container">
                      <FontAwesomeIcon icon={faStar} className={data.populars[popular].rating>=1 ? 'blue-star' : 'grey-star'}/>
                      <FontAwesomeIcon icon={faStar} className={data.populars[popular].rating>=2 ? 'blue-star' : 'grey-star'}/>
                      <FontAwesomeIcon icon={faStar} className={data.populars[popular].rating>=3 ? 'blue-star' : 'grey-star'}/>
                      <FontAwesomeIcon icon={faStar} className={data.populars[popular].rating>=4 ? 'blue-star' : 'grey-star'}/>
                      <FontAwesomeIcon icon={faStar} className={data.populars[popular].rating>=5 ? 'blue-star' : 'grey-star'}/>
                    </div>
                  </figcaption>
                </figure>
              </Link>
            </div>
          ))}
        </div>
      </aside>
    )
}

export default Popular;