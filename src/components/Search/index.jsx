import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faLocationDot, faMagnifyingGlass,  } from '@fortawesome/free-solid-svg-icons';
import data from '../../assets/data.json';
import iconMapping from '../iconMapping';

const Search = () => {
    return (
      <section id="search">
        <header>
          <h1>Trouvez votre hébergement pour des vacances de rêve</h1>
          <p>En plein centre ville ou en pleine nature</p>
        </header>
        <form method="get" action=".">
          <span className="mapIconWrapper">
          <FontAwesomeIcon icon={faLocationDot} />
          </span>
          <input type="search" id="citySearch" name="citySearch" placeholder="Marseille, France" aria-label="Enter the name of the city searched here" />
          <button className="searchButton" disabled>
            <span className="spanSearchButton">
              Rechercher
            </span>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="iconSearchButton"/>
          </button>
        </form>

          <div className="filters-container">
            <h2>Filtres</h2>
            <div className="filtersSelection">

            {Object.keys(data.filters).map((filter, index) => (
              <div key={index} className="filters">
                <Link to={data.filters[filter].url}>
                  <div className="wrapFilterIcon">
                    {iconMapping[data.filters[filter].icon]}
                  </div>
                  <span className="textFilter">{data.filters[filter].name}</span>
                </Link>
              </div>
            ))}
            </div>
          </div>

          <div className="infoWrapper"> 
            <div className="wrapInfoIcon">
              <FontAwesomeIcon icon={faInfo} />
            </div>
            <p>
              Plus de 500 logements sont disponibles dans cette ville
            </p>
          </div>          
        </section>
    )
}

export default Search;